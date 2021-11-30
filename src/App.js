import React from 'react'
import "./styles/reset.css"
import "./App.css"
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Personal_Image from './component/Personal_Image'
import { Modal, Button } from 'react-bootstrap'
import CropImage from './component/cropImage'
import CheckoutButton from './component/CheckoutButton'
import Modal_Data from './component/Modal_Data';
import Swal from 'sweetalert2'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      infos: [
        // 'Personal Details', 'Personal Profile', 'Interests and Achievements', 'Education', 'Qualifications', 'Work Experience', 'References'
        {
          head: 'Personal Details',
          data: [
            {
              Name: "",
              Phone: "",
              Email: "",
              Address: ""
            }
          ]
        },
        {
          head: 'Personal Profile',
          data: [
            {
              About_Me: ""
            }
          ]
        },
        {
          head: 'Experience',
          data: [
            {
              position: "",
              company: "",
              Start_Date: "",
              End_Date: "",
              Technical_Skills: "",
              description: ""
            }
          ]
        },
        {
          head: 'Education',
          data: [
            {
              degree: "",
              university: "",
              Start_Date: "",
              End_Date: "",
              Technical_Skills: "",
              description: ""
            }
          ]
        },
        {
          head: 'Certificate',
          data: [
            {
              name: "",
              Date: "",
              Technical_Skills: ""
            }
          ]
        },
        {
          head: 'Skills',
          data: []
        }
      ],
      image: '',
      test_Image: '',
      show: false,
      addData: false,
      newDataAdded: 'Personal Details',
      newFeildAdded: 'Personal Details',
      index: 0
    }
  }

  // Add data into my storage
  addLocally = async () => {
    localStorage.removeItem("myStoreData")
    localStorage.setItem("myStoreData",JSON.stringify(this.state.infos))
  }

  async componentDidMount(){
    let mySavedData = JSON.parse(localStorage.getItem("myStoreData"))
    if(mySavedData){
      await this.setState({
        infos: mySavedData
      })
      console.log(this.state.infos);
    }else{
      // this.state.infos.JSON.tos
      this.addLocally()
    }
  }

  // To upload Image and set it
  setImage = (a, b) => {
    if (b) {
      console.log(a);
      if (a) {
        this.setState({
          image: `${URL.createObjectURL(a)}`,
          show: !this.state.show
        })
        console.log("this.state.image");
      }

    } else {
      this.setState({
        image: a,
        test_Image: a,
        show: !this.state.show
      })
      console.log("this.state.image");
    }

  }
  //  Modal to set image
  showModal = async () => {
    console.log('--------------------');
    await this.setState({
      show: !this.state.show,
      image: this.state.test_Image || ''
    })
    console.log(this.state.show);
  }


  //  To show the form to add personal data
  addDataFunc = async (dataType, index) => {
    await this.setState({
      index: index,
      newDataAdded: dataType
    })
    console.log(dataType);
  }

  //  To show and hide the modal to add new feild
  hideDataFunc = async () => {
    await this.setState({
      addData: !this.state.addData
    })
  }
  addNewFeildModal = async () => {
    console.log("show Modal");
    await this.setState({
      newFeildAdded: 'Add new feild',
      addData: !this.state.addData
    })
  }
  //  Function to add new feild
  addNewFeild = (feildName) => {
    let myObj = {
      head: `${feildName}_New`,
      data: [
        {
          name: "",
          descreption: ""
        }
      ]
    }
    let myOldData = this.state.infos
    myOldData.push(myObj)
    this.setState({
      infos: myOldData
    })
    console.log(this.state.infos);
    this.addLocally()
  }

  //  Add new object of data
  addObj = async (head) => {
    //  Skills'Certificate'Education'Experience'Personal Details
    let myNewObj = {}
    let index
    let myStateData = this.state.infos
    switch (head) {
      case 'Experience':
        myNewObj = {
          position: "",
          company: "",
          Start_Date: "",
          End_Date: "",
          Technical_Skills: "",
          description: ""
        };
        index = 2
        break;
      case 'Education':
        myNewObj = {
          degree: "",
          university: "",
          Start_Date: "",
          End_Date: "",
          Technical_Skills: "",
          description: ""
        }
        index = 3
        break;
      case 'Certificate':
        myNewObj = {
          name: "",
          Date: "",
          Technical_Skills: ""
        };
        index = 4
        break;
      default:
        break;
    }

    myStateData[index].data.push(myNewObj)
    await this.setState({
      infos: myStateData
    })
  }
  addSkillsPersonal = async (head) => {
    let myNewObj = { new_link: "" }
    let myStateData = this.state.infos
    if (head == "Skills") {
      myNewObj = { new_Skill: "" }
      myStateData[5].data.push(myNewObj)
    } else {
      myStateData[0].data.push(myNewObj)
    }
    await this.setState({
      infos: myStateData
    })
    console.log(this.state.infos);
  }
  addNewObjToFeild = async (index) => {
    let myArr = this.state.infos
    let newObj = {
      name: "",
      descreption: ""
    }
    myArr[index].data.push(newObj)
    await this.setState({
      infos: myArr
    })

  }
  // Delete All data and reset app
  deleteAllDataAlert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteAllData()
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ).then(()=>{
          window.location.reload(false)
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  deleteAllData = () => {
    localStorage.removeItem("myStoreData");
    
  }
  //  delete object of data
  deleteObj = async (index, objectIndex) => {
    let myArr = this.state.infos
    console.log(myArr[index].data[objectIndex])
    myArr[index].data.splice(objectIndex, 1);
    await this.setState({
      infos: myArr
    })
  }

  render() {

    return (
      <div className="main_Div">


        {
          this.state.show &&
          <CropImage setImage={this.setImage} image={this.state.image} hide={this.showModal} show={this.state.show} />

        }
        {
          (this.state.addData && (this.state.newFeildAdded == 'Add new feild')) &&
          <Modal_Data infos={this.state.infos} addNewFeild={this.addNewFeild} newDataAdded={this.state.newFeildAdded} show={this.state.addData} hideModalData={this.hideDataFunc} />
        }

        <Header />

        <Personal_Image setImage={this.setImage} image={this.state.image} />

        <Main deleteObj={this.deleteObj} addNewObjToFeild={this.addNewObjToFeild} addSkillsPersonal={this.addSkillsPersonal} addObj={this.addObj} index={this.state.index} infos={this.state.infos} newDataAdded={this.state.newDataAdded} addNewFeildModal={this.addNewFeildModal} addDataFunc={this.addDataFunc} />


        <Footer />

        <CheckoutButton deleteAllDataAlert={this.deleteAllDataAlert} downloadFunc={this.downloadFunc} download={this.props.download} />


      </div>
    )
  }
}

export default App

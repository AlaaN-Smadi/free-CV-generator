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
import Modal_Data from './component/Modal_Data'


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
              Name:"",
              Phone:"",
              Email:"",
              Address:""
            }
          ]
        },
        {
          head: 'Personal Profile',
          data: [
            {
              About_Me:""
            }
          ]
        },
        {
          head: 'Experience',
          data: [
            {
              position:"",
              company:"",
              Start_Date:"",
              End_Date:"",
              Technical_Skills:"",
              description:""
            }
          ]
        },
        {
          head: 'Education',
          data: [
            {
              degree:"",
              university:"",
              Start_Date:"",
              End_Date:"",
              Technical_Skills:"",
              description:""
            }
          ]
        },
        {
          head: 'Certificate',
          data: [
            {
              name:"",
              Date:"",
              Technical_Skills:""
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
      index:0
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
      index:index,
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
      newFeildAdded:'Add new feild',
      addData: !this.state.addData
    })
  }
  //  Function to add new feild
  addNewFeild = (feildName) => {
    let myObj = {
      head: `${feildName}_New`,
      data: []
    }
    let myOldData = this.state.infos
    myOldData.push(myObj)
    this.setState({
      infos:myOldData
    })
    console.log(this.state.infos);
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

        <Main index={this.state.index} infos={this.state.infos} newDataAdded={this.state.newDataAdded} addNewFeildModal={this.addNewFeildModal} addDataFunc={this.addDataFunc}/>


        <Footer />

        <CheckoutButton downloadFunc={this.downloadFunc} download={this.props.download} />


      </div>
    )
  }
}

export default App

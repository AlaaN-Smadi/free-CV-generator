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
          data: []
        },
        {
          head: 'Personal Profile',
          data: []
        },
        {
          head: 'Education',
          data: []
        },
        {
          head: 'Interests and Achievements',
          data: []
        },
        {
          head: 'Qualifications',
          data: []
        },
        {
          head: 'Work Experience',
          data: []
        },
        {
          head: 'References',
          data: []
        }
      ],
      image: '',
      test_Image: '',
      show: false,
      addData: false,
      newDataAdded: ''
    }



  }

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

  showModal = async () => {
    console.log('--------------------');
    await this.setState({
      show: !this.state.show,
      image: this.state.test_Image || ''
    })
    console.log(this.state.show);
  }

  addDataFunc = async (dataType) => {
    await this.setState({
      newDataAdded: dataType,
      addData: !this.state.addData
    })
    console.log(dataType);
  }
  hideDataFunc = async () => {
    await this.setState({
      addData: !this.state.addData
    })
  }

  addNewFeild = (feildName) => {
    let myObj = {
      head: feildName,
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
          this.state.addData &&
          <Modal_Data addNewFeild={this.addNewFeild} newDataAdded={this.state.newDataAdded} show={this.state.addData} hideModalData={this.hideDataFunc} />
        }

        <Header />

        <Personal_Image setImage={this.setImage} image={this.state.image} />

        <Main addDataFunc={this.addDataFunc} infos={this.state.infos} />


        <Footer />

        <CheckoutButton downloadFunc={this.downloadFunc} download={this.props.download} />


      </div>
    )
  }
}

export default App

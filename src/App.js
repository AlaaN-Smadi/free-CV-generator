import React from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Personal_Image from './component/Personal_Image'


class App extends React.Component {
  render() {
    return (
      <div>
      

        <Header />

        <Personal_Image />

        <Main />

        <Footer />
      </div>
    )
  }
}

export default App

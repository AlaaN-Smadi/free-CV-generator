import React from 'react';
import checout from "../image/checkout.png"
import notChecout from "../image/notCheckout.png"
import deleteData from "../image/delete_data.png"
import downloadData from "../image/download.png"
import donate from "../image/donate.png"
import "../styles/checkoutButton.css"
import SupportUs from './SupportUs';

// src/image/download.png
class CheckoutButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            download: false,
        }
    }
    func = () => {
        this.setState({
            download: !this.state.download
        })
    }


    render() {
        return (
            <div className="checkoutButton">
                <section className="checkoutSections">

                    {
                        !this.state.download &&
                        <img onClick={() => this.func()} className="checkout" src={`${checout}`} alt="checkout" />

                    }
                    {
                        this.state.download &&
                        <>
                            <img onClick={() => this.func()} className="checkout" src={`${notChecout}`} alt="checkout" />

                            <div onClick={()=>this.props.donate(true)} className="supportUsButton">
                                <img src={`${donate}`} alt="data" />
                                <p className="deleteP"> <b> Support Us </b> 🥰  </p>
                            </div>

                            <div onClick={()=>this.props.downloadPage()} className="downloadButton">
                                <img src={`${downloadData}`} alt="data" />
                                <p className="checkoutP"> <b> Select Your CV Tamplate </b> 😊  </p>
                            </div>

                            <div onClick={()=>this.props.deleteAllDataAlert()} className="deleteButton">
                                <img src={`${deleteData}`} alt="data" />
                                <p className="deleteP"> <b> Delete Data  </b>😢 </p>
                            </div>

                            <div className="shaddow">

                            </div>
                        </>

                    }

                </section>

                    

            </div>
        )
    }
}

export default CheckoutButton

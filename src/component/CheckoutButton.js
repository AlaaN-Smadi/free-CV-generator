import React, { Component } from 'react';
import checout from "../image/checkout.png"
import notChecout from "../image/notCheckout.png"
import deleteData from "../image/delete_data.png"
import downloadData from "../image/download.png"
import "../styles/checkoutButton.css"

// src/image/download.png
class CheckoutButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            download: false
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

                            <div className="downloadButton">
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

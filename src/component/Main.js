import React, { Component } from 'react';
import '../styles/main.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';


class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            infosMap:[]
        }
    }

    componentDidMount(){
        this.setState({
            infosMap:this.props.infos
        })
    }

    addDataFunc = (dataType) => {
        // console.log("hhhhhhhhhhhhhhhhhhh");
        this.props.addDataFunc(dataType)
    }
    render() {

        return (
            <>

                <div className="main_Container">
                    <section className="left_Section">
                        {
                            this.state.infosMap?.map((infos, idx) => {
                                return (
                                    <button onClick={()=>this.addDataFunc(infos.head)} key={idx} className="info_btn">{infos.head}</button>
                                )
                            })
                        }
                        <button onClick={()=>this.addDataFunc('Add new feild')} className="add_info_btn"> Add new feild ➕ </button>

                    </section>

                    <section className="left_Section">
                        <div className="CV_Infos">
                            <p className="CV_Infos_Title"> <b> Your Info </b> </p>

                            <span>  </span>
                            {this.state.infosMap.map((infos, index) => {
                                return (
                                    <div key={index}>
                                        <p className="info_Title"><b>{infos.head}</b></p>
                                        <p className="info_data">{infos.head}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                </div>
            </>
        )
    }
}

export default Main

import React, { Component } from 'react';
import '../styles/main.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            infos: ['Personal Details', 'Personal Profile', 'Interests and Achievements', 'Education', 'Qualifications', 'Work Experience', 'References']
        }
    }
    render() {
       
        return (
            <div className="main_Container">
                <section className="left_Section">
                    {
                        this.state.infos.map(infos => {
                            return(
                                <button className="info_btn">{infos}</button>
                            )
                        })
                    }
                </section>

                <section className="left_Section">

                </section>

            </div>
        )
    }
}

export default Main

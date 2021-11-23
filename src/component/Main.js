import React, { Component } from 'react';
import '../styles/main.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Modal, Button, Form, Col, Row, FloatingLabel } from 'react-bootstrap'


class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            infosMap: [],
            index: 10,
            month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            year: [],
            feilds: []
        }
    }

    componentDidMount() {
        if (this.props.newDataAdded !== "Add new feild") {
            // if()
            let myArrData = []
            for (let i = 0; i < this.props.infos[this.props.index].data.length; i++) {
                let myFeilds = Object.entries(this.props.infos[this.props.index].data[0])
                myArrData.push(myFeilds)
            }
            console.log(myArrData);

            let yearArr = []
            for (let i = 1995; i < 2022; i++) {
                yearArr.push(i)
            }


            this.setState({
                feilds: myArrData,
                year: yearArr,
                infosMap: this.props.infos
            })
        }

    }

    addDataFunc = async (dataType, idx) => {
        // console.log("hhhhhhhhhhhhhhhhhhh");

        await this.props.addDataFunc(dataType, idx)

        if (this.props.newDataAdded !== "Add new feild") {
            let myArrData = []
            for (let i = 0; i < this.props.infos[this.props.index].data.length; i++) {
                let myFeilds = Object.entries(this.props.infos[this.props.index].data[0])
                myArrData.push(myFeilds)
            }
            console.log(myArrData);

            this.setState({
                feilds: myArrData,
            })

        }
    }
    render() {

        return (
            <>

                <div className="main_Container">
                    <section className="left_Section">
                        {
                            this.state.infosMap?.map((infos, idx) => {
                                return (
                                    <button onClick={() => this.addDataFunc(infos.head, idx)} key={idx} className="info_btn">{infos.head.split("_")[0]}</button>
                                )
                            })
                        }
                        <button onClick={() => this.props.addNewFeildModal()} className="add_info_btn"> Add new feild ➕ </button>

                    </section>




                    <section className="left_Section">
                        <div className="CV_Infos">
                            {/* <p className="CV_Infos_Title"> <b> Your Info </b> </p> */}
                            <p className="CV_Infos_Title"> <b> {this.props.newDataAdded} </b> </p>

                            

                            <span>  </span>
                            {
                                (this.props.newDataAdded.split("_")[1] == 'New') &&
                                <>
                                    <Form>
                                        <Form.Group className="mb-3" id="formBasicEmail">
                                            <Form.Label className="formLabel" htmlFor="feildName"> {this.props.newDataAdded.split("_")[0]} Name </Form.Label>
                                            <Form.Control required type="text" id="feildName" name="feildName" />

                                        </Form.Group>

                                        <Form.Group className="mb-3" id="formBasicPassword">
                                            <Form.Label className="formLabel" htmlFor="feildDesc"> {this.props.newDataAdded.split("_")[0]} Description </Form.Label>
                                            <Form.Control as="textarea" rows={3} type="text" id="feildDesc" name="feildDesc" />
                                        </Form.Group>


                                        <Button onClick={() => this.props.hideModalData()} variant="secondary">
                                            Close
                                        </Button>
                                        <Button type="submit" variant="primary">
                                            Save Changes
                                        </Button>

                                    </Form>
                                </>
                            }

                            {
                                (this.props.newDataAdded.split("_")[1] !== 'New') &&
                                <>

                                    <Form>
                                        {/* <p className="CV_Infos_Title">  </p> */}
                                        {
                                            this.state.feilds.map((feild,indexFeild) => {
                                                return (
                                                    <div key={indexFeild}>
                                                        {
                                                            feild.map(data => {
                                                                return (
                                                                    <div key={data[0]}>
                                                                        {/* <Form.Group className="mb-3" id="formBasicEmail">
                                                                        <Form.Label className="formLabel" htmlFor="feildName"> {data[0]} </Form.Label>
                                                                        <Form.Control required defaultValue={data[1]} type="text" id="feildName" name="feildName" />

                                                                        </Form.Group> */}

                                                                        {
                                                                            ((data[0] !== "About_Me") && (data[0] !== "Start_Date") && (data[0] !== "End_Date") && (data[0] !== "Date")) &&
                                                                            (
                                                                                <>
                                                                                    {/* <br /> */}
                                                                                    <FloatingLabel id={`${data[0]}`} label={`${data[0]}`}>
                                                                                        <Form.Control id={`${data[0]}`} name={`${data[0]}`} defaultValue={`${data[1]}`} placeholder={`${data[0]}`} type="text" />
                                                                                    </FloatingLabel>
                                                                                </>
                                                                            )
                                                                        }

                                                                        {
                                                                            ((data[0] == "Start_Date") || (data[0] == "End_Date") || (data[0] == "Date")) &&
                                                                            <>

                                                                                <Form.Label className="formLabel"> {data[0]} </Form.Label>

                                                                                <Row className="g-2">
                                                                                    <Col md>
                                                                                        <FloatingLabel id="floatingSelectGrid" label="Month">
                                                                                            <Form.Select defaultValue={`${data[1]}`} aria-label="Floating label select example">
                                                                                                {
                                                                                                    this.state.month.map(month => {
                                                                                                        return (
                                                                                                            <option value={month}> {month} </option>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </Form.Select>
                                                                                        </FloatingLabel>
                                                                                    </Col>
                                                                                    <Col md>
                                                                                        <FloatingLabel id="floatingSelectGrid" label="Year">
                                                                                            <Form.Select defaultValue={`${data[1]}`} aria-label="Floating label select example">
                                                                                                {this.state.year.map(year => {
                                                                                                    return (
                                                                                                        <>
                                                                                                            <option value={year}> {year} </option>

                                                                                                        </>
                                                                                                    )
                                                                                                })}
                                                                                                {
                                                                                                    (data[0] == "End_Date") &&
                                                                                                    <option value="Present" > Present </option>
                                                                                                }
                                                                                            </Form.Select>
                                                                                        </FloatingLabel>
                                                                                    </Col>
                                                                                </Row>


                                                                            </>
                                                                        }
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <hr className="formLabel" />
                                                    </div>
                                                )
                                            })
                                        }
                                        {(this.state.index !== 1) &&
                                            <>
                                                {
                                                    (this.props.newDataAdded !== "Personal Profile") &&
                                                    <>
                                                        <Button> Add new {this.props.newDataAdded} </Button>
                                                        <br />
                                                        <br />
                                                    </>
                                                }

                                            </>
                                        }

                                        <Button onClick={() => this.props.hideModalData()} variant="secondary">
                                            Close
                                        </Button>
                                        <Button type="submit" variant="primary">
                                            Save Changes
                                        </Button>

                                    </Form>
                                </>
                            }
                        </div>
                    </section>

                </div>
            </>
        )
    }
}

export default Main

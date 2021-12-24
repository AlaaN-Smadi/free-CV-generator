import React, { Component } from 'react'
import { Modal, Button, Form, Col, Row, FloatingLabel } from 'react-bootstrap'
// BsQuestionCircleFill
import { BsQuestionCircleFill } from 'react-icons/bs';
// BsFillArrowUpCircleFill
// BsArrowDownCircleFill
// FaRegArrowAltCircleUp
import { BsArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';



class FormsData extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        // submitForm
        // this.state.feilds
        // months && year
        // this.props.index
        // this.props.newDataAdded
        // this.props.dataPositionChange
        return (
            <Form onSubmit={this.props.submitForm}>
                {/* <p className="CV_Infos_Title">  </p> */}
                <p> ------------------ </p>
                {
                    this.props.feilds?.data?.map((feild, indexFeild) => {
                        return (
                            <div key={indexFeild}>
                                <hr className="formLabel" />

                                {
                                    feild?.map((data, idx) => {
                                        return (
                                            <div key={data[0]}>


                                                {
                                                    ((data[0] !== "About_Me") && (data[0] !== "Start_Date") && (data[0] !== "End_Date") && (data[0] !== "Start__Date") && (data[0] !== "End__Date") && (data[0] !== "Date")) &&
                                                    (
                                                        <>
                                                            {(this.props.index == 0 && indexFeild == 0) &&
                                                                <FloatingLabel id={`${data[0]}`} label={`${data[0]}`}>
                                                                    <Form.Control as="textarea" row={3} id={`${data[0]}${indexFeild}`} name={`${data[0]}${indexFeild}`} defaultValue={`${data[1]}`} placeholder={`${data[0]}`} type="text" />
                                                                </FloatingLabel>
                                                            }
                                                            {(this.props.index !== 0) &&
                                                                <FloatingLabel id={`${data[0]}`} label={`${data[0]}`}>
                                                                    <Form.Control as="textarea" row={3} id={`${data[0]}${indexFeild}`} name={`${data[0]}${indexFeild}`} defaultValue={`${data[1]}`} placeholder={`${data[0]}`} type="text" />
                                                                </FloatingLabel>
                                                            }
                                                            {
                                                                (indexFeild > 0 && this.props.index == 0) &&
                                                                <>
                                                                    <Row className="g-2">
                                                                        {(data[0] !== "new_Skill") &&
                                                                            <Col md>
                                                                                <FloatingLabel id={`${data[0]}`} label={`data`}>
                                                                                    <Form.Control as="textarea" row={3} id={`${data[0]}${indexFeild}`} name={`${data[0]}${indexFeild}`} defaultValue={`${data[0]}`} placeholder={`${data[0]}`} type="text" />
                                                                                </FloatingLabel>
                                                                            </Col>
                                                                        }

                                                                        <Col md>
                                                                            <FloatingLabel id={`${data[1]}`} label={`value`}>
                                                                                <Form.Control as="textarea" row={3} id={`${data[0]}${indexFeild}value`} name={`${data[0]}${indexFeild}`} defaultValue={`${data[1]}`} placeholder={`Value`} type="text" />
                                                                            </FloatingLabel>
                                                                        </Col>
                                                                    </Row>
                                                                </>
                                                            }

                                                        </>
                                                    )
                                                }

                                                {
                                                    ((data[0] == "Start_Date") || (data[0] == "End_Date") || (data[0] == "Start__Date") || (data[0] == "End__Date") || (data[0] == "Date")) &&
                                                    <>

                                                        <Form.Label className="formLabel"> {data[0]} </Form.Label>

                                                        <Row className="g-2">
                                                            <Col md>
                                                                <FloatingLabel id="floatingSelectGrid" label="Month">
                                                                    <Form.Select id={`${data[0]}${indexFeild}`} defaultValue={`${data[1].split("-")[0]}`} aria-label="Floating label select example">
                                                                        {
                                                                            this.props.month?.map(month => {
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
                                                                    <Form.Select id={`${data[0]}${indexFeild}Year`} defaultValue={`${data[1].split("-")[1]}`} aria-label="Floating label select example">
                                                                        {this.props.year?.map(year => {
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
                                {
                                    ((indexFeild > 0) || (this.props.newDataAdded.split("_")[0] == "Skills")) &&
                                    <>
                                        <br />
                                        <div className='changeDataIsideFeilds'>
                                            <Button title={`delete this ${this.props.newDataAdded.split("_")[0]}`} onClick={() => this.deleteObj(this.props.index, indexFeild)} variant="danger">
                                                Delete ❌
                                            </Button>

                                            <span onClick={() => this.dataPositionChange(this.props.index, indexFeild, "up")} className='changeToUp'> <BsFillArrowUpCircleFill /> </span>
                                            <span onClick={() => this.dataPositionChange(this.props.index, indexFeild, "down")} className='changeToDown'> <BsArrowDownCircleFill /> </span>
                                        </div>
                                    </>
                                }
                                <hr className="formLabel" />
                            </div>
                        )
                    })
                }
                {(this.props.index !== 1) &&
                    <>
                        {
                            (this.props.newDataAdded !== "Personal Profile") &&
                            <>
                                <Button onClick={() => this.addObj(this.props.newDataAdded)}> Add new {this.props.newDataAdded} </Button>
                                <br />
                                <br />
                            </>
                        }

                    </>
                }


                <Button type="submit" variant="primary">
                    Save Changes
                </Button>

            </Form>
        )
    }
}

export default FormsData

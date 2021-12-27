import React from 'react';
import '../styles/main.css';
import { Button, Form, Col, Row, FloatingLabel } from 'react-bootstrap'
// BsQuestionCircleFill
import { BsQuestionCircleFill } from 'react-icons/bs';
// BsFillArrowUpCircleFill
// BsArrowDownCircleFill
// FaRegArrowAltCircleUp
import { BsArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import gif from "../image/my-GIF.gif";



class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            infosMap: [],
            index: 10,
            month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            year: [],
            feilds: [],

        }
    }

    renderMapData = () => {
        let myArrData = []
        for (let i = 0; i < this.props.infos[this.props.index].data.length; i++) {
            let myFeilds = Object.entries(this.props.infos[this.props.index].data[i])
            myArrData.push(myFeilds)
        }
        // console.log(myArrData[0]);

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

    componentDidMount() {
        if (this.props.newDataAdded !== "Add new feild") {
            // if()
            this.renderMapData()
        }
        this.addDataFunc('Personal Details', 0)
    }
    // add new feild

    addDataFunc = async (dataType, idx) => {
        // console.log("hhhhhhhhhhhhhhhhhhh");

        let myGIF = document.getElementById('myWaitingGIF')
        myGIF.style.display = 'block'

        this.emptyTheForm();
        await this.props.addDataFunc(dataType, idx)
        await this.setState({
            infosMap: this.props.infos
        })

        if (this.props.newDataAdded !== "Add new feild") {
            this.renderMapData()
        }
        // console.log(this.props.dataToShowInForm);
        myGIF.style.display = 'none'
    }
    // Add new object to the feild
    addObj = (head) => {
        if (head === 'Experience' || head === 'Education' || head === 'Certificate') {
            this.props.addObj(head)
        } else if (this.props.newDataAdded.split("_")[1] === 'New') {
            this.props.addNewObjToFeild(this.props.index)
        }
        else {
            this.props.addSkillsPersonal(head)
        }

        this.renderMapData()
    }
    //  Delete Object
    deleteObj = async (index, indexFeild) => {

        await this.props.deleteObj(index, indexFeild)
        this.renderMapData()
    }
    // Submit Form
    submitForm = async (event) => {
        let myGIF = document.getElementById('myWaitingGIF')
        myGIF.style.display = 'block'
        event.preventDefault()
        let myDataArray = this.state.feilds
        let data = []
        if (this.props.index > 1 && this.props.index < 6) {

            myDataArray.forEach((feild, idx) => {

                // console.log(feild);
                feild.forEach((id) => {
                    // console.log(`${id[0]}${idx}`);
                    // console.log(document.getElementById(`${id[0]}${idx}`).value);
                    // console.log(`${id[0]}${idx}`.slice(0, 4));
                    if (`${id[0]}${idx}`.slice(0, 4) === "Date" || `${id[0]}${idx}`.slice(0, 4) === "Star" || `${id[0]}${idx}`.slice(0, 4) === "End_") {
                        // console.log("+++++++++++++++++++++++++++++++++++++");
                        // console.log(document.getElementById(`${id[0]}${idx}Year`).value);
                        let date = `${document.getElementById(`${id[0]}${idx}`).value}-${document.getElementById(`${id[0]}${idx}Year`).value}`
                        id[1] = date

                    } else {
                        id[1] = document.getElementById(`${id[0]}${idx}`).value
                    }
                })
                const obj = Object.fromEntries(feild);
                // console.log(obj);
                data.push(obj)

            })

        } else if (this.props.index === 0) {
            myDataArray.forEach((feild, idx) => {
                feild.forEach((id) => {
                    if (idx === 0) {
                        // console.log(`${id[0]}${idx}`);
                        id[1] = document.getElementById(`${id[0]}${idx}`).value
                    } else {
                        let swap = id[0]
                        // console.log(`${swap}${idx}`);
                        // console.log(`${swap}${idx}value`);
                        id[0] = document.getElementById(`${swap}${idx}`).value
                        id[1] = document.getElementById(`${swap}${idx}value`).value

                    }

                })
                const obj = Object.fromEntries(feild);
                // console.log(obj);
                data.push(obj)

            })

        } else if (this.props.index >= 6) {

            myDataArray.forEach((feild, idx) => {

                // console.log((feild));
                feild.forEach((id, idx2) => {
                    if (idx2 === 0) {
                        // console.log(document.getElementById(`feildName${idx}`).value);
                        // console.log(id[0]);
                        id[1] = document.getElementById(`feildName${idx}`).value || id[1]
                        // console.log(id[1]);
                    }
                    if (idx2 === 1) {
                        // console.log(document.getElementById(`feildDesc${idx}`).value);
                        // console.log(id[0]);
                        id[1] = document.getElementById(`feildDesc${idx}`).value || id[1]
                        // console.log(id[1]);
                    }
                })
                const obj = Object.fromEntries(feild);
                // console.log(obj);
                data.push(obj)

            })

        } else if (this.props.index === 1) {
            // feildDesc
            let obj = {
                feildDesc: event.target.feildDesc.value
            }
            data.push(obj);

        }

        // console.log(myDataArray);
        await this.setState({
            feilds: myDataArray
        })
        // console.log(data);

        this.props.submitForm(data, this.props.index)

        myGIF.style.display = 'none'
    }
    // Empty the form 
    emptyTheForm = () => {
        let myDataArray = this.state.feilds
        if (this.props.index >= 6) {
            myDataArray.forEach((feild, idx) => {

                feild.forEach((id, idx2) => {
                    if (idx2 === 0) {
                        document.getElementById(`feildName${idx}`).value = "";
                    }
                    if (idx2 === 1) {
                        document.getElementById(`feildDesc${idx}`).value = "";
                    }
                })
            })
        }
        // console.log("Form Is Empty");
    }
    // change data position inside feilds 
    dataPositionChange = async (feildIndex, dataIndex, type) => {

        let myGIF = document.getElementById('myWaitingGIF')
        myGIF.style.display = 'block'
        // console.log(this.state.feilds)
        let myArr = this.state.feilds
        // console.log('(------------------------');
        if (type === "up") {
            if (dataIndex !== 0) {
                let temp = myArr[dataIndex]
                myArr[dataIndex] = myArr[dataIndex - 1]
                myArr[dataIndex - 1] = temp
                // console.log("change Done");
            }
        } else if (type === "down") {
            if (dataIndex !== myArr.length - 1) {
                let temp = myArr[dataIndex]
                myArr[dataIndex] = myArr[dataIndex + 1]
                myArr[dataIndex + 1] = temp
                // console.log("change Done");
            }
        }
        await this.setState({
            feilds: myArr
        })
        // console.log('------------------------)');

        // if (this.props.newDataAdded.split("_")[0] === "Skills") {
        //     this.state.feilds.forEach((feild, idx) => {
        //         feild.forEach((id) => {
        //             let a = document.getElementById(`${id[0]}${idx}`)
        //             a.value = id[1]
        //         })
        //     })

        // }
        // 
        // 

        if (this.props.index > 1 && this.props.index < 6) {

            this.state.feilds.forEach((feild, idx) => {

                feild.forEach((id) => {
                   
                    if (`${id[0]}${idx}`.slice(0, 4) === "Date" || `${id[0]}${idx}`.slice(0, 4) === "Star" || `${id[0]}${idx}`.slice(0, 4) === "End_") {
                        // let date = `${document.getElementById(`${id[0]}${idx}`).value}-${document.getElementById(`${id[0]}${idx}Year`).value}`
                        // id[1] = date

                    } else {
                        document.getElementById(`${id[0]}${idx}`).value = id[1]
                    }
                })
            })

        } else if (this.props.index === 0) {
            this.state.feilds.forEach((feild, idx) => {
                feild.forEach((id) => {
                    if (idx === 0) {
                        document.getElementById(`${id[0]}${idx}`).value = id[1] 
                    } else {
                        let swap = id[0]
                        
                        document.getElementById(`${swap}${idx}`).value = id[0]
                        document.getElementById(`${swap}${idx}value`).value = id[1] 

                    }

                })

            })

        } else if (this.props.index >= 6) {

            this.state.feilds.forEach((feild, idx) => {
                feild.forEach((id, idx2) => {
                    if (idx2 === 0) {
                        document.getElementById(`feildName${idx}`).value = id[1]
                    }
                    if (idx2 === 1) {
                        document.getElementById(`feildDesc${idx}`).value = id[1]
                    }
                })

            })

        } 
        // 
        // 

        this.props.dataPositionChange(feildIndex, dataIndex, type)
        myGIF.style.display = 'none'
    }

    render() {

        return (
            <>
                <div className='waitingGIF' id='myWaitingGIF'>
                    <img src={gif} alt='gif' />
                </div>

                <div className="main_Container">
                    <section className="left_Section">
                        {
                            this.props.infos?.map((infos, idx) => {
                                return (<div className='feildsContainer'>
                                    <button onClick={() => this.addDataFunc(infos.head, idx)} key={idx} className="info_btn">{infos.head.split("_")[0]}</button>
                                    <div className='changeHeadOfFeild'>

                                        <span onClick={() => this.props.infoPositionChange(idx, "up")} className='changeToUp'> <BsFillArrowUpCircleFill /> </span>
                                        <span onClick={() => this.props.infoPositionChange(idx, "down")} className='changeToDown'> <BsArrowDownCircleFill /> </span>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <button onClick={() => this.props.addNewFeildModal()} className="add_info_btn"> Add new feild ➕ </button>

                    </section>
                    {/* javascript => PHP =>  */}
                    <section className="left_Section">
                        <div className="CV_Infos">
                            {/* <p className="CV_Infos_Title"> <b> Your Info </b> </p> */}
                            <p className="CV_Infos_Title"> <b> {this.props.newDataAdded.split("_")[0]} </b> <span onClick={this.props.handleGuide} className='questions' title='Guide to work'><BsQuestionCircleFill /></span> </p>



                            <span>  </span>
                            {
                                (this.props.newDataAdded.split("_")[1] === 'New') &&
                                <>
                                    <Form onSubmit={this.submitForm}>
                                        {
                                            this.props.infos[this.props.index]?.data.map((feild, indexFeild) => {
                                                return (
                                                    <>
                                                        <hr className="formLabel" />
                                                        <Form.Group className="mb-3" id="formBasicEmail">
                                                            <Form.Label className="formLabel" htmlFor="feildName"> {this.props.newDataAdded.split("_")[0]} Name </Form.Label>
                                                            <Form.Control type="text" id={`feildName${indexFeild}`} placeholder={feild.name} name="feildName" />

                                                        </Form.Group>

                                                        <Form.Group className="mb-3" id="formBasicPassword">
                                                            <Form.Label className="formLabel" htmlFor="feildDesc"> {this.props.newDataAdded.split("_")[0]} Description </Form.Label>
                                                            <Form.Control as="textarea" rows={3} type="text" placeholder={feild.descreption} id={`feildDesc${indexFeild}`} name="feildDesc" />
                                                        </Form.Group>

                                                        <div className='changeDataIsideFeilds'>
                                                            <Button title={`delete this ${this.props.newDataAdded.split("_")[0]}`} onClick={() => this.deleteObj(this.props.index, indexFeild)} variant="danger">
                                                                Delete ❌
                                                            </Button>


                                                            <span onClick={() => this.dataPositionChange(this.props.index, indexFeild, "up")} className='changeToUp'> <BsFillArrowUpCircleFill /> </span>
                                                            <span onClick={() => this.dataPositionChange(this.props.index, indexFeild, "down")} className='changeToDown'> <BsArrowDownCircleFill /> </span>
                                                        </div>
                                                        <hr className="formLabel" />
                                                    </>
                                                )
                                            })

                                        }


                                        <Button onClick={() => this.addObj(this.props.newDataAdded)}> Add new {this.props.newDataAdded.split("_")[0]} </Button>
                                        <br />
                                        <br />
                                        <Button type="submit" variant="primary">
                                            Save Changes
                                        </Button>

                                    </Form>
                                </>
                            }

                            {
                                (this.props.newDataAdded.split("_")[0] === 'Personal Profile') &&
                                <Form onSubmit={this.submitForm}>

                                    <hr className="formLabel" />

                                    <Form.Group className="mb-3" id="formBasicPassword">
                                        <Form.Label className="formLabel" htmlFor="feildDesc"> {this.props.newDataAdded.split("_")[0]} Description </Form.Label>
                                        <Form.Control as="textarea" className={`${this.props.infos[this.props.index].data[0].feildDesc}`} rows={6} type="text" id="feildDesc" defaultValue={this.props.infos[this.props.index].data[0].feildDesc} name="feildDesc" />
                                    </Form.Group>
                                    <hr className="formLabel" />


                                    <br />
                                    <Button type="submit" variant="primary">
                                        Save Changes
                                    </Button>

                                </Form>
                            }

                            {
                                ((this.props.newDataAdded.split("_")[1] !== 'New') && (this.props.newDataAdded.split("_")[0] !== 'Personal Profile')) &&
                                <>

                                    <Form onSubmit={this.submitForm}>
                                        {/* <p className="CV_Infos_Title">  </p> */}
                                        {
                                            this.props.infos[this.props.index]?.data?.map((feild, indexFeild) => {
                                                return (
                                                    <div key={indexFeild}>
                                                        <hr className="formLabel" />

                                                        {
                                                            this.state.feilds[indexFeild]?.map((data, idx) => {
                                                                return (
                                                                    <div key={data[0]}>


                                                                        {
                                                                            ((data[0] !== "About_Me") && (data[0] !== "Start_Date") && (data[0] !== "End_Date") && (data[0] !== "Start__Date") && (data[0] !== "End__Date") && (data[0] !== "Date")) &&
                                                                            (
                                                                                <>
                                                                                    {(this.props.index === 0 && indexFeild === 0) &&
                                                                                        <>

                                                                                            <FloatingLabel id={`${data[0]}`} label={`${data[0]}`}>
                                                                                                <Form.Control as="textarea" row={3} id={`${data[0]}${indexFeild}`} name={`${data[0]}${indexFeild}`} defaultValue={`${data[1]}`} placeholder={`${data[0]}`} type="text" />
                                                                                            </FloatingLabel>
                                                                                        </>
                                                                                    }
                                                                                    {(this.props.index !== 0) &&
                                                                                        <Row md>

                                                                                            <FloatingLabel id={`${data[0]}`} label={`${data[0]}`}>
                                                                                                <Form.Control as="textarea" row={3} id={`${data[0]}${indexFeild}`} name={`${data[0]}${indexFeild}`} defaultValue={data[1]} type="text" />
                                                                                            </FloatingLabel>
                                                                                        </Row>
                                                                                    }
                                                                                    {
                                                                                        (indexFeild > 0 && this.props.index === 0) &&
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
                                                                            ((data[0] === "Start_Date") || (data[0] === "End_Date") || (data[0] === "Start__Date") || (data[0] === "End__Date") || (data[0] === "Date")) &&
                                                                            <>

                                                                                <Form.Label className="formLabel"> {data[0]} </Form.Label>

                                                                                <Row className="g-2">
                                                                                    <Col md>
                                                                                        <FloatingLabel id="floatingSelectGrid" label="Month">
                                                                                            <Form.Select id={`${data[0]}${indexFeild}`} defaultValue={`${data[1].split("-")[0]}`} aria-label="Floating label select example">
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
                                                                                            <Form.Select id={`${data[0]}${indexFeild}Year`} defaultValue={`${data[1].split("-")[1]}`} aria-label="Floating label select example">
                                                                                                {this.state.year.map(year => {
                                                                                                    return (
                                                                                                        <>
                                                                                                            <option value={year}> {year} </option>

                                                                                                        </>
                                                                                                    )
                                                                                                })}
                                                                                                {
                                                                                                    (data[0] === "End_Date") &&
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
                                                            ((indexFeild > 0) || (this.props.newDataAdded?.split("_")[0] === "Skills")) &&
                                                            <>
                                                                <br />
                                                                <div className='changeDataIsideFeilds'>
                                                                    <Button title={`delete this ${this.props.newDataAdded.split("_")[0]}`} onClick={() => this.deleteObj(this.props.index, indexFeild)} variant="danger">
                                                                        Delete ❌
                                                                    </Button>
                                                                    {
                                                                        (this.props.index !== 0 || indexFeild > 1) &&
                                                                        <span onClick={() => this.dataPositionChange(this.props.index, indexFeild, "up")} className='changeToUp'> <BsFillArrowUpCircleFill /> </span>

                                                                    }
                                                                    <span onClick={() => this.dataPositionChange(this.props.index, indexFeild, "down")} className='changeToDown'> <BsArrowDownCircleFill /> </span>
                                                                </div>
                                                            </>
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
                                </>
                            }
                        </div>
                    </section>



                    {/* <!-- mainFooter --> */}
                    <ins class="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-8379054609541639"
                        data-ad-slot="3871957559"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>

                </div>
            </>
        )
    }
}

export default Main

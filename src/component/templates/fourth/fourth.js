import React, { Component } from 'react'
import "./fourth.css"
import { FiPhoneCall } from 'react-icons/fi';
// HiOutlineMail
import { ImLocation2 } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';


class First extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            image: ''
        }
    }
    async componentDidMount() {
        let mySavedData = JSON.parse(localStorage.getItem("myStoreData"))
        let image = JSON.parse(localStorage.getItem("image"))

        await this.setState({
            data: mySavedData,
            image: image
        })
        console.log(this.state.data);
    }

    render() {
        return (
            <div className='fourthpageContainer'>

                <div className='fourthHeader'>
                    <p className='fourthuserName'> <b> {this.state.data[0]?.data[0]?.Name} </b> </p>
                </div>


                <section className='fourthlowerSection'>

                    <aside className='fourthleftAsid'>
                        {/* Contact */}
                        <div className='fourthcontactInfosContainer'>

                            <p className='fourthheadOfFeild test'> <b> Contact </b> </p>

                            <p className='fourthcontactInfos'> <span className='fourthImoji'> <HiOutlineMail /> </span> {this.state.data[0]?.data[0]?.Email} </p>
                            <p className='fourthcontactInfos'> <span className='fourthImoji'> <ImLocation2 /> </span> {this.state.data[0]?.data[0]?.Address} </p>
                            <p className='fourthcontactInfos'> <span className='fourthImoji'> <FiPhoneCall /> </span> {this.state.data[0]?.data[0]?.Phone} </p>

                            {
                                this.state.data[0]?.data?.map((objData, idx) => {
                                    if (idx !== 0) {
                                        if (Object.values(objData)[0].split(":")[0] == "https" || Object.values(objData)[0].split(":")[0] == "http") {
                                            return (
                                                <>
                                                    <a className='fourthcontactInfos' href={`${Object.values(objData)[0]}`}> <p> {Object.keys(objData)[0]} <span>🔗</span> </p> </a>
                                                    <br />
                                                </>
                                            )
                                        } else {
                                            return (
                                                <p className='fourthcontactInfos' > {Object.keys(objData)[0]} : {Object.values(objData)[0]} </p>
                                            )
                                        }

                                    }
                                })
                            }

                        </div>
                        {/* skills */}
                        <div className='fourthskillContainer soso'>
                            <hr className='fourthline' />
                            <p className='fourthheadOfFeild'> <b> Technical Skills </b> </p>

                            {
                                this.state.data[5]?.data?.map((objData, idx) => {
                                    //0: {new_Skill: 'HTML5'}
                                    // 1: {new_Skill: 'ES5 | ES6'}
                                    // 2: {new_Skill: 'CSS3'}
                                    return (<div className='fourthskillOfMine'>

                                        <p className='fourthskillOfMine'> <div className='myNote'></div> {objData.new_Skill} </p>

                                    </div>)

                                })
                            }
                        </div>

                        <div className='fourthcertificateContainer soso'>
                            <hr className='fourthline' />
                            <p className='fourthheadOfFeild'> <b> Certificate </b> </p>


                            {
                                this.state.data[4]?.data?.map((objData, idx) => {

                                    return (

                                        <div >

                                            <p className='fourthcertificateName'> <b> {objData.name} </b> </p>
                                            <p className='fourthcertificateDate'> {objData.Date} </p>
                                            {/* <p >{objData.Technical_Skills}</p> */}

                                            {
                                                objData.Technical_skills?.split("\n").map((skill, num) => {
                                                    return (
                                                        // className='skill_Line'
                                                        <span className='fourthcertificateSkill skill_Line'>{skill}</span>
                                                        // <p> ------------------ </p>
                                                    )
                                                })
                                            }



                                        </div>)

                                })
                            }
                        </div>
                    </aside>

                    <div className='foruthrightAsid'>

                        <div className='fourthprofileContainer'>
                            <p className='fourthheadOfFeild'> <b> About Me </b> </p>
                            <hr className='fourthline' />
                            <span className='skill_Line'> {this.state.data[1]?.data[0]?.feildDesc} </span>
                        </div>

                        <div className='fourthexperienceContainer'>
                            <p className='fourthheadOfFeild'> <b> Experience </b> </p>
                            <hr className='fourthline' />

                            {
                                this.state.data[2]?.data?.map((objData, idx) => {

                                    return (<div className='fourthMyJobContainer'>
                                        <div className='fourthleftEx'>
                                            <p className='fourthtitleOfPosition'> <b> {objData.position} </b> </p>
                                            <p className='fourthperiodOfPosition'> <b> {objData.Start_Date} - {objData.End_Date} </b> </p>

                                        </div>

                                        <div className='fourthrightEx'>
                                            {/* Technical_Skills company Description */}
                                            <p className='fourthcompanyOfPosition'> <b> {objData.company} </b> </p>
                                            <div className='fourthskillsOfPosition'>
                                                {
                                                    objData.Technical_Skills?.split("\n").map(skill => {
                                                        return (
                                                            <>
                                                                <span className='skill_Line'> {skill} </span>
                                                                <br />
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <br />
                                            <div className='fourthdescriptionOfPosition'>
                                                {
                                                    objData?.Description?.split("\n").map(desc => {
                                                        return (
                                                            <>
                                                                <span className='skill_Line'> {desc} </span>
                                                                <br />
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>

                                    </div>)

                                })
                            }
                        </div>




                        {/* Date: "11-2019"
Technical_skills: "Creating and building topographic maps using ArcGIS"
name: "GIS" */}
                        <div className='fourtheducationContainer'>
                            <p className='fourthheadOfFeild'> <b> Education </b> </p>
                            <hr className='fourthline' />

                            {
                                this.state.data[3]?.data?.map((objData, idx) => {
                                    // End__Date: "7-2020"
                                    // Start__Date: "9-2015"
                                    // Technical__Skills: ""
                                    // degree: "Bachelor of Survey & Geomatics"
                                    // description: "GAP : Very Good"
                                    // university: "Al-Balqa Applied University"
                                    return (<div className='fourthUneversityContainer'>
                                        <div className='fourthleftEx'>
                                            <p className='fourthtitleOfEducation'> <b> {objData.university} </b> </p>
                                            <p className='fourthperiodOfEducation'> <b> {objData.Start__Date} - {objData.End__Date} </b> </p>

                                        </div>

                                        <div className='fourthrightEx'>
                                            {/* Technical_Skills company Description */}
                                            <p className='fourthcompanyOfEducation'> <b> {objData.degree} </b> </p>

                                            <div className='fourthskillsOfEducation'>
                                                {
                                                    objData.Technical__Skills?.split("\n").map(skill => {
                                                        return (
                                                            <span className='skill_Line'> {skill} </span>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className='fourthdescriptionOfEducation'>
                                                {
                                                    objData.description?.split("\n").map(desc => {
                                                        return (
                                                            <>
                                                                <span className='skill_Line'> {desc} </span>
                                                                <br />
                                                            </>
                                                        )
                                                    })
                                                }

                                            </div>

                                        </div>

                                    </div>)

                                })
                            }
                        </div>



                        {
                            this.state.data?.map((feild, idx) => {
                                if (idx >= 6) {
                                    return (
                                        <>
                                            <p className='fourthheadOfFeild'> <b> {feild.head.split("_")[0]} </b> </p>
                                            <hr className='fourthline' />
                                            <div className='fourthNewContainer'>
                                                {
                                                    feild.data?.map((objData, index) => {
                                                        return (
                                                            // z
                                                            <div className='fourthInnerNewItems'>
                                                                <p className='fourthnewName skill_Line'> <div className='myNote'></div> <b> {objData.name} </b> </p>

                                                                <div className='fourthnewDesc'>
                                                                    {
                                                                        objData.descreption.split("\n").map(desc => {
                                                                            return (
                                                                                <p className='fourthnewDesc skill_Line'> {desc} </p>)
                                                                        })
                                                                    }
                                                                </div>


                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default First

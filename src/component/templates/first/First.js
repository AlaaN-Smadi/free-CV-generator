import React, { Component } from 'react'
import "./First.css"
import { VscDebugBreakpointLog } from 'react-icons/vsc';
// FaUniversity  MdWorkOutline  RiNewspaperLine  ImProfile  RiContactsLine
import { FaUniversity } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import { RiNewspaperLine } from 'react-icons/ri';
import { ImProfile } from 'react-icons/im';
import { RiContactsLine } from 'react-icons/ri';


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
            <div className='pageContainer'>
                <div className='profileImage'>
                    <img alt="prfile Image" className='profileImage' src={this.state.image?.img} />
                </div>
                <p className='userName'> <b> {this.state.data[0]?.data[0]?.Name} </b> </p>

                <section className='lowerSection'>

                    <aside className='leftAsid'>
                        {/* Contact */}
                        <div className='contactInfosContainer'>

                            <p className='headOfFeild'> <RiContactsLine /> <b> Contact </b> </p>
                            <hr />
                            <p className='contactInfos'> <b>Email :</b> {this.state.data[0]?.data[0]?.Email} </p>
                            <p className='contactInfos'> <b>Addess :</b> {this.state.data[0]?.data[0]?.Address} </p>
                            <p className='contactInfos'> <b>Phone :</b> {this.state.data[0]?.data[0]?.Phone} </p>

                            {
                                this.state.data[0]?.data?.map((objData, idx) => {
                                    if (idx !== 0) {
                                        if (Object.values(objData)[0].split(":")[0] == "https" || Object.values(objData)[0].split(":")[0] == "http") {
                                            return (
                                                <>
                                                    <a className='contactInfos' href={`${Object.values(objData)[0]}`}> <p> {Object.keys(objData)[0]} <span>🔗</span> </p> </a>
                                                    <br />
                                                </>
                                            )
                                        } else {
                                            return (
                                                <p className='contactInfos' > {Object.keys(objData)[0]} : {Object.values(objData)[0]} </p>
                                            )
                                        }

                                    }
                                })
                            }

                        </div>
                        {/* skills */}
                        <div className='skillContainer soso'>
                            <p className='headOfFeild'> <b> Technical Skills </b> </p>
                            <hr />
                            {
                                this.state.data[5]?.data?.map((objData, idx) => {
                                    //0: {new_Skill: 'HTML5'}
                                    // 1: {new_Skill: 'ES5 | ES6'}
                                    // 2: {new_Skill: 'CSS3'}
                                    return (<div className='skillOfMine'>

                                        <p className='skillOfMine'> {objData.new_Skill} , </p>

                                    </div>)

                                })
                            }
                        </div>

                        <div className='certificateContainer soso'>
                            <p className='headOfFeild'> <RiNewspaperLine /> <b> Certificate </b> </p>
                            <hr className='line' />

                            {
                                this.state.data[4]?.data?.map((objData, idx) => {

                                    return (

                                        <div >

                                            <p className='certificateName'> <RiNewspaperLine /> <b> {objData.name} </b> </p>
                                            <p className='certificateDate'> {objData.Date} </p>
                                            {/* <p >{objData.Technical_Skills}</p> */}

                                            {
                                                objData.Technical_skills?.split("\n").map((skill, num) => {
                                                    return (
                                                        <span className='certificateSkill skill_Line'>{skill}</span>
                                                        // <p> ------------------ </p>
                                                    )
                                                })
                                            }



                                        </div>)

                                })
                            }
                        </div>
                    </aside>

                    <div className="rightAsid">

                        <div className='profileContainer'>
                            <p className='headOfFeild'> <ImProfile /> <b> About Me </b> </p>
                            <hr />
                            <span className='skill_Line'> {this.state.data[1]?.data[0]?.feildDesc} </span>
                        </div>

                        <div className='experienceContainer'>
                            <p className='headOfFeild'> <MdWorkOutline /> <b> Experience </b> </p>
                            <hr />
                            {
                                this.state.data[2]?.data?.map((objData, idx) => {

                                    return (<div className='firstnewPosition'>
                                        <div className='leftEx'>
                                            <p className='titleOfPosition'> <MdWorkOutline /> <b> {objData.position} </b> </p>
                                            <p className='periodOfPosition'> <b> {objData.Start_Date} - {objData.End_Date} </b> </p>

                                        </div>

                                        <div className='rightEx'>
                                            {/* Technical_Skills company Description */}
                                            <p className='companyOfPosition'> <b> {objData.company} </b> </p>
                                            <div className='skillsOfPosition'>
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
                                            <div className='descriptionOfPosition'>
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
                        <div className='educationContainer'>
                            <p className='headOfFeild'> <FaUniversity /> <b> Education </b> </p>
                            <hr />

                            {
                                this.state.data[3]?.data?.map((objData, idx) => {
                                    // End__Date: "7-2020"
                                    // Start__Date: "9-2015"
                                    // Technical__Skills: ""
                                    // degree: "Bachelor of Survey & Geomatics"
                                    // description: "GAP : Very Good"
                                    // university: "Al-Balqa Applied University"
                                    return (<div>
                                        <div className='leftEx'>
                                            <p className='titleOfEducation'> <FaUniversity /> <b> {objData.university} </b> </p>
                                            <p className='periodOfEducation'> <b> {objData.Start__Date} - {objData.End__Date} </b> </p>

                                        </div>

                                        <div className='rightEx'>
                                            {/* Technical_Skills company Description */}
                                            <p className='companyOfEducation'> <b> {objData.degree} </b> </p>

                                            <div className='skillsOfEducation'>
                                                {
                                                    objData.Technical__Skills?.split("\n").map(skill => {
                                                        return (
                                                            <span className='skill_Line'> {skill} </span>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className='descriptionOfEducation'>
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
                                            <p className='headOfFeild'> <b> {feild.head.split("_")[0]} </b> </p>
                                            <hr />
                                            <div className='newContainer'>
                                                {
                                                    feild.data?.map((objData, index) => {
                                                        return (
                                                            <div className='innerNewItems'>
                                                                <p className='newName skill_Line'> <VscDebugBreakpointLog /> <b> {objData.name} </b> </p>

                                                                <div className='newDesc'>
                                                                    {
                                                                        objData.descreption.split("\n").map(desc => {
                                                                            return (
                                                                                <p className='newDesc skill_Line'> {desc} </p>)
                                                                                // className='skill_Line'
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

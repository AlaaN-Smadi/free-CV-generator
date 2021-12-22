import React, { Component } from 'react'
import "./third.css"


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
            <div className='thirdpageContainer'>
                
                <p className='thirduserName'> <b> {this.state.data[0]?.data[0]?.Name} </b> </p>

                <section className='thirdlowerSection'>

                    <aside className='thirdleftAsid'>
                        {/* Contact */}
                        <img alt="prfile Image" className='thirdprofileImage' src={this.state.image?.img} />

                        <div className='thirdcontactInfosContainer'>

                            <h1 className='thirdheadOfLeftFeild'> <b> Contact </b> </h1>
                            <p className='thirdcontactInfos'> <b>Email :</b> {this.state.data[0]?.data[0]?.Email} </p>
                            <p className='thirdcontactInfos'> <b>Addess :</b> {this.state.data[0]?.data[0]?.Address} </p>
                            <p className='thirdcontactInfos'> <b>Phone :</b> {this.state.data[0]?.data[0]?.Phone} </p>

                            {
                                this.state.data[0]?.data?.map((objData, idx) => {
                                    if (idx !== 0) {
                                        if (Object.values(objData)[0].split(":")[0] == "https" || Object.values(objData)[0].split(":")[0] == "http") {
                                            return (
                                                <>
                                                <a className='thirdcontactInfos' href={`${Object.values(objData)[0]}`}> <p> {Object.keys(objData)[0]} <span>🔗</span> </p> </a>
                                                <br />
                                                </>
                                            )
                                        } else {
                                            return (
                                                <p className='thirdcontactInfos' > {Object.keys(objData)[0]} : {Object.values(objData)[0]} </p>
                                            )
                                        }

                                    }
                                })
                            }

                        </div>
                        {/* skills */}
                        <div className='thirdskillContainer soso'>
                            <p className='thirdheadOfLeftFeild'> <b> Technical Skills </b> </p>
                            {
                                this.state.data[5]?.data?.map((objData, idx) => {
                                    //0: {new_Skill: 'HTML5'}
                                    // 1: {new_Skill: 'ES5 | ES6'}
                                    // 2: {new_Skill: 'CSS3'}
                                    return (<div className='thirdskillOfMine skill_Line'>

                                        <p className='thirdskillOfMine skill_Line'> <div className='thirdmyNote'></div> {objData.new_Skill}  </p>

                                    </div>)

                                })
                            }
                        </div>

                        <div className='thirdcertificateContainer soso'>
                            <p className='thirdheadOfLeftFeild'> <b> Certificate </b> </p>

                            {
                                this.state.data[4]?.data?.map((objData, idx) => {

                                    return (

                                        <div >

                                            <p className='thirdcertificateName'> <b> {objData.name} </b> </p>
                                            <p className='thirdcertificateDate'> {objData.Date} </p>
                                            {/* <p >{objData.Technical_Skills}</p> */}
                                            
                                            {
                                                objData.Technical_skills?.split("\n").map((skill, num) => {
                                                    return (
                                                        <span className='thirdcertificateSkill'>{skill}</span>
                                                        // <p> ------------------ </p>
                                                    )
                                                })
                                            }



                                        </div>)

                                })
                            }
                        </div>
                    </aside>

                    <div className='thirdrightAsid'>

                        <div className='thirdprofileContainer'>
                            <p className='thirdheadOfFeild'> <b> About Me </b> </p>
                            <hr />
                            <span className='skill_Line'> {this.state.data[1]?.data[0]?.feildDesc} </span>
                        </div>

                        <div className='thirdexperienceContainer'>
                            <p className='thirdheadOfFeild'> <b> Experience </b> </p>
                            <hr />
                            {
                                this.state.data[2]?.data?.map((objData, idx) => {

                                    return (<div className='thirdnewPosition'>
                                        <div className='thirdleftEx'>
                                            <p className='thirdtitleOfPosition'> <b> {objData.position} </b> </p>
                                            <p className='thirdperiodOfPosition'> <b> {objData.Start_Date} - {objData.End_Date} </b> </p>

                                        </div>

                                        <div className='thirdrightEx'>
                                            {/* Technical_Skills company Description */}
                                            <p className='thirdcompanyOfPosition'> <b> {objData.company} </b> </p>
                                            <div className='thirdskillsOfPosition'>
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
                                            <div className='thirddescriptionOfPosition'>
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
                        <div className='thirdeducationContainer'>
                            <p className='thirdheadOfFeild'> <b> Education </b> </p>
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
                                        <div className='thirdleftEx'>
                                            <p className='thirdtitleOfEducation'> <b> {objData.university} </b> </p>
                                            <p className='thirdperiodOfEducation'> <b> {objData.Start__Date} - {objData.End__Date} </b> </p>

                                        </div>

                                        <div className='thirdrightEx'>
                                            {/* Technical_Skills company Description */}
                                            <p className='thirdcompanyOfEducation'> <b> {objData.degree} </b> </p>

                                            <div className='thirdskillsOfEducation'>
                                                {
                                                    objData.Technical__Skills?.split("\n").map(skill => {
                                                        return (
                                                            <span className='skill_Line'> {skill} </span>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className='thirddescriptionOfEducation'>
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
                                            <p className='thirdheadOfFeild'> <b> {feild.head.split("_")[0]} </b> </p>
                                            <hr />
                                            <div className='thirdnewContainer'>
                                            {
                                                feild.data?.map((objData, index) => {
                                                    return (
                                                        <div className='thirdinnerNewItems'>
                                                            <p className='thirdnewName skill_Line'> <div className='thirdmyNote'></div> <b> {objData.name} </b> </p>

                                                            <div className='thirdnewDesc'>
                                                                {
                                                                    objData.descreption.split("\n").map(desc => {
                                                                        return (
                                                                            <p className='thirdnewDesc skill_Line'> {desc} </p>)
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

import React, { Component } from 'react'
import "./second.css"


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
            <div className='secondpageContainer'>
                
                <p className='seconduserName'> <b> {this.state.data[0]?.data[0]?.Name} </b> </p>

                <section className='secondlowerSection'>

                    <aside className='secondleftAsid'>
                        {/* Contact */}
                        <img alt="prfile Image" className='secondprofileImage' src={this.state.image?.img} />

                        <div className='secondcontactInfosContainer'>

                            <h1 className='secondheadOfFeild'> <b> Contact </b> </h1>
                            <hr />
                            <p className='secondcontactInfos'> <b>Email :</b> {this.state.data[0]?.data[0]?.Email} </p>
                            <hr />
                            <p className='secondcontactInfos'> <b>Addess :</b> {this.state.data[0]?.data[0]?.Address} </p>
                            <hr />
                            <p className='secondcontactInfos'> <b>Phone :</b> {this.state.data[0]?.data[0]?.Phone} </p>
                            <hr />

                            {
                                this.state.data[0]?.data?.map((objData, idx) => {
                                    if (idx !== 0) {
                                        if (Object.values(objData)[0].split(":")[0] == "https" || Object.values(objData)[0].split(":")[0] == "http") {
                                            return (
                                                <>
                                                <a className='secondcontactInfos' href={`${Object.values(objData)[0]}`}> <p> {Object.keys(objData)[0]} <span>🔗</span> </p> </a>
                                                <br />
                                                </>
                                            )
                                        } else {
                                            return (
                                                <p className='secondcontactInfos' > {Object.keys(objData)[0]} : {Object.values(objData)[0]} </p>
                                            )
                                        }

                                    }
                                })
                            }

                        </div>
                        {/* skills */}
                        <div className='secondskillContainer soso'>
                            <p className='secondheadOfFeild'> <b> Technical Skills </b> </p>
                            <hr />
                            {
                                this.state.data[5]?.data?.map((objData, idx) => {
                                    //0: {new_Skill: 'HTML5'}
                                    // 1: {new_Skill: 'ES5 | ES6'}
                                    // 2: {new_Skill: 'CSS3'}
                                    return (<div className='secondskillOfMine'>

                                        <p className='secondskillOfMine'> <div className='secondmyNote'></div>  {objData.new_Skill} </p>

                                    </div>)

                                })
                            }
                        </div>

                        <div className='secondcertificateContainer soso'>
                            <p className='secondheadOfFeild'> <b> Certificate </b> </p>
                            <hr className='secondline' />

                            {
                                this.state.data[4]?.data?.map((objData, idx) => {

                                    return (

                                        <div >

                                            <p className='secondcertificateName'> <b> {objData.name} </b> </p>
                                            <p className='secondcertificateDate'> {objData.Date} </p>
                                            {/* <p >{objData.Technical_Skills}</p> */}
                                            
                                            {
                                                objData.Technical_skills?.split("\n").map((skill, num) => {
                                                    return (
                                                        <span className='secondcertificateSkill'>{skill}</span>
                                                        // <p> ------------------ </p>
                                                    )
                                                })
                                            }



                                        </div>)

                                })
                            }
                        </div>
                    </aside>

                    <div className='secondrightAsid'>

                        <div className='secondprofileContainer'>
                            <p className='secondheadOfFeild'> <b> About Me </b> </p>
                            <hr />
                            <span className='skill_Line'> {this.state.data[1]?.data[0]?.feildDesc} </span>
                        </div>

                        <div className='secondexperienceContainer'>
                            <p className='secondheadOfFeild'> <b> Experience </b> </p>
                            <hr />
                            {
                                this.state.data[2]?.data?.map((objData, idx) => {

                                    return (<div className='secondnewPosition'>
                                        <div className='secondleftEx'>
                                            <p className='secondtitleOfPosition'> <b> {objData.position} </b> </p>
                                            <p className='secondperiodOfPosition'> <b> {objData.Start_Date} - {objData.End_Date} </b> </p>

                                        </div>

                                        <div className='secondrightEx'>
                                            {/* Technical_Skills company Description */}
                                            <p className='secondcompanyOfPosition'> <b> {objData.company} </b> </p>
                                            <div className='secondskillsOfPosition'>
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
                                            <div className='seconddescriptionOfPosition'>
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
                        <div className='secondeducationContainer'>
                            <p className='secondheadOfFeild'> <b> Education </b> </p>
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
                                        <div className='secondleftEx'>
                                            <p className='secondtitleOfEducation'> <b> {objData.university} </b> </p>
                                            <p className='secondperiodOfEducation'> <b> {objData.Start__Date} - {objData.End__Date} </b> </p>

                                        </div>

                                        <div className='secondrightEx'>
                                            {/* Technical_Skills company Description */}
                                            <p className='secondcompanyOfEducation'> <b> {objData.degree} </b> </p>

                                            <div className='secondskillsOfEducation'>
                                                {
                                                    objData.Technical__Skills?.split("\n").map(skill => {
                                                        return (
                                                            <span className='skill_Line'> {skill} </span>
                                                        )
                                                    })
                                                }

                                            </div>
                                            <div className='seconddescriptionOfEducation'>
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
                                            <p className='secondheadOfFeild'> <b> {feild.head.split("_")[0]} </b> </p>
                                            <hr />
                                            <div className='secondnewContainer'>
                                            {
                                                feild.data?.map((objData, index) => {
                                                    return (
                                                        <div className='secondinnerNewItems'>
                                                            <p className='secondnewName'> <div className='secondmyNote'></div> <b> {objData.name} </b> </p>

                                                            <div className='secondnewDesc'>
                                                                {
                                                                    objData.descreption.split("\n").map(desc => {
                                                                        return (
                                                                            <p className='secondnewDesc skill_Line'> {desc} </p>)
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

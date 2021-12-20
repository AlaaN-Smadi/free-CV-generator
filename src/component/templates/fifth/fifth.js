import React, { Component } from 'react'
import "./fifth.css"


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
            <div className='fifthpageContainer'>



                <aside className='fifthleftAsid'>
                    {/* Contact */}
                    <p className='fifthuserName'> <b> {this.state.data[0]?.data[0]?.Name} </b> </p>
                    <img alt="prfile Image" className='fifthprofileImage' src={this.state.image?.img} />



                    <div className='fifthcontactInfosContainer'>

                        <h1 className='fifthheadOfFeild'> <b> Contact </b> </h1>
                        <hr />
                        <p className='fifthcontactInfos'> <b>Email :</b> {this.state.data[0]?.data[0]?.Email} </p>
                        <p className='fifthcontactInfos'> <b>Addess :</b> {this.state.data[0]?.data[0]?.Address} </p>
                        <p className='fifthcontactInfos'> <b>Phone :</b> {this.state.data[0]?.data[0]?.Phone} </p>

                        {
                            this.state.data[0]?.data?.map((objData, idx) => {
                                if (idx !== 0) {
                                    if (Object.values(objData)[0].split(":")[0] == "https" || Object.values(objData)[0].split(":")[0] == "http") {
                                        return (
                                            <>
                                                <a className='fifthcontactInfos' href={`${Object.values(objData)[0]}`}> <p> {Object.keys(objData)[0]} <span>🔗</span> </p> </a>
                                                <br />
                                            </>
                                        )
                                    } else {
                                        return (
                                            <p className='fifthcontactInfos' > {Object.keys(objData)[0]} : {Object.values(objData)[0]} </p>
                                        )
                                    }

                                }
                            })
                        }

                    </div>
                    {/* skills */}
                    <div className='fifthskillContainer soso'>
                        <p className='fifthheadOfFeild'> <b> Technical Skills </b> </p>
                        <hr />
                        {
                            this.state.data[5]?.data?.map((objData, idx) => {
                                //0: {new_Skill: 'HTML5'}
                                // 1: {new_Skill: 'ES5 | ES6'}
                                // 2: {new_Skill: 'CSS3'}
                                return (<div className='fifthskillOfMine'>

                                    <p className='fifthskillOfMine'> {objData.new_Skill} , </p>

                                </div>)

                            })
                        }
                    </div>

                    <div className='fifthcertificateContainer soso'>
                        <p className='fifthheadOfFeild'> <b> Certificate </b> </p>
                        <hr className='fifthline' />

                        {
                            this.state.data[4]?.data?.map((objData, idx) => {

                                return (

                                    <div >

                                        <p className='fifthcertificateName'> <b> {objData.name} </b> </p>
                                        <p className='fifthcertificateDate'> <b> {objData.Date} </b> </p>
                                        {/* <p >{objData.Technical_Skills}</p> */}

                                        {
                                            objData.Technical_skills?.split("\n").map((skill, num) => {
                                                return (
                                                    <span className='fifthcertificateSkill'>{skill}</span>
                                                    // <p> ------------------ </p>
                                                )
                                            })
                                        }



                                    </div>)

                            })
                        }
                    </div>
                </aside>

                <div className="fifthrightAsid">

                    <div className='fifthprofileContainer'>
                        <p className='fifthheadOfFeild'> <b> About Me </b> </p>
                        <hr />
                        <span> {this.state.data[1]?.data[0]?.feildDesc} </span>
                    </div>

                    <div className='fifthexperienceContainer'>
                        <p className='fifthheadOfFeild'> <b> Experience </b> </p>
                        <hr />
                        {
                            this.state.data[2]?.data?.map((objData, idx) => {

                                return (<div className='fifthnewPosition'>
                                    <div className='fifthleftEx'>
                                        <p className='fifthtitleOfPosition'> <b> {objData.position} </b> </p>
                                        <p className='fifthperiodOfPosition'> <b> {objData.Start_Date} - {objData.End_Date} </b> </p>

                                    </div>

                                    <div className='fifthrightEx'>
                                        {/* Technical_Skills company Description */}
                                        <p className='fifthcompanyOfPosition'> <b> {objData.company} </b> </p>
                                        <div className='fifthskillsOfPosition'>
                                            {
                                                objData.Technical_Skills?.split("\n").map(skill => {
                                                    return (
                                                        <>
                                                            <span> {skill} </span>
                                                            <br />
                                                        </>
                                                    )
                                                })
                                            }

                                        </div>
                                        <br />
                                        <div className='fifthdescriptionOfPosition'>
                                            {
                                                objData?.Description?.split("\n").map(desc => {
                                                    return (
                                                        <>
                                                            <span> {desc} </span>
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
                    <div className='fiftheducationContainer'>
                        <p className='fifthheadOfFeild'> <b> Education </b> </p>
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
                                    <div className='fifthleftEx'>
                                        <p className='fifthtitleOfEducation'> <b> {objData.university} </b> </p>
                                        <p className='fifthperiodOfEducation'> <b> {objData.Start__Date} - {objData.End__Date} </b> </p>

                                    </div>

                                    <div className='fifthrightEx'>
                                        {/* Technical_Skills company Description */}
                                        <p className='fifthcompanyOfEducation'> <b> {objData.degree} </b> </p>

                                        <div className='fifthskillsOfEducation'>
                                            {
                                                objData.Technical__Skills?.split("\n").map(skill => {
                                                    return (
                                                        <span> {skill} </span>
                                                    )
                                                })
                                            }

                                        </div>
                                        <div className='fifthdescriptionOfEducation'>
                                            {
                                                objData.description?.split("\n").map(desc => {
                                                    return (
                                                        <>
                                                            <span> {desc} </span>
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
                                        <p className='fifthheadOfFeild'> <b> {feild.head.split("_")[0]} </b> </p>
                                        <hr />
                                        <div className='fifthnewContainer'>
                                            {
                                                feild.data?.map((objData, index) => {
                                                    return (
                                                        <div className='fifthinnerNewItems'>
                                                            <p className='fifthnewName'> <b> {objData.name} </b> </p>

                                                            <div className='fifthnewDesc'>
                                                                {
                                                                    objData.descreption.split("\n").map(desc => {
                                                                        return (
                                                                            <p className='fifthnewDesc'> {desc} </p>)
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

            </div>
        )
    }
}

export default First

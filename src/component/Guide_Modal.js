import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class Guide_Modal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            headers: ['Skills', 'Certificate', 'Education', 'Experience', 'Personal Profile', 'Personal Details',]
        }
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {this.props.newDataAdded.split("_")[0]} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* 'Personal Details', 'Personal Profile', 'Interests and Achievements', 'Education', 'Qualifications', 'Work Experience', 'References' */}
                    {
                        (this.props.newDataAdded.split("_")[0] === this.state.headers[0]) &&
                        <>
                            <p> Here You can add your professional and technical skills ... </p>
                            <p> make sure to submit and save your skills after added, by clicking the button under the form 😉 </p>
                        </>
                    }
                    {
                        (this.props.newDataAdded.split("_")[0] === this.state.headers[1]) &&
                        <>
                        {/* <p> Certificate </p> */}

                            <p> Here You can add your Certificates with description ... </p>
                            <p> If you forgot or make something wrong while entering your data, you can make a swap between data or edit your certificates </p>
                            <p> make sure to submit and save your Certificates after added, by clicking the button under the form 😉 </p>
                        </>
                    }
                    {
                        (this.props.newDataAdded.split("_")[0] === this.state.headers[2]) &&
                        <>
                        {/* <p> Education </p> */}

                            <p> Here You can add your Education, Degree, University or School studying with description ... </p>
                            <p> If you forgot or make something wrong while entering your data, you can make a swap between data or edit your certificates </p>
                            <p> make sure to submit and save your Education after added, by clicking the button under the form 😉 </p>
                        </>
                    }
                    {
                        (this.props.newDataAdded.split("_")[0] === this.state.headers[3]) &&
                        <>
                        {/* <p> Experiance </p> */}

                            <p> Here You can add your Experiance, Working history and Training in your feild with description ... </p>
                            <p> If you forgot or make something wrong while entering your data, you can make a swap between data or edit your certificates </p>
                            <p> make sure to submit and save your Experiance after added, by clicking the button under the form 😉 </p>
                        </>
                    }
                    {
                        (this.props.newDataAdded.split("_")[0] === this.state.headers[4]) &&
                        
                        <>
                        {/* <p> Personal profile </p> */}

                            <p> Here You can add your Personal profile ... </p>
                            <p> Write a short statement about yourself, describing your character and greatest point .  </p>
                            <p> Make sure to be strong, not long, describing all of your character and attractive to the hiring manager .  </p>
                            <p> Make sure to submit and save your Personal profile after added, by clicking the button under the form 😉 </p>
                        </>
                    }
                    {
                        (this.props.newDataAdded.split("_")[0] === this.state.headers[5]) &&
                        <>
                        {/* <p> Personal details </p> */}

                            <p> Here You can add your Contact, Address, Social information ... </p>
                            <p> When you add new link or contact info. You will see two feilds, first one is for the type or name, and the second is for the value </p>
                            <p> For exapmle; if you want to add your nationallity, first feild will be "Nationallity" and the second will "British". So in the CV will be -Nationallity:British-  </p>
                            <p> If you want to add a link for your LinkedIn profile, first feild will be "LinkedIn" and the second will _Your profile link_. So in the CV will be -LinkedIn- as a hyper link  </p>
                            <p> Make sure to submit and save your Personal Details after added, by clicking the button under the form 😉 </p>
                        </>
                        
                    }
                    {
                        (this.props.newDataAdded.split("_")[1] === "New") &&
                        <>
                            <p> Here You can add your {this.props.newDataAdded.split("_")[0]} with description ... </p>
                            <p> make sure to submit and save your {this.props.newDataAdded.split("_")[0]} after added, by clicking the button under the form 😉 </p>
                        </>
                    }
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={this.props.handleClose}>
                        Got It 😊
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Guide_Modal

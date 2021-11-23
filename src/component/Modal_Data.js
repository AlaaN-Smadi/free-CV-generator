import React, { Component } from 'react'
import { Modal, Button, Form, Col, Row, FloatingLabel } from 'react-bootstrap'

class Modal_Data extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 10,
            month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            year: []
        }
    }

    
    addNewFeildFun = (event) => {
        event.preventDefault();
        let feildName = event.target.feildName.value
        console.log(feildName)
        this.props.addNewFeild(feildName)
        this.props.hideModalData()
    }
    render() {
        return (
            <Modal show={(this.props.show)} onHide={() => this.props.hideModalData()}>
                <Modal.Header closeButton>
                    <Modal.Title> {this.props.newDataAdded.split("_")[0]} </Modal.Title>
                </Modal.Header>

                {
                    (this.props.newDataAdded == 'Add new feild') &&
                    <>
                        <Form onSubmit={this.addNewFeildFun} >
                            <Modal.Body>
                                <Form.Group className="mb-3" id="formBasicEmail">
                                    <Form.Label htmlFor="feildName"> Feild Name </Form.Label>
                                    <Form.Control required type="text" id="feildName" name="feildName" />

                                </Form.Group>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => this.props.hideModalData()} variant="secondary">
                                    Close
                                </Button>
                                <Button type="submit" variant="primary">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </>
                }

                
            </Modal>
        )
    }
}

export default Modal_Data

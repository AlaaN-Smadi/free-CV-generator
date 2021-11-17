import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class Modal_Data extends React.Component {
    constructor(props) {
        super(props)
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
            <Modal show={this.props.show} onHide={() => this.props.hideModalData()}>
                <Modal.Header closeButton>
                    <Modal.Title> {this.props.newDataAdded} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        (this.props.newDataAdded == 'Add new feild') &&
                        <>
                            <form onSubmit={this.addNewFeildFun} >
                                <label htmlFor="feildName"> Feild Name </label>
                                <input type="text" id="feildName" name="feildName" />

                                <input type="submit" />
                            </form>
                        </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.hideModalData()} variant="secondary">
                        Close
                    </Button>
                    <Button variant="primary">
                                    Save Changes
                                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Modal_Data

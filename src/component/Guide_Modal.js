import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class Guide_Modal extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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

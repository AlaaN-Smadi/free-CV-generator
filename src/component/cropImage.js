import React, { Component } from 'react'
import Cropper from 'cropperjs'
import "cropperjs/dist/cropper.min.css"
import "../styles/cropImage.css"
import { Modal, Button } from 'react-bootstrap'

class cropImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageDestenation: "https://4.bp.blogspot.com/-csJEXkGzlzs/Wack5kXVhlI/AAAAAAAADRY/lOJ2X-xGY5Ea8O4oy5llXK862hdTqkb8gCLcBGAs/s1600/TOP%2BPHOTO%2BSlide-show%2Bbron%2BFoto%2BJohan%2BBengtsson_0.jpg"
        }

        this.imageElement = React.createRef();
    }

    componentDidMount(){
        const cropper = new Cropper(this.imageElement?.current, {
            zoomable:false,
            scalable:false,
            aspectRatio:1,
            crop: ()=>{
                const canvas = cropper.getCroppedCanvas();
                this.setState({
                    imageDestenation:canvas.toDataURL("image/png")
                })
            }
        } )
    }

    render() {
        return (

            <Modal onHide={this.props.hide} show={this.props.show}>
                <Modal.Header closeButton>
                    <Modal.Title> Crop Your Image </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="img-container">
                        <img ref={this.imageElement} src={this.props.image} alt="source" />
                    </div>
                    <img className="img-preview" src={this.state.imageDestenation} alt="Destenation" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.hide} variant="secondary">
                        Close
                    </Button>
                    <Button onClick={()=>this.props.setImage(this.state.imageDestenation, 0)} variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}

export default cropImage

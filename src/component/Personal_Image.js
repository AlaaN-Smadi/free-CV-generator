import React from 'react';
import upload from "../image/upload_Image.png"
import "../styles/personal_Image.css"
// import cropImage from './cropImage';

class Personal_Image extends React.Component {
    constructor(props){
        super(props)

        
    }
    
    uploadedImageFunction = () => {
        let a = document.getElementById('MyImage')
        console.log(a.files[0]);


        this.props.setImage(a.files[0], 1)
    }


    render() {
        console.log(this.props.image);
        return (
            <div>



                <div accept="image/*" className="personal_Image">


                    <p className="upload_Image"> <b> Image </b> 🥰 </p>

                    <img className="my_Image" src={this.props.image} />

                    <span className="hoverSpan" >
                        <img src={upload} />
                        <b>Upload</b>

                    </span>
                    <input onChange={()=>this.uploadedImageFunction()} id="MyImage" className="input" type="file" accept="image/*" />


                </div>

                <p className="Personal_Image_Text"> <b> Personal Image </b> </p>
            </div>
        )
    }
}

export default Personal_Image

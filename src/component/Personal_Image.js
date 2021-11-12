import React, { Component } from 'react';
import "../styles/personal_Image.css"

class Personal_Image extends React.Component {
    render() {
        return (
            <div>
                <div className="personal_Image">

                    <p className="upload_Image"> Upload Your Image Here 🥰 </p>

                </div>

                <p className="Personal_Image_Text"> <b> Personal Image </b> </p>
            </div>
        )
    }
}

export default Personal_Image

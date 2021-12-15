import React, { Component } from 'react'
import "../styles/downloadResume.css"
import logo from "../image/logo_Test.png"

class DownloadResume extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            resumeTampletes: ['one','two','three','four','five']
        }
    }
    render() {
        return (
            // downloadPage={this.downloadPage}
            <div className='mainResumeContainer'>
                <div onClick={()=>this.props.downloadPage()} className='close'> <span>close ✖</span> </div>
                <div className='logoContainer'> <img src={logo} alt='logo' /> </div>

                <div className='resumeTypeContainer'>
                    {
                        this.state.resumeTampletes.map((resume,index)=>{
                            return(
                                <div key={index} className='resume'></div>
                            )
                        })
                    }
                    
                </div>

                <div className='resumeInfoContainer'>

                </div>

                <div className='buttonsContainer'>
                    <div className='button'> <span> Download CV 📜 </span> </div>
                    <div onClick={()=>this.props.downloadPage()} className='button'> <span> Edit CV 🖊 </span> </div>
                </div>
            </div>
        )
    }
}

export default DownloadResume

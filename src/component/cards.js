import React, { Component } from 'react'
import "../styles/card.css"

class cards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            coco: ''
        }
    }

    render() {
        return (
            <>
                {
                    this.props.clickClass &&
                    <div className={`resume lls`}>
                        <div className='backColor'></div>
                        <img className='resumeTemplates' src={this.props.image} />

                    </div>
                }
                {
                    !this.props.clickClass &&
                    <div onClick={()=>this.props.clicked(this.props.index)} className={`resume`}>
                        <div className='backColor'></div>
                        <img className='resumeTemplates' src={this.props.image} />

                    </div>
                }

                {/* clickClass */}
            </>

        )
    }
}

export default cards

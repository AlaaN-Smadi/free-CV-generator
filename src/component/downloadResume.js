import React from 'react'
import "../styles/downloadResume.css"
import logo from "../image/favIcon.png"
import first from "../templates/first.png"
import second from "../templates/second.png"
import third from "../templates/third.png"
import fourth from "../templates/fourth.png"
import fifth from "../templates/fifth.png"
import Cards from './cards'
import First from './templates/first/First'
import Second from './templates/second/second'
import Third from './templates/third/third'
import Fourth from './templates/fourth/fourth'
import Fifth from './templates/fifth/fifth'
import ReactToPrint from 'react-to-print'


class DownloadResume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resumeTampletes: [first, second, third, fourth, fifth],
            index: 0
        }
    }
    clicked = async (index) => {
        await this.setState({
            index: index
        })
    }
    render() {

        return (
            // downloadPage={this.downloadPage}
            <div className='mainResumeContainer'>
                <div onClick={() => this.props.downloadPage()} className='close'> <span>close ✖</span> </div>
                <div onClick={() => this.props.downloadPage()} className='logoContainer'> <img src={logo} alt='logo' /> </div>

                <div className='resumeTypeContainer'>
                    {
                        this.state.resumeTampletes.map((resume, index) => {
                            return (
                                // <div key={index}>
                                <>
                                    {
                                        (this.state.index === index) &&
                                        <Cards clickClass={true} key={index} image={resume} />
                                    }
                                    {
                                        (this.state.index !== index) &&
                                        <Cards clicked={this.clicked} index={index} key={index} image={resume} />
                                    }

                                </>

                                // </div>
                            )
                        })
                    }

                </div>

                <div className='resumeInfoContainer'>
                    {
                        (this.state.index === 0) &&
                        <First ref={el => (this.componentRef = el)} />
                    }
                    {
                        (this.state.index === 1) &&
                        <Second ref={el => (this.componentRef = el)} />
                    }
                    {
                        (this.state.index === 2) &&
                        <Third ref={el => (this.componentRef = el)} />
                    }
                    {
                        (this.state.index === 3) &&
                        <Fourth ref={el => (this.componentRef = el)} />
                    }
                    {
                        (this.state.index === 4) &&
                        <Fifth ref={el => (this.componentRef = el)} />
                    }

                </div>


                <div className='buttonsContainer'>

                    <ReactToPrint
                        trigger={() => {
                            return (<div className='button'> <span> Download CV 📜 </span> </div>)
                        }}
                        content={() => this.componentRef}
                    />

                    <div onClick={() => this.props.downloadPage()} className='button'> <span> Edit CV 🖊 </span> </div>
                </div>

                <div className='leftAds'>

                    <ins class="adsbygoogle"

                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-8379054609541639"
                        data-ad-slot="7015644579"></ins>

                </div>

                <div className='leftVerticalAds'>
                    {/* <!-- leftVerticalAds --> */}
                    <ins class="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-8379054609541639"
                        data-ad-slot="1076922188"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>

                </div>

                <div className='rightAds'>

                    {/* <!-- rightSquare --> */}
                    <ins class="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-8379054609541639"
                        data-ad-slot="8460588181"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>

                </div>
                <div className='rightVerticalAds'>

                    {/* <!-- rightVerticalAds --> */}
                    <ins class="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-8379054609541639"
                        data-ad-slot="3016689815"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>

                </div>
            </div>
        )
    }
}

export default DownloadResume

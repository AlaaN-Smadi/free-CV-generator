import React from 'react';
// import AdSense from 'react-adsense';
import { Adsense } from '@ctrl/react-adsense';


class Footer extends React.Component {
    render() {
        return (
            <div style={{ minHeight: "100px", marginTop: '50px' }}>


                <Adsense class="adsbygoogle"
                    style={{ display: "block", textAlign: "center" }}
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-ad-client="ca-pub-8379054609541639"
                    data-ad-slot="6459620116">

                </Adsense>
            </div >
        )
    }
}

export default Footer

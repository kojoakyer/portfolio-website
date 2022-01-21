import React from 'react'
import './Technology.scss'


function Technology() {
    return (
        <div className='technology' id='technology'> 
        {/* <Fade bottom duration={1000} distance="40px"> */}
            <div className="Container">
                <div className="imageContainer">
                    <img src="assets/abouticon.webp" alt="" />
                </div>
                <div className="infoContainer">
                    <h1>About Me</h1>
                    <h3>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <button className='techBtn'>Download cv</button>
                </div>
            </div>
        {/* </Fade> */}
            
        </div>

    )
}

export default Technology

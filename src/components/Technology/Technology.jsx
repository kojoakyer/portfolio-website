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
                    <h3>My name is Kojo Akeyr, im a software developer who is dedicated to solving problems through software developement.</h3>
                    <p>Software development has never been ‘just a job’ for me, it’s offered an engaging challenge to continually learn and improve my skill in creating high-quality software. What began with a simple ‘simple calculator in python’ has become a full-fledged passion that only gets more exciting as time goes by.</p>
                    <button className='techBtn'>Download cv</button>
                </div>
            </div>
        {/* </Fade> */}
            
        </div>

    )
}

export default Technology

import React from 'react'
import './Technology.scss'


function Technology() {
    return (
        <div className='technology' id='technology'> 
            <div className="sectionTitle">
                <h1>Technologies</h1>
            </div>
            <div className="sectionText">
            <h4>From the moment I created  my first project in python, 
                I knew I was hooked in the world of software development.  Software development has never been ‘just a job’ for me, 
                it’s offered an engaging challenge to continually learn and improve my skill in creating high-quality software. What began with 
                a simple 'calculator in python' has become a full-fledged passion that only gets more exciting as time goes by. </h4>
            </div>
            <div className="sectionText">
                <p> I have worked with a range of technologies in web development. 
                    I have experience with both frontend and backend</p></div>
            <div className="list">
                <div className="listItem">
                    <div className="listContainer">
                        <img src="assets/frondend1.png" alt="" />
                        <div className="listTitle">Front-end</div>
                        <div className="listPara">
                            Experience with <br/>
                            <div className="">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SASS</li>
                                    <li>JavaScript</li>
                                    <li>React.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listItem">
                    <div className="listContainer">
                        <img src="assets/backend.jpg" alt="" /> 
                        <div className="listTitle">Back-end</div>
                        <div className="listPara">
                            Experience with <br/>
                            <div className="">
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Python</li>
                                    <li>Django</li>
                                    <li>Postman</li>
                                    <li>RestApi</li>
                                    <li>Git</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="listItem">
                    <div className="listContainer">
                    <img src="assets/database.png" alt="" />
                        <div className="listTitle">Database</div>
                        <div className="listPara">
                            Experience with <br/>
                            <div className="">
                                <ul>
                                    <li>Mongodb</li>
                                    <li>Mongoose</li>
                                    <li>Sql</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology

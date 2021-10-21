import React from 'react'
import './Technology.scss'


function Technology() {
    return (
        <div className='technology' id='technology'> 
            <div className="sectionTitle">
                <h1>Technologies</h1>
            </div>
            <div className="sectionText"><p> I have worked with a range of technologies in web development. I have experience with both frontend and backend</p></div>
            <div className="list">
                <div className="listItem">
                    <div className="listContainer">
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

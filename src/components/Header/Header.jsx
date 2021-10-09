import React,{useEffect, useRef} from 'react'
import './Header.scss'
import { init } from 'ityped'

function Header() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            strings: ['Frontend','And', 'Backend', 'Developer' ] })

    },[])



    return (
        <div className='header' id='header'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/img7.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there, the name is</h2>
                    <h1>Kojo Akyer</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>

                </div>
            </div>
        </div>
    )
}

export default Header

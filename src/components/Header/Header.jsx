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
            </div>
            <div className="right">

            </div>
            <div className="wrapper">
                    <h2>HEY ! I AM</h2>
                    <h1>Kojo Akyer</h1>
                    <h3>I'm <span ref={textRef}></span></h3>
            </div>
        </div>
    )
}

export default Header

import React,{useEffect, useRef} from 'react'
import './Header.scss'
import { init } from 'ityped'
import { ArrowDownward, Download } from '@material-ui/icons';


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
                <h1>WELCOME</h1>
                <div className="imgContainer">
                    <img src="assets/microsoft.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, my name is</h2>
                    <a href='assets/AKYER-KOJO.pdf' target="_blank" rel="noopener noreferrer" download>
                       <button>
                             Download Resume
                             <ArrowDownward/>
                       </button>
                   </a>
                    <h1>Kojo Akyer</h1>
                    <h3>I'm a freelance software developer, I build full-stack web application to meet your needs.</h3>
                    <h3><span ref={textRef}></span></h3>

                </div>
            </div>
        </div>
    )
}

export default Header

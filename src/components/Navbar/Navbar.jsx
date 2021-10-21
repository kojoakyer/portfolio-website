import React, { useState } from 'react'
import './Navbar.scss'
import {Person, Mail, LinkedIn, GitHub, Twitter} from '@material-ui/icons'

function Navbar() {

    const [click, setClick]= useState(false)

    function handleClick(){
        setClick(!click)
    }

    function closeMobileMenu(){
        setClick(false)
    }

    return (
        <div className={click ? 'navbar active' : 'navbar'}>
            <div className="wrapper">
                <div className="left">
                    <a href="#header" className='logo'>Creanos</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+2330541131110</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>kojoakyer777@gmail.com</span>
                    </div>
                    <div className="itemContainer2">
                        <a href='https://github.com/kojoakyer' className='icons'>   <GitHub   /></a>
                        <a href='https://twitter.com/kojoakyer'>   <Twitter href='' className='icons' /></a>
                        <a href='https://www.linkedin.com/in/kojo-akyer-a0a61a1b4/'>   <LinkedIn href='' className='icons' /></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={handleClick}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                    .
                    <div className={click ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
                        <ul>
                            <li onClick={closeMobileMenu}>
                                <a href="#header">Header</a>
                            </li>
                            <li onClick={closeMobileMenu}>
                               <a href="#portfolio">Projects</a>
                            </li>
                            <li onClick={closeMobileMenu}>
                               <a href="#technology">Technologies</a>
                            </li>
                            <li onClick={closeMobileMenu}>
                                <a href="#testimonials">Testimonials</a>
                            </li>
                            <li onClick={closeMobileMenu}>
                               <a href="#contact">Contact</a>
                            </li>
                        </ul>
          
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar

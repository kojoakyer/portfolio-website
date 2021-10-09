import React, { useState } from 'react'
import './Navbar.scss'
import {Person, Mail} from '@material-ui/icons'

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
                               <a href="#portfolio">Portfolio</a>
                            </li>
                            <li onClick={closeMobileMenu}>
                               <a href="#works">Work</a>
                            </li>
                            <li onClick={closeMobileMenu}>
                                <a href="#testimonials">Testimonials</a>
                            </li>
                            <li onClick={closeMobileMenu}>
                               <a href="#contact">Contacts</a>
                            </li>
                        </ul>
          
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar

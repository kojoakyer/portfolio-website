import React, { useState } from 'react'
import './Navbar.css'
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
        <div >
            <div className="navbar">
                <div className="left">
                    <a href="#header" className='logo'>Creanos</a>
                </div>
                <div className="right">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    
                
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <a className='nav-links' href="#header">Header</a>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                               <a className='nav-links'  href="#portfolio">Projects</a>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                               <a className='nav-links'  href="#technology">Technologies</a>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                                <a className='nav-links'  href="#testimonials">Testimonials</a>
                            </li>
                            <li className='nav-item' onClick={closeMobileMenu}>
                               <a className='nav-links'  href="#contact">Contact</a>
                            </li>
                        </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar

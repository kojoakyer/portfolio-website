import React from 'react'
import { Mail, Twitter, LinkedIn, GitHub, Facebook} from '@material-ui/icons'
import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className="desc">
                <p>Copyright © 2022 All rights reserved | portfolio website for kojo</p>
            </div>
            <div className="social-icons">
                <a href=""><Twitter/> </a>
                <a href=""><Facebook/> </a>
                <a href=""><LinkedIn/> </a>
                <a href=""><GitHub/> </a>
                <a href=""><Mail/> </a>
            </div>
        </div>
    )
}

export default Footer

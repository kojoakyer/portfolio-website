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
                <a href="https://twitter.com/kojoakyer"><Twitter/> </a>
                <a href="https://www.linkedin.com/in/kojo-akyer-a0a61a1b4/"><LinkedIn/> </a>
                <a href="https://github.com/kojoakyer"><GitHub/> </a>
            </div>
        </div>
    )
}

export default Footer

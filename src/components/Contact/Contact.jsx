import React, { useState } from 'react'
import './Contact.scss'

function Contact() {

    const [message, setMessage] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setMessage(true)
    }


    return (
        <div className='contacts' id='contact'>
            
            <div className="hero-heading">             
                <h1 className='hero_h1'>Get In Touch</h1>
            </div> 
            <div className="mainContainer">
                    <div className="formContainer">
                        <form onSubmit={handleSubmit} action="#" className="form">
                            <div className="hero-headings">             
                                <h1 className='hero_h1'>Get In Touch</h1>
                            </div> 
                            <div className="form__group">
                                <input type="text" className="form__input" placeholder='Full name' id='name' required/>
                                <label htmlFor="name" className="form__label">Full name</label>
                            </div>

                            <div className="form__group">
                                <input type="email" className="form__input" placeholder='Email address' id='email' required/>
                                <label htmlFor="email" className="form__label">Email address</label>
                            </div>
                            <div className="form__group">
                                <textarea type="text" className="form__textarea" placeholder='Message' id='message' required></textarea>
                                <label htmlFor="message" className="form__label">Write a Message</label>
                            </div>
                            <button className='form__btn' type='submit'>SEND MESSAGE &rarr;</button>
                            {message && <span>Thanks, You'll here from me soon </span>}
                        </form>
                    </div>
                    <div className="Info">
                        <div className="hero-headings">             
                            <h1 className='hero_h1'>My Contact Detail</h1>
                        </div> 
                        <div className="infoTitle">
                            <h2>EMAIL</h2>
                            <p>kojoakyer777@gmail.com</p>
                        </div>
                        <div className="infoTitle">
                            <h2>PHONE</h2>
                            <p>+233054113110</p>
                        </div>
                        <div className="infoTitle">
                            <h2>FAX</h2>
                            <p>+2330501350052</p>
                        </div>
                        <div className="infoTitle">
                            <h2>ADDRESS</h2>
                            <p><ul>
                                <li>Accra, Ghana</li>
                                <li>Spintex, coastal</li>
                                <li>3rd ayiku, link</li>
                            </ul>
                            </p>
                        </div>
                    </div>
            </div>
        </div>

            

    )
}

export default Contact

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
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form onSubmit={handleSubmit} action="#" className="form">
                            <div className="hero-heading">             
                                <h1 className='hero_h1'>Start Booking now</h1>
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
                                <label htmlFor="message" className="form__label">Message</label>
                            </div>
                            <button className='form__btn' type='submit'>Send &rarr;</button>
                            {message && <span>Thanks, You'll here from me soon </span>}
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact

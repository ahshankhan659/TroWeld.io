import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <>
            <div className="contact">
                <h1>Go In <span>Touch</span> </h1>
                <div className="main-contact">
                    <div className="contact-l">
                        <input type="text" className='text' placeholder='Your Name' name="" id="" />
                        <input type="number" className='number number-1' name="" placeholder='Number' id="" />
                        <select name="" className='number number2 space' id="">
                            <option  selected className='col' value="">Select Service</option>
                            <option value="service 1">Service 1</option>
                            <option value="service 2">Service 2</option>
                            <option value="service 3">Service 3</option>
                        </select>
                        <input type="email" className='text' name="" placeholder='Email' id="" />
                        <textarea name="" className='messages' placeholder='Messages' id="" cols="30" rows="5"></textarea>
                        <button type="button">SEND</button>

                    </div>
                    <div className="contact-r">
                        <iframe className='ifme'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.7584151763967!2d67.07825637450765!3d24.837934046160186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c128ca4afc7%3A0x728952c82bff40e3!2sIqra%20Univeristy%20Main%20Campus%2C%20Defence%20view%20Phase%202%20Phase%201%20Defence%20View%20Housing%20Society%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693834484778!5m2!1sen!2s"
                            style={{ border: '0' }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
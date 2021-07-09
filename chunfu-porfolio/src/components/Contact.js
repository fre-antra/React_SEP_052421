import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
                <div>
                    <em>"XXXXX"</em>
                </div>
                <div>
                    <em>-XXX</em>
                </div>
            </div>

            <div className="contact-info">
                <div className="contact-instructions">
                    <h2>Reaching out to me</h2>
                    <p>
                        Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXX.
                    </p>
                    <h2>Contact Information</h2>
                    <div>
                        <p>
                            XXXX<br />
                            XXXX<br />
                            (850) 443-2889<br />
                            czhang611@gmail.com
                        </p>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="full-name">
                        <div className="name">
                            <label htmlFor="fName">First Name*</label>
                            <input type="text" name="fName" placeholder="First Name" />
                        </div>
                        <div className="name"> 
                            <label htmlFor="lName">Last Name*</label>
                            <input type="text" name="lName" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="email-container">
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="message-container">
                        <label htmlFor="message">Message*</label>
                        <textarea type="text" name="message" placeholder="Message" />
                    </div>
                </div>
                  

            </div>
        </div>
    );
}

export default Contact;
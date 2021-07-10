import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-upper">
                <div className="contact-methods">
                    <img alt='Facebook' src='/images/facebook.png'></img> 
                    <img alt='Facebook' src='/images/linkedin.png'></img> 
                    <img alt='Facebook' src='/images/pinterest.png'></img> 
                    <img alt='Facebook' src='/images/email.png'></img> 
                </div>
                <div className="phone-email">
                    <div className="phone-email-items">Phone: (850) 443-2889</div>
                    <div className="phone-email-items">Email: czhang611@gmail.com</div>
                </div>
            </div>
            <div className="footer-lower">
                <div className="fotter-lower-column">
                    <div className="copyright-items">Chunfu</div>
                    <div className="copyright-items">Copyright &copy; 2021</div>
                    <div className="copyright-items">NY</div>
                </div>
                <div className="fotter-lower-column">
                    Home
                </div>
                <div className="fotter-lower-column">
                    Portfolio 
                    <p>
                        Project 1<br />
                        Project 2<br />
                        Project 3<br />
                        See All<br />
                    </p>
                </div>
                <div className="fotter-lower-column">
                    Resume
                    <div>Download</div>
                </div>
                <div className="fotter-lower-column">
                    Contact
                </div>
            </div>

        </div>
    );
}

export default Footer;
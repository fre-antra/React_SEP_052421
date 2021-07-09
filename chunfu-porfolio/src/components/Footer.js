import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
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
            <div className="footer-links">
                <div className="footer-links-items copyright">
                    <div className="copyright-items">Chunfu</div>
                    <div className="copyright-items">Copyright &copy; 2021</div>
                    <div className="copyright-items">NY</div>
                </div>
                <div className="footer-links-items home">
                    Home
                </div>
                <div className="footer-links-items portfolio">
                    Portfolio 
                    <p>
                        Project 1<br />
                        Project 2<br />
                        Project 3<br />
                        See All<br />
                    </p>
                </div>
                <div className="footer-links-items resume">
                    Resume
                    <div>Download</div>
                </div>
                <div className="footer-links-items contact">
                    Contact
                </div>
            </div>

        </div>
    );
}

export default Footer;
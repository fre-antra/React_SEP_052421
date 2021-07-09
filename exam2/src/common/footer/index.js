import React, { memo } from 'react';

import { FooterWrapper } from './style';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import pinterest from '../../assets/images/pinterest.svg';
import email from '../../assets/images/email.svg';

export default memo(function Footer() {
    return (
        <FooterWrapper className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="media-links">
                        <div>
                            <div className="facebook">
                                <a href="/"><img className="img-responsive" src={facebook} alt="icon"/></a>
                            </div>
                        </div>

                        <div>
                            <div className="linkedin">
                                <a href="/"><img className="img-responsive" src={linkedin} alt="icon"/></a>
                            </div>
                        </div>

                        <div>
                            <div className="pinterest">
                                <a href="/"><img className="img-responsive" src={pinterest} alt="icon"/></a>
                            </div>
                        </div>

                        <div>
                            <div className="email-icon">
                                <a href="/"><img className="img-responsive" src={email} alt="icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-md-6 text-right">
                        <div className="personal-contact phone">
                            <h4>Phone: XXXXXX</h4>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 text-left">
                        <div className="personal-contact email-personal-contact">
                            <h4>Email: XXXXX@gmail.com</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 col-md-4 text-center">
                        <div className="company-information">
                            <h3>XXXX</h3>
                            <h4>Copyright © 2021</h4>
                            <h4>NY</h4>
                        </div>
                    </div>

                    <div className="col-sm-2 col-md-2 text-center">
                        <div className="home-footer">
                            <h4><a href="/">Home</a></h4>
                        </div>
                    </div>

                    <div className="col-sm-2 col-md-2 text-center">
                        <div className="portfolio-footer">
                            <h4><a href="/">Portfolio</a></h4>
                            <ul>
                                <li><a href="/">Project1</a></li>
                                <li><a href="/">Project2</a></li>
                                <li><a href="/">Project3</a></li>
                                <li><a href="/">See All</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-2 col-md-2 text-center">
                        <div className="resume-footer">
                            <h4><a href="/">Resume</a></h4>
                            <ul>
                                <li><a href="/">Download</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-2 col-md-2 text-center">
                        <div className="contact-footer">
                            <h4><a href="/">Contact</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
})

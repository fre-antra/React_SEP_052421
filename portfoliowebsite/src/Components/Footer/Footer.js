import React from "react";
import "./Footer.css";
import FacebookLogo from "../../images/facebook.svg";
import LinkedInLogo from "../../images/linkedin.svg";
import PinterestLogo from "../../images/pinterest.svg";
import EmailLogo from "../../images/email.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="media-links">
              <div className="col-sm-2 col-md-1 col-xs-3">
                <div className="facebook">
                  <Link to="/" onClick={(e) => e.preventDefault()}>
                    <img
                      className="img-responsive"
                      src={FacebookLogo}
                      alt="Fb"
                    />
                  </Link>
                </div>
              </div>

              <div className="col-sm-2 col-md-1 col-xs-3">
                <div className="linkedin">
                  <Link to="/" onClick={(e) => e.preventDefault()}>
                    <img
                      className="img-responsive"
                      src={LinkedInLogo}
                      alt="Ln"
                    />
                  </Link>
                </div>
              </div>

              <div className="col-sm-2 col-md-1 col-xs-3">
                <div className="pinterest">
                  <Link to="/" onClick={(e) => e.preventDefault()}>
                    <img
                      className="img-responsive"
                      src={PinterestLogo}
                      alt="Pn"
                    />
                  </Link>
                </div>
              </div>

              <div className="col-sm-2 col-md-1 col-xs-3">
                <div className="email-icon">
                  <Link to="/" onClick={(e) => e.preventDefault()}>
                    <img className="img-responsive" src={EmailLogo} alt="Em" />
                  </Link>
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
                <h4>Copyright &copy; 2021</h4>
                <h4>NY</h4>
              </div>
            </div>

            <div className="col-sm-2 col-md-2 text-center">
              <div className="home-footer">
                <h4>
                  <Link to="/">Home</Link>
                </h4>
              </div>
            </div>

            <div className="col-sm-2 col-md-2 text-center">
              <div className="portfolio-footer">
                <h4>
                  <Link to="/portfolio">Portfolio</Link>
                </h4>
                <ul>
                  <li>
                    <Link to="/" onClick={(e) => e.preventDefault()}>
                      Project1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={(e) => e.preventDefault()}>
                      Project2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={(e) => e.preventDefault()}>
                      Project3
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={(e) => e.preventDefault()}>
                      See All
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-2 col-md-2 text-center">
              <div className="resume-footer">
                <h4>
                  <Link to="/" onClick={(e) => e.preventDefault()}>
                    Resume
                  </Link>
                </h4>
                <ul>
                  <li>
                    <Link to="/" onClick={(e) => e.preventDefault()}>
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-2 col-md-2 text-center">
              <div className="contact-footer">
                <h4>
                  <Link to="/contact">Contact</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

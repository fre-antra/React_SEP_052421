import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="media-links">
            <div className="link-img-container">
              <Link to="#">
                <img
                  className="img-responsive-link"
                  src="./images/facebook.svg"
                  alt="facebook"
                />
              </Link>
            </div>

            <div className="link-img-container">
              <Link to="#">
                <img
                  className="img-responsive-link"
                  src="./images/linkedin.svg"
                  alt="linkedin"
                />
              </Link>
            </div>

            <div className="link-img-container">
              <Link to="#">
                <img
                  className="img-responsive-link"
                  src="./images/pinterest.svg"
                  alt="pinterest"
                />
              </Link>
            </div>

            <div className="link-img-container">
              <Link to="#">
                <img
                  className="img-responsive-link"
                  src="./images/email.svg"
                  alt="email"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="media-links">
          <div className="personal-contact phone footer-contact">
            <h4>Phone: XXXXXX</h4>
          </div>

          <div className="personal-contact email-personal-contact footer-contact">
            <h4>Email: XXXXX@gmail.com</h4>
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
                <Link to="#">Home</Link>
              </h4>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="portfolio-footer">
              <h4>
                <Link to="#">Portfolio</Link>
              </h4>
              <ul>
                <li>
                  <Link to="#">Project1</Link>
                </li>
                <li>
                  <Link to="#">Project2</Link>
                </li>
                <li>
                  <Link to="#">Project3</Link>
                </li>
                <li>
                  <Link to="#">See All</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="resume-footer">
              <h4>
                <Link to="#">Resume</Link>
              </h4>
              <ul>
                <li>
                  <Link to="#">Download</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="contact-footer">
              <h4>
                <Link to="#">Contact</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

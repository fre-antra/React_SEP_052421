import React from "react";
import "./AppFooter.css";

import Facebook from "../../public/images/facebook.svg";
import Linkedin from "../../public/images/linkedin.svg";
import Pinterest from "../../public/images/pinterest.svg";
import Email from "../../public/images/email.svg";

export default function AppFooter() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="media-links">
          <div className="facebook">
            <a href="/#">
              <img className="img-responsive" alt="img" src={Facebook} />
            </a>
          </div>

          <div className="linkedin">
            <a href="/#">
              <img className="img-responsive" alt="img" src={Linkedin} />
            </a>
          </div>

          <div className="pinterest">
            <a href="/#">
              <img className="img-responsive" alt="img" src={Pinterest} />
            </a>
          </div>

          <div className="email-icon">
            <a href="/#">
              <img className="img-responsive" alt="img" src={Email} />
            </a>
          </div>
        </div>

        <div className="personal-contact">
          <div className="phone">
            <h4>Phone: XXXXXX</h4>
          </div>

          <div className="email-personal-contact">
            <h4>Email: XXXXX@gmail.com</h4>
          </div>
        </div>

        <div className="addtional-information">
          <div className="company-information">
            <h3>XXXX</h3>
            <h4>Copyright &copy; 2021</h4>
            <h4>NY</h4>
          </div>

          <div className="home-footer">
            <h4>
              <a href="/#">Home</a>
            </h4>
          </div>

          <div className="portfolio-footer">
            <h4>
              <a href="/#">Portfolio</a>
            </h4>
            <ul>
              <li>
                <a href="/#">Project1</a>
              </li>
              <li>
                <a href="/#">Project2</a>
              </li>
              <li>
                <a href="/#">Project3</a>
              </li>
              <li>
                <a href="/#">See All</a>
              </li>
            </ul>
          </div>

          <div className="resume-footer">
            <h4>
              <a href="/#">Resume</a>
            </h4>
            <ul>
              <li>
                <a href="/#">Download</a>
              </li>
            </ul>
          </div>

          <div className="contact-footer">
            <h4>
              <a href="/#">Contact</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

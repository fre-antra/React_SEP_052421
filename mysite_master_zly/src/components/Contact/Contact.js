import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

export default class extends React.Component {
  render() {
    return (
      <>
        <h1> Hi, this is contact component </h1>

        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
          <div className="primary-nav">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 text-center">
          <div className="contact-header">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="contact-header-quote">
          <h4>"XXXXXX"</h4>
          <h4>-XXXDXy</h4>
        </div>

        <div className="contact-instructions">
          <h2>Reaching out to me</h2>
          <p>
            Don't be afraid to contact me! I'm happy to answer any questions,
            provide more information, or just have a nice conversation! Fill out
            the form below to being reaching out to me. If you prefer another
            email client other than your default, which will appear after
            clicking the button and have all of the information you just
            entered, you can email me at XXXXXX.
          </p>
          <h2>Contact Information</h2>
          <p>XXXX</p>
          <p>XXXX</p>
          <p>(XXXX)-445-7747</p>
          <p>XXXXXX@gmail.com</p>
        </div>

        <div className="col-sm-6 col-md-6">
          <div className="firstname">
            <h4>Full Name *</h4>
            <input type="text" placeholder="First Name" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="email">
              <h4>Email *</h4>
              <input type="text" placeholder="Email" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="message">
              <h4>Message *</h4>
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
            <div class="submit-contact">
              <a class="btn btn-default btn-border" href="#">
                Submit
              </a>
            </div>
          </div>
        </div>
        
        <Footer />

      </>
    );
  }
}

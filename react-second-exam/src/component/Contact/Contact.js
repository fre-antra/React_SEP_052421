import React from "react";
import "./contactStyle.css";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-header">
          <h1>Contact</h1>
          <h4>"XXXXX"</h4>
          <h4>-XXX</h4>
        </div>

        <div className="contact-instructions">
          <h2>Reaching out to me</h2>
          <p>
            Don't be afraid to contact me! I'm happy to answer any questions,
            provide more information, or just have a nice conversation! Fill out
            the form below to being reaching out to me. If you prefer another
            email client other than your default, which will appear after
            clicking the button and have all of the information you just
            entered, you can email me at XXXXX.
          </p>

          <h2>Contact Information</h2>
          <p>XXXX</p>
          <p>XXXX</p>
          <p>(XXXX)-445-7747</p>
          <p>XXXXXX@gmail.com</p>
        </div>

        <div className="contact-form-body">
          <form>
            <div className="form__name">
              <div className="firstname">
                <h4>Full Name *</h4>
                <input type="text" placeholder="First Name" />
              </div>

              <div className="lastname">
                <h4>Last Name *</h4>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="email">
              <h4>Email *</h4>
              <input type="text" placeholder="Email" />
            </div>

            <div className="message">
              <h4>Message *</h4>
              <textarea placeholder="Message"></textarea>
            </div>

            <div className="submit-contact">
              <a className="btn btn-default btn-border" href="#">
                Submit
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

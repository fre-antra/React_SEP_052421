import React from "react";
import "./aboutStyle.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-header">
          <h1>About Me</h1>
        </div>

        <div className="about-header-quote">
          <h3>Sharing a little bit of my story...</h3>
        </div>

        <div className="about-general-description ">
          <h2>General Overview</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        <div className="about-statistic-description">
          <h2>Statistics</h2>
          <h5>
            <em>And for those that don't fancy reading:</em>
          </h5>

          <p>Male, 200 years old.</p>
          <p>Five feet 110 inches</p>
          <p>Favorite fonts:Roboto </p>
          <p>Loves to learn new things</p>
        </div>

        <div className="about-option-buttons">
          <a href="#contact" className="btn btn-default btn-black-border">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default About;

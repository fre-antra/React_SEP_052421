import React from "react";
import "./skillStyle.css";

const Skill = () => {
  return (
    <>
      <div className="summary">
        <div className="summary__post">
            <img
              className="img-responsive"
              src="/images/developerdesign.svg"
              alt=""
            />

          <div className="development-description">
            <h3>Development and Design</h3>
            <p>
              I aim to put my creativity to the test, designing and building
              unique, meaningful products for clients or merely for my own
              interests.
            </p>
          </div>
        </div>

        <div className="summary__post">
            <img
              className="img-responsive"
              src="/images/responsivedesign.svg"
              alt=""
            />

          <div className="responsive-description">
            <h3>Responsive Layouts</h3>
            <p>
              Development and design isn't merely putting information on the
              site or preferred media outlet. I organize content and present
              information in an engaging fashion, driving new and unique layouts
              in tandem with novel solutions and cool animations.
            </p>
          </div>
        </div>

        <div className="summary__post ideas-summary">
          <div className="idea-img">
            <img
              className="img-responsive"
              src="/images/innovativesolutions.svg"
              alt=""
            />
          </div>

          <div className="idea-description">
            <h3>Ideas and Solutions</h3>
            <p>
              There are still many problems that exist in today's society,
              including laziness. Luckily, I hope to combat these issues by
              innovating, developing easy-to-use programs, solutions, or
              products.
            </p>
          </div>
        </div>

        <div className="summary__post passion-summary">
          <img className="img-responsive" src="/images/passion.svg" alt="" />

          <div className="passion-description">
            <h3>Passion and Dedication</h3>
            <p>
              With my profound interest and commitment to my field of study, my
              projects rarely go unfinished and my problems are never left
              unresolved.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;

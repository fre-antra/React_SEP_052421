import React from "react";

import SummaryCard from "../../components/SummaryCard/SummaryCard";
import "./Summary.css";

import Developerdesign from "../../public/images/developerdesign.svg";
import Responsivedesign from "../../public/images/responsivedesign.svg";
import Innovativesolutions from "../../public/images/innovativesolutions.svg";
import Passion from "../../public/images/passion.svg";

export default function Summary() {
  return (
    <div className="summary">
      <div className="container-fluid">
        <div className="row">
          <SummaryCard
            title="Development and Design"
            content="I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests."
            icon={Developerdesign}
          ></SummaryCard>
          <SummaryCard
            title="Responsive Layouts"
            content="Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations."
            icon={Responsivedesign}
          ></SummaryCard>
        </div>
        <div className="row">
          <SummaryCard
            title="Ideas and Solutions"
            content="There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products."
            icon={Innovativesolutions}
          ></SummaryCard>
          <SummaryCard
            title="Passion and Dedication"
            content="With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved."
            icon={Passion}
          ></SummaryCard>
        </div>
      </div>
    </div>
  );
}

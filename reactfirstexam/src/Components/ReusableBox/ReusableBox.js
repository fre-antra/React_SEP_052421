import React, { useState } from "react";
import "./ReusableBox.css";

const ReusableBox = ({ color, colorClick }) => {
  const [boxStyle, setBoxStyle] = useState({});

  const mouseEnter = (e) => {
    setBoxStyle({ boxShadow: `2px 2px 5px ${color}` });
  };

  const mouseLeave = (e) => {
    setBoxStyle({});
  };
  return (
    <div
      className="box-container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={boxStyle}
    >
      <h3 className="box__title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores alias
        incidunt ipsa!
      </h3>
      <p className="box__content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt
        cupiditate, aspernatur consequuntur porro excepturi dolore, velit
        possimus atque repellat unde veritatis sed odit modi. Optio corporis
        repudiandae labore maiores placeat, nostrum illum modi nam dicta
        dignissimos beatae ad porro?
      </p>
      <button
        className="btn"
        style={{ backgroundColor: `${color}` }}
        onClick={colorClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default ReusableBox;

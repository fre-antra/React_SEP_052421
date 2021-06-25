import React from "react";
import "./ReusableBox.css";

const ReusableBox = ({ color, colorClick, bStyle }) => {
  return (
    <div
      className="box-container"
      style={bStyle.boxShadow.split(" ")[3] === color ? bStyle : null}
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

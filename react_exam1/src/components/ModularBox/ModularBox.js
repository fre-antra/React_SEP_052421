import React, { useState } from "react";
import "./ModularBox.css";

const ModularBox = ({ color, colorClick, title, content, selected }) => {
  const [boxStyle, setBoxStyle] = useState({});
  let cln = '';
  if (selected) {
    cln = `box-container selected ${color}`;
  } else {
    cln = 'box-container';
  }
 
  return (
    <div
      className={`${cln}`}
      style={boxStyle}
    >
      <h3 className="box__title">{title}</h3>
      <p className="box__content">{content}</p>
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

export default ModularBox;

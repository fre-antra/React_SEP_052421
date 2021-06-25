import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button id={props.color} className={`btn_${props.color}`} onClick={props.changeColor}>{`Set ${props.color}`}</button>
  );
};

export default Button;

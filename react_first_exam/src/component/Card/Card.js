import React from 'react';
import Button from '../Button/Button';
import './Card.css';

const Card = ({ title, content, color, changeHeaderColor, borderColor }) => {
  return (
    <div className={
      `card_container border_${borderColor === color ? borderColor : ''}`
    }
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <Button color={color} changeColor={changeHeaderColor} />
    </div>
  );
};

export default Card;

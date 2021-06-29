import React from 'react';
import Button from '../button/Button';
import './Card.css';

const Card = ({ card: { title, content, color }, changeHeaderColor, borderColor }) => {
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

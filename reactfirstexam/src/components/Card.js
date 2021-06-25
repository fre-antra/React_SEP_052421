import React from 'react'

function Card({ card, selectedcard, index, setSelectedCard, handleClick }) {
  return (
    <div
      className='card'
      key={card.color}
      onClick={() => setSelectedCard(index)}
      style={{
        border: selectedcard === index && `2px solid ${card.color}`,
        boxShadow: selectedcard === index && '5px 5px 10px',
      }}
    >
      <h4 className='card__heading'>{card.heading}</h4>
      <p className='card__description'>{card.description}</p>
      <button
        className='card__button'
        onClick={handleClick}
        style={{ backgroundColor: card.color }}
      >
        {card.color}
      </button>
    </div>
  )
}

export default Card

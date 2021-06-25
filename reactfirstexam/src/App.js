import './App.css'
import { cards } from './data/Cardsdata'
import { useState } from 'react'
function App() {
  const cardArray = cards
  const [selectedcard, setSelectedCard] = useState(undefined)
  const [color, setcolor] = useState('black')
  const handleClick = e => {
    console.log(e.target.innerHTML)
    setcolor(e.target.innerHTML)
  }
  return (
    <div className='App'>
      <h1 className='heading' style={{ color: color }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>

      <div className='container'>
        {cardArray.map((card, index) => (
          <div
            className='card'
            key={card.color}
            onClick={() => setSelectedCard(index)}
            style={{
              border: selectedcard === index && `2px solid ${card.color}`,
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
        ))}
      </div>
    </div>
  )
}

export default App

import './App.css'
import { cards } from './data/Cardsdata'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
function App() {
  const cardArray = cards
  const [selectedcard, setSelectedCard] = useState(null)
  const [color, setcolor] = useState('black')
  const handleClick = e => {
    console.log(e.target.innerHTML)
    setcolor(e.target.innerHTML)
  }
  return (
    <div className='App'>
      <Header color={color}></Header>
      <div className='container'>
        {cardArray.map((card, index) => (
          <Card
            card={card}
            index={index}
            selectedcard={selectedcard}
            setSelectedCard={setSelectedCard}
            handleClick={handleClick}
          ></Card>
        ))}
      </div>
    </div>
  )
}

export default App

import React from 'react';
import './App.css';
import { data, headerInfo } from './data/data';
import Card from './component/Card/Card';
import Header from './component/Header/Header';

function App() {
  const [cards, setCards] = React.useState([]);
  const [headerMsg, setHeaderMsg] = React.useState('');
  const [color, setColor] = React.useState('');

  React.useEffect(() => {
    setHeaderMsg(headerInfo);
    setCards(data);
  }, []);

  const changeColor = (event) => {
    console.log(event.target.id);
    setColor(event.target.id);
  };

  return (
    <>
      <Header headerMsg={headerMsg} headerColor={color} />
      <div className='cards_container'>
        {cards.map((card) => (<Card key={card.id} title={card.title} content={card.content} color={card.color} changeHeaderColor={changeColor} borderColor={color} />))}
      </div>
    </>
  );
}

export default App;

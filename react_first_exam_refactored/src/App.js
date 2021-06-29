import React from 'react';
import './App.css';
import { getCards, getHeaderInfo } from './apis/dataAPI';
import Card from './component/card/Card';
import Header from './component/header/Header';
import Spinner from './component/spinner/Spinner';

function App() {
  const [cards, setCards] = React.useState([]);
  const [headerMsg, setHeaderMsg] = React.useState('');
  const [color, setColor] = React.useState('');
  const [isLoading, toggleIsLoading] = React.useState(true);

  React.useEffect(() => {
    Promise.all([getHeaderInfo(), getCards()])
      .then(([headerInfo, cards]) => {
        setHeaderMsg(headerInfo);
        setCards(cards);
        toggleIsLoading(!isLoading);
      });
    // getHeaderInfo()
    //   .then(headerInfo => {
    //     setHeaderMsg(headerInfo);
    //     toggleIsLoading(!isLoading);
    //   });
    // getCards()
    //   .then(cards => setCards(cards));
  }, []);

  const changeColor = (event) => {
    console.log(event.target.id);
    setColor(event.target.id);
  };

  return (
    isLoading ?
      <Spinner /> :
      (<>
        <Header headerMsg={headerMsg} headerColor={color} />
        <div className='cards_container'>
          {cards.map((card) => (<Card key={card.id} card={card} changeHeaderColor={changeColor} borderColor={color} />))}
        </div>
      </>)
  );
}

export default App;

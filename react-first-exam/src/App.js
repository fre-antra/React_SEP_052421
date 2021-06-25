import Header from "./component/header/Header";
import Card from "./component/card/Card";
import { useState } from "react";
import "./App.css";
import cards from "./data/cardData";

function App() {

  const [cardColor, setCardColor] = useState("");
  console.log(cardColor);

  // const changeColor = (curColor) => {
  //   setCardColor(curColor);
  // };

  return (
    <div className="main">
      <Header cardColor={cardColor} />
      <div className="content">
        {cards.map((card) => {
          return <Card key={card.id} data={card} changeColor={setCardColor} selectedColor={cardColor}/>;
        })}
      </div>
    </div>
  );
}

export default App;

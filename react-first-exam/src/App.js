import Header from "./component/header/Header";
import Card from "./component/card/Card";
import { useState } from "react";
import "./App.css";
import { data, headerContent } from "./data/cardData";
import "./font.css";

function App() {
  const [cardColor, setCardColor] = useState("");

  // // we can directly pass the setCardColor function into Card component as onClcik function
  // const changeColor = (curColor) => {
  //   setCardColor(curColor);
  // };

  return (
    <div className="main">
      <Header cardColor={cardColor} content={headerContent} />
      <div className="content">
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              data={card}
              changeColor={setCardColor}
              selectedColor={cardColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

import Header from "./component/header/Header";
import {Card, ReduxCard} from "./component/card/Card";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { data, headerContent } from "./data/cardData";
import "./font.css";

function App() {
      /*------- redux method -------*/
  
  const cardColor = useSelector(state => state.color.color)
  console.log(cardColor);
  return (
    <div className="main">
      <Header cardColor={cardColor} content={headerContent} />
      <div className="content">
        {data.map((card) => {
          return (
            <ReduxCard
              key={card.id}
              data={card}
              // changeColor={setCardColor}
              // selectedColor={cardColor}
            />
          );
        })}
      </div>
    </div>
  );
}

// function App() {
      /*------- useState method -------*/
//   const [cardColor, setCardColor] = useState("");

//   // // we can directly pass the setCardColor function into Card component as onClcik function
//   // const changeColor = (curColor) => {
//   //   setCardColor(curColor);
//   // };

//   return (
//     <div className="main">
//       <Header cardColor={cardColor} content={headerContent} />
//       <div className="content">
//         {data.map((card) => {
//           return (
//             <Card
//               key={card.id}
//               data={card}
//               changeColor={setCardColor}
//               selectedColor={cardColor}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default App;

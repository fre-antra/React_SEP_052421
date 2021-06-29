import Header from "./component/header/Header";
import { Card, ReduxCard } from "./component/card/Card";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
// import { data, headerContent } from "./data/cardData";
import "./font.css";
import { getCards, getHeader } from "./data/cardData";
import Loading from "./component/loading/Loading";

function App() {
  /*------- redux method -------*/

  const cardColor = useSelector((state) => state.color.color);

  const [headerContent, setHeaderContent] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getCards().then((res)=> setData(res))
    // getHeader().then((res)=> setHeaderContent(res))
    // setLoading(false);
    Promise.all([getCards(), getHeader()]).then(([cards, header]) => {
      setData(cards);
      setHeaderContent(header);
      setLoading(false);
    });
  }, []);

  return (
    <div className="main">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header cardColor={cardColor} content={headerContent} />
          <div className="content">
            {data.map((card) => {
              return <ReduxCard key={card.id} data={card} />;
            })}
          </div>
        </div>
      )}
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

import Header from "./component/header/Header";
import Card from "./component/card/Card";
import { useState } from "react";
import './App.css'

function App() {

  
//   const data = [{
//       id: 1,
//       title: 'I am titl',
//       content: 'adsglaksdjhfasjkf',
//       color: 'red'
//   },{
//     id: 2,
//     title: 'I am titl',
//     content: 'adsglaksdjhfasjkf',
//     color: 'blue'
// },{
//   id: 3,
//   title: 'I am titl',
//   content: 'adsglaksdjhfasjkf',
//   color: 'black'
// },{
//   id: 4,
//   title: 'I am titl',
//   content: 'adsglaksdjhfasjkf',
//   color: 'green'
// }]
//   const [color, setColor] = useState('')
  
//   const changeColor = (event) => {
//     console.log(event.target.id);
//     setColor(event.target.id);
//   };

  return (
    <div className="main">
      <Header/>
      <div className="content">
        <Card color='red'/>
        <Card color='blue'/>
        <Card color='black'/>
        <Card color='green'/>
        
      </div>
    </div>
  );
}

export default App;

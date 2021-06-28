import React, {useState} from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import './App.css'
import getData from "./apis/Apis";


const App = () => {

  const [data, setData] = useState([])
  getData().then(data => {
    setData(data)
  })

  let loading;
  loading = data.length === 0;

  if (loading) {
    return (
        <h1>Loading...</h1>
    )
  } else {
    return (
        <>
          <Header/>
          <article className="main-section">
            {data.map(e => {
              return <Card color={e.cardColor} key={e.cardColor} header={e.cardTitle} content={e.cardContent}/>
            })}
          </article>
        </>
    );
  }
}

export default App;
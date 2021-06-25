import { useState, useEffect } from "react";
import { info, infoHeader } from "./data/data";
import { Layout } from "./components";

function App() {
  const [headerText, setheaderText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setheaderText(infoHeader);
    setData(info);
  }, []);

  return (
    <>
      <Layout data={data} headerText={headerText} />
    </>
  );
}

export default App;

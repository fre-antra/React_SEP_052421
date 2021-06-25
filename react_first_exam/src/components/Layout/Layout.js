import { useState } from "react";
import { Card, Header } from "../index";
import "./Layout.css";

const Layout = ({ data }) => {
  const [color, setColor] = useState("");
  const [boxShadow, setboxShadow] = useState({});

  const colorHandler = (color) => {
    console.log("click", color);
    setColor(color);
    setboxShadow({
      boxShadow: `3px 3px 7px ${color}, 5px 5px 7px ${color}`,
    });
  };

  return (
    <>
      <header className="header">
        <Header color={color} />
      </header>
      <main className="container">
        {data.map((d) => (
          <Card data={d} colorHandler={colorHandler} boxShadow={boxShadow} color={color} />
        ))}
      </main>
    </>
  );
};

export default Layout;

import "./cardStyle.css";
import { useState } from "react";

const Card = ({ color }) => {
  console.log(color);
  const [click, setClick] = useState(false);

  const inlineStyle = {
    border: `3px solid ${color}`,
    boxShadow: `5px 5px ${color}`,
  };
  const btnClick = () => {
    console.log("before ", click);
    setClick(true);
    console.log("after ", click);
  };

  
  return (
    <>
      <div className="content__card" style={{ ...(click ? inlineStyle : "") }}>
        <h2 className="card__title"> I am Card</h2>
        <p className="card__content">content content content content content content content content content content content content </p>
        <button
          className="card__btn"
          style={{ backgroundColor: color }}
          onClick={btnClick}
        >
          Select me
        </button>
      </div>
    </>
  );
};

export default Card;

import React from "react";

function Card({ news, change }) {
  const handleClick = (e) => {
    const text = e.target.innerHTML;
    const color = text.split(" ")[1];
    change(color);
  };

  return news.map((item, index) => (
    <div key={index} className="container" id={item.color}>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      <button onClick={handleClick}>Set {item.color}</button>
    </div>
  ));
  //   return (
  //     <div>
  //       <h2>{info.title} ###</h2>
  //       <p>{info.content} ###</p>
  //     </div>
  //   );
}

export default Card;

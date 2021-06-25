import { Button } from "../index";
import "./Card.css";

const Card = ({ data, colorHandler, boxShadow, color }) => {
  return (
    <>
      {data.map((d) => (
        <div key={d.id} className="card" style={color === d.color ? boxShadow : null}>
          <div className="card__title">
            <h2>{d.title}</h2>
          </div>
          <div>
            <p>{d.content}</p>
          </div>
          <Button color={d.color} text={`Set ${d.color}`} colorHandler={colorHandler} />
        </div>
      ))}
    </>
  );
};

export default Card;

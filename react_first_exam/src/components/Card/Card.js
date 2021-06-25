import { Button } from "../index";
import "./Card.css";

const Card = ({ data, colorHandler, boxShadow, color }) => {
  return (
    <div key={data.id} className="card" style={color === data.color ? boxShadow : null}>
      <div className="card__title">
        <h2>{data.title}</h2>
      </div>
      <div>
        <p>{data.content}</p>
      </div>
      <Button color={data.color} text={`Set ${data.color}`} colorHandler={colorHandler} />
    </div>
  );
};

export default Card;

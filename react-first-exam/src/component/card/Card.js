import "./cardStyle.css";

const Card = ({ data, changeColor, selectedColor }) => {
  let cardClassName =
    (selectedColor === data.color)
      ? `content__card card-${data.color}`
      : `content__card`;
    // console.log(cardClassName, data.color);
    
  return (
    <>
      <div className={cardClassName}>
        <h2 className="card__title"> {data.title}</h2>
        <p className="card__content">{data.content}</p>
        <button
          className="card__btn"
          style={{ backgroundColor: data.color }}
          onClick={() => changeColor(data.color)}
        >
          Select me
        </button>
      </div>
    </>
  );
};

export default Card;

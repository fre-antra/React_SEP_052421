import "./cardStyle.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/ducks/color";


// component has to be capitailiezed
export const ReduxCard = ({ data }) => {
  const dispatch = useDispatch();

  // state(store).color(reducer).color(property)
  const color = useSelector((state) => state.color.color);

  /* ----- invalid case ----- */
  // const change = (c) => {
  //   dispatch({ type: "changeColor", payload: c });
  //   console.log("dispatched");
  // };
  // it cause max-update depth exceeded (forever loop)
  // explain: third ans of the link below
  // https://stackoverflow.com/questions/48497358/reactjs-maximum-update-depth-exceeded-error
  /* ----- invalid case ----- */

  // have to use dispatch inside function
  function change(c) {
    dispatch({ type: "changeColor", payload: c });
  }

  let cardClassName =
    color === data.color ? `content__card card-${data.color}` : `content__card`;

  return (
    <>
      <div className={cardClassName}>
        <h2 className="card__title"> {data.title}</h2>
        <p className="card__content">{data.content}</p>
        <button
          className="card__btn"
          style={{ backgroundColor: data.color }}
          //   onClick take a function, setCardColor(aks changeColor) require state
          onClick={() => change(data.color)}
        >
          Select
        </button>
      </div>
    </>
  );
};

const Card = ({ data, changeColor, selectedColor }) => {
  let cardClassName =
    selectedColor === data.color
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
          //   onClick take a function, setCardColor(aks changeColor) require state
          onClick={() => changeColor(data.color)}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default Card;

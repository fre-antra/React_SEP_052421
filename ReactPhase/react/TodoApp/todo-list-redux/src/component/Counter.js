import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/ducks/counter";

const Counter = (props) => {
  // const count = useSelector((state) => state.counter.count); // the state is from the reduce of configStore
  // // 这个的目的就是从众多reducer中选出你要用的state的reducer，然后选取reducer中的state props

  const dispatch = useDispatch();
  const { name } = props;
  const [vote, setVote] = useState(0);

  const handleIncrement = () => {
    dispatch(increment);
    setVote(vote + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement);
    setVote(vote - 1);
  };
  return (
    <>
      <h2> {name} </h2>
      <h3> {`Votes: ${vote}`} </h3>

      <button className="btn-inc" onClick={handleIncrement}>
        increment
      </button>
      <button className="btn-dec" onClick={handleDecrement}>
        decrement
      </button>
    </>
  );
};

export default Counter;

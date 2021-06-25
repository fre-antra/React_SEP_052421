import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../redux/ducks/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count); // the state is from the reduce of configStore
  // 这个的目的就是从众多reducer中选出你要用的state的reducer，然后选取reducer中的state props

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment);
  };
  const handleDecrement = () => {
    dispatch(decrement);
  };
  return (
    <>
      <h1>{`Counter ${count}`}</h1>
      <button className="btn-inc" onClick={handleIncrement}>increment</button>
      <button className="btn-dec" onClick={handleDecrement}>decrement</button>
    </>
  );
};

export default Counter;

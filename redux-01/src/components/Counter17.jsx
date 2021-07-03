import { useMySelector, useMyDispatch } from '../Redux/react-redux';

const Counter17 = () => {
  const counter = useMySelector((state) => state.value);
  const dispatch = useMyDispatch();

  const handleAdd = () => {
    dispatch({ type: 'counter/incremented' });
  };

  const handleSub = () => {
    dispatch({ type: 'counter/decremented' });
  };
  return (
    <>
      <h1>
        Counter 17 - FC - useMySelector & useMyDispatch (MyProvider + myStore)
      </h1>
      <h2>Counter:{counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </>
  );
};

export default Counter17;

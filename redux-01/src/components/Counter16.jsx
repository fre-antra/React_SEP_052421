import { useSelector, useDispatch } from 'react-redux';

const Counter16 = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: 'counter/incremented' });
  };

  const handleSub = () => {
    dispatch({ type: 'counter/decremented' });
  };

  return (
    <>
      <h1>Counter 16 - FC - useSelector & useDispatch (Provider + store)</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </>
  );
};

export default Counter16;

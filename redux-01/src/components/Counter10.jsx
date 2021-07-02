import React, { useState, useEffect, useRef } from 'react';
import { myStore } from '../Redux/redux';

const useForceUpdate = () => {
  const [update, setUpdate] = useState(0);
  let ref = useRef(update);
  return () => {
    ref.current++;
    setUpdate(ref.current);
  };
};

function Counter10() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    myStore.subscribe(() => {
      forceUpdate();
    });
    // eslint-disable-next-line
  }, []);

  const handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
  };

  const handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
  };

  return (
    <>
      <h1>Counter 10 - FC - useRef</h1>
      <h2>Counter:{myStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </>
  );
}

export default Counter10;

import React, { useState, useEffect, useRef } from 'react';
import myStore from '../Redux/redux';

const useForceUpdate = () => {
  const [update, setUpdate] = useState(0);
  return () => {
    setUpdate(Math.random());
  };
};

function Counter12() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    myStore.subscribe(() => {
      forceUpdate();
    });
  }, []);

  const handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
  };

  const handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
  };

  return (
    <>
      <h1>Counter 12 - FC - React-redux(offical)</h1>
      <h2>Counter:{myStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </>
  );
}

export default Counter12;

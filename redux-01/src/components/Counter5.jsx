import React, { useState, useEffect } from 'react';
import { myStore } from '../Redux/redux';

const useForceUpdate = () => {
  // eslint-disable-next-line
  const [update, setUpdate] = useState([]);
  return () => setUpdate([]);
};

const Counter5 = () => {
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
    <div>
      <h1>Counter 5 - FC - empty array</h1>
      <h2>Counter:{myStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </div>
  );
};

export default Counter5;
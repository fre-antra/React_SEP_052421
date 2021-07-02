import React, { useState, useEffect } from 'react';
import { myStore } from '../Redux/redux';

const Counter4 = () => {
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    myStore.subscribe(() => {
      setUpdate(!update);
    });
  }, [update]);

  const handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
  };

  const handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
  };

  return (
    <div>
      <h1>Counter 4 - FC - no customize hook</h1>
      <h2>Counter:{myStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </div>
  );
};

export default Counter4;

import React, { useState, useEffect } from 'react';
import myStore from '../Redux/redux';

const useForceUpdate = () => {
  const [update, setUpdate] = useState(0);
  return () => setUpdate(update + 1);
};

const Counter6 = () => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    myStore.subscribe(() => {
      forceUpdate();
    });
  }, [forceUpdate]);

  const handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
  };

  const handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
  };

  return (
    <div>
      <h1>Counter 6 -- FC - `0 to 1`</h1>
      <h2>Counter:{myStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </div>
  );
};

export default Counter6;

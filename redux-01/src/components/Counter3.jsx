import React, { useState, useEffect } from 'react';
import myStore from '../Redux/redux';

const useForceUpdate = () => {
  const [update, setUpdate] = useState(true);
  return () => setUpdate(!update);
};

const Counter3 = () => {
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
  console.log('render');
  return (
    <div>
      <h1>Counter 3 -- FC - customize hook</h1>
      <h2>Counter:{myStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </div>
  );
};

export default Counter3;

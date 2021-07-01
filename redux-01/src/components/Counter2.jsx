import React, { useState } from 'react';
import myStore from '../Redux/redux';

const Counter2 = () => {
  const [add, setAdd] = useState('');

  const handleAdd = () => {
    setAdd(add + 'd');
    myStore.dispatch({ type: 'counter/incremented' });
  };

  const handleSub = () => {
    setAdd(add + 'd');
    myStore.dispatch({ type: 'counter/decremented' });
  };

  return (
    <div>
      <h1>Counter 2 -- FC - useState</h1>
      <h2>Counter:{myStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </div>
  );
};

export default Counter2;

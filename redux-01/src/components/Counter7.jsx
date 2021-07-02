import React, { useState, useEffect } from 'react';
import myStore from '../Redux/redux';

const useForceUpdate = () => {
  const [update, setUpdate] = useState(0);
  // console.log('update', update)
  return [
    update,
    () => {
      console.log('line 10', update);
      setUpdate((preState) => {
        console.log('line 12', preState, update);
        return preState + 1;
      });
    },
  ];
  // return [update, () => setUpdate([])];
};

function Counter7() {
  const [update, forceUpdate] = useForceUpdate();

  console.log('line 23,', update);

  useEffect(() => {
    myStore.subscribe(() => {
      forceUpdate();
    });
  }, []);

  useEffect(() => {
    console.log('line 32,didMount');
  });

  const handleAdd = () => {
    myStore.dispatch({ type: 'counter/incremented' });
    console.log('line 37', myStore.getState());
    // forceUpdate();
    // console.log("add", update, 'forceUpdate');
  };

  const handleSub = () => {
    myStore.dispatch({ type: 'counter/decremented' });
    console.log(myStore.getState());
    forceUpdate();
  };
  // console.log('lasrRender')
  return (
    <>
      <h1>Counter 7 -- FC - preState debug</h1>
      <h2>Counter:{myStore.getState().value}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <hr />
    </>
  );
}

export default Counter7;

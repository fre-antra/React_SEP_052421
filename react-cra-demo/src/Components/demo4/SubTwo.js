import { useState } from 'react';

let counterRef = 0;
const SubTwo = () => {
  const [counter, setCounter] = useState(0);
  counterRef = counter;

  const handleShowCounter = () => {
    setTimeout(() => {
      alert(counterRef);
    }, 3000);
  };

  return (
    <>
      <p>Counter:{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button onClick={handleShowCounter}>Show Counter After 3s</button>
    </>
  );
};

export default SubTwo;
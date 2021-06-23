import { useState, useEffect, useRef } from 'react';

const DemoThree = () => {
  const [num, setNum] = useState(0);
  const firstCalRef = useRef(true);

  // componentDidMount & componentWIllUnmount
  useEffect(() => {
    console.log('d3-didMount');
    return () => {
      console.log('d3-WillUnmount');
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (firstCalRef.current !== true) {
      console.log('d3-didUpdate');
    } else if (firstCalRef.current === true) {
      firstCalRef.current = false;
    }
  }, [num]);

  return (
    <div>
      <h3>Demo 3</h3>
      <p>FC - ClickTimes: {num}</p>
      <button onClick={() => setNum(num + 1)}>Click</button>
      <hr />
    </div>
  );
};

export default DemoThree;

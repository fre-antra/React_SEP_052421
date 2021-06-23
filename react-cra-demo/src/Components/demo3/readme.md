## 说明：

1. demoThree 展示 functional component 的用法。

2. destruction 的应用：

```js
const [name, setName] = useState('');
```

3. d3 展示的是如何用 useEffect 代替 lifecycle。

4. 另外一种设立 flag 的方案，出了 d3 中的 useRef 之外，也可以在 component 之外设立全局变量，如下：

```js
import { useState, useEffect } from 'react';

let firstCall = true;
const DemoThree = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('d3-didMount');
    return () => {
      console.log('d3-WillUnmount');
    };
  }, []);

  useEffect(() => {
    if (firstCall !== true) {
      console.log('d3-didUpdate');
    } else {
      firstCall = false;
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
```

- best solution

```js
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
```

5. `不能实现的方案：`

```js
import { useState, useEffect } from 'react';

const DemoThree = () => {
  let firstCall = true;
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log('d3-didMount');
    return () => {
      console.log('d3-WillUnmount');
    };
  }, []);

  useEffect(() => {
    if (firstCall !== true) {
      console.log('d3-didUpdate');
    } else {
      firstCall = false;
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
```

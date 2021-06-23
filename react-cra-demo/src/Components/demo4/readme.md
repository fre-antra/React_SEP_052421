## 说明：

1. 对于 functional component，会有以下情况：

2. subTwo 方案一，只可以在 alert 时候显示按下 button 的时候那一刻的 counter 值：

```js
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
```

3. subTwo 方案二，可以在 alert 时候显示当前的 counter：

```js
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
```

4. 对于 class component，则没有以上的分化情况，setTimeout 会取得当前这一刻的 counter 值。

```js
import React, { Component } from 'react';

class SubOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleAdd = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleShowCounter = () => {
    setTimeout(() => {
      alert(this.state.counter);
    }, 3000);
  };

  render() {
    return (
      <div>
        <p>SubOne Counter:{this.state.counter}</p>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleShowCounter}>Show Counter After 3s</button>
      </div>
    );
  }
}

export default SubOne;
```

5. 在 functional component 中，re-render 意味着 function 内的逻辑重新运行一遍，useState 和一些特殊的除外。如：

```js
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
        {' '}
        +
      </button>
      <button onClick={handleShowCounter}>Show Counter After 3s</button>
    </>
  );
};

export default SubTwo;
```

- `在上例中，每次 click 都会引发 rerender，而每次 rerender 就会对 counterRef 重新赋值`，这是对 re-render 的深度认识。

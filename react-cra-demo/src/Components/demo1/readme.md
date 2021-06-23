## 说明：

1. demoOne 说明就算能定义其他名字的 data，虽然可以使用其他方法改变其值，但不能触发 rerender，也不能使用 setState 来对其改动和触发 rerender，`所以变量名字必须是 state。`

2. 目前可见，state 和 setState 是成对出现的，无论有没有定义 state，setState 都只会改变 state 的值。如果定义其他变量，则不能使用 setState，就算改变了非 state 的值，也不会触发 rerender。这个解释虽然还不算透彻，但也算是从表象观察的结果。

3. mutabel & immutable

```js
let state = {
  name: 'sam',
};

// mutable, 直接改变内容
state.name = 'hello';

// imutable，复制后重新赋值，
state = {
  ...state,
  name: 'hello',
};
```

- mutable:

  - pros: easy to change, save space
  - cons: hard to track the changes, hard to track setter and getter

- imutable:

  - pros: easy store, trigger setter.
  - cons: extra space

4. 在 functional component 中，re-render 意味着 function 内的逻辑重新运行一遍，useState 和一些特殊的除外。如：

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

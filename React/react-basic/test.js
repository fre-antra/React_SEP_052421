<<<<<<< HEAD
class A {
    state = {
        name: "patrick",
    };
=======
// class A {
//   state = {
//     name: 'patrick',
//   };
// }

// let a = new A();
// console.log(a);

// ShouldComponentUpdate | PureComponent | React.memo

let state = {
  counter: 0,
};

function setState(newState) {
  setTimeout(() => {
    if (typeof newState === 'function') {
      state = newState(state);
    } else {
      state = newState;
    }
  }, 0);
>>>>>>> 600973bc3edfa09dd6611669ab84036a66f8c6f2
}

// setState({ counter: state.counter + 1 }); // {counter:1}
// setState({ counter: state.counter + 1 }); // {counter:1}

setState((preState) => {
  return {
    counter: preState.counter + 1,
  };
});

setState((preState) => {
  return {
    counter: preState.counter + 1,
  };
});

setTimeout(() => {
  console.log(state);
}, 1000);

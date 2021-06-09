// Destructure
// const obj = { name: "Ana", age: 18 };
// const { name1, age1 } = obj;
// console.log(name1, age1); //let name = obj.name, let age = obj.age

// const data = { age: 18 };
// const { age } = data;
// console.log(age);

// const arr = [{ name: "Ana" }, () => {}];
// const [person, movement] = arr;
// console.log(person, movement); //const person = arr[0]

// const obj = { name: "Ana", age: 18 };
// const { name, age, title } = obj;
// console.log(name, age, title);

// Arrow function
// function foo() {
//   console.log("Normal function: ");
//   console.log(this);
// }
// let foo2 = () => {
//   console.log("Arrow function: ");
//   console.log(this);
// };
// foo();
// foo2();

// this.x = 9;
// console.log(this);
// const mymodule = {
//   x: 81,
//   getX: function () {
//     return this.x;
//   },
// };

// console.log(mymodule.getX());
// const retrieveX = mymodule.getX;

// console.log(retrieveX());
// const test = retrieveX();
// console.log("test: ", test);
// const bindX = retrieveX.bind(mymodule);
// console.log(bindX());

// const foo = function () {
//   console.log("Normal Function: ");
//   console.log(this);
// }.bind(this); //explicit binding
// foo();
// const foo2 = () => {
//   console.log("Arrow Function: ");
//   console.log(this);
// };
// foo2();

// const obj = {
//   foo: function () {
//     console.log(this);
//   }.bind(this),
//   foo2: () => {
//     console.log(this);
//   },
// };
// obj.foo();
// obj.foo2();

// Closure
// function foo() {
//   console.log("Hello");
//   var a = 5;
//   return function () {
//     console.log(a);
//   };
// }
// let a = foo();
// console.log(a);
// a();

//IIFE
// (function foo() {
//   console.log("Hello");
// })();
// const controller = (function () {
//   let a = 5;
//   return {
//     init: () => {
//       console.log("init: " + a);
//     },
//   };
// })();
// controller.init();

//Currying function
// function add(...a) {
//   // spread operator
//   return function (...b) {
//     return function (...c) {
//       return [...a, ...b, ...c].reduce((acc, cur) => acc + cur, 0);
//     };
//   };
// }

// const add =
//   (...a) =>
//   (...b) =>
//   (...c) =>
//     [...a, ...b, ...c].reduce((acc, cur) => acc + cur, 0);
// console.log(add(1, 2, 3, 4, 5)(232, 3, 2)(3, 4, 5, 6, 6));

//Async programming
// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 1000);
// console.log(3);
// setTimeout(function () {
//   console.log(4);
// }, 0);
// Event loop: Call stack, Task/Event queue, Async/Browser API
// function foo() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// foo();

function foo() {
  console.log("foo");
}
function randomTimer() {
  return Math.random() * 1000;
}
function callFnWithRandomTimer(cb) {
  let timer = randomTimer();
  console.log("Delayed time: ", timer);
  setTimeout(cb, timer); //Composition
}

//Callback hell: can be solved by using promise()
// callFnWithRandomTimer(() => {
//   callFnWithRandomTimer(() => {
//     callFnWithRandomTimer(foo);
//   });
// });

//XHR

function getUser(userID, cb) {
  let data;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      cb(data);
    }
  };
  xhttp.open(
    "GET",
    "https://jsonplaceholder.typicode.com/todos/" + userID,
    true
  );
  xhttp.send();
}
getUser(1, (data1) => {
  //More logic
  logMsg(data1);
  getUser(2, (data2) => {
    logMsg(data2);
    getUser(3, (data3) => {
      logMsg(data3);
    });
  });
});

function logMsg(msg) {
  console.warn(msg);
}
//Higher order function

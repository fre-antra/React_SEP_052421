//number
//boolean
//string
//undefined
//null
//symbol
//bigint

// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof "abc");
// console.log(typeof undefined);
// console.log(typeof null);

// var a = 5;
// function foo(input) {
//   input = 6;
//   console.log("input = ", input);
// }
// foo(a);
// console.log("a = ", a);

// var b = 7;
// var c = b;
// b = 11;
// console.log("b= ", b, "c= ", c);

//Coersion
// var result = true + false;
// console.log(result);
// console.log("1" === 1);

// plain object
// var obj = {};
// console.log(obj);
// var obj2 = Object.create({});
// console.log(obj2);

// class object
// class MyObj {
//   constructor(name) {
//     this.name = name;
//   }
// }
// var obj3 = new MyObj("Dio");
// console.log(obj3);

// function foo() {}
// console.log(foo);

// var arr = [1, 2, 3];
// console.log(arr);

//prototype chain

// var obj = { name: "Dio" };
// function foo(input) {
//   //   input = { name: "Jojo" };
//   input.name = "Jojo";
//   //   console.log(input);
//   console.log(obj === input);
// }
// foo(obj);
// console.log(obj);

//var, let, const

// var a = 5;
// function foo() {
//   console.log(a); // undefined
//   if (true) {
//     var a = 3;
//   }
//   console.log(a);
// }
// // foo();

// //const
// const obj = {
//   name: "Dio",
// };
// // obj.name = "Jojo";
// // obj = { name: "jojo" };
// // console.log(obj);
// const num = 1;
// num.name = "a";
// console.log(num.name);
// console.log(typeof num);

//Hoisting
//var hoisting: only declaration hoisted
//let, const hoisting: temporal dead zone => reference error
//function hoisting: variables, anonymous functions, arrow functions cannot be hoisted

//Normal function
// foo();
// function foo() {
//   console.log("Normal: Hello");
// }

//function as anonymous fn
// fn();
// let fn = function () {
//   console.log("Variable: Hello");
// };

//Arrow function
// test();
// let test = () => {
//   console.log("Hello");
// };

//variable fn
// myFn();
// let myFn = function namedFn() {
//   console.log("Hello");
// };

//class hoisting: class will not be hoisted
//undefined vs. not defined

//class in JS
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let p2 = new Person("Jojo", 19);
console.log(p2);

function MyPerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.__proto__.constructor = Person;
  return obj;
}

let p = MyPerson("Dio", 200);
console.log(p);

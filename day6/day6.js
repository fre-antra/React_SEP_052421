//destructure: new feature in es6
// const obj = {name:"ana", age: 18};
// const {name, age} = obj;
// console.log(name, age);//let name = obj.name, let age = obj.age

// const obj = {name:"ana", age: 18};
// const {name1, age1} = obj;
// console.log(name1, age1);//let name = obj.name, let age = obj.age

// const data = {age: 18};
// const {age} = data;
// console.log(age);

// const arr = [{name: "ana"}, ()=>{}];
// const [person, movement] = arr;
// console.log(person, movement);

// const obj = {name: "ana", age:18};
// const{name, age, title} = obj;
// console.log(name, age, title);// ana 18 undefined

//arrow function
//arrow function cann't be hoisting, no "this" keyword

// function foo() {
// console.log("normal ")
// console.log(this);
// }
// let foo2=()=>{
//     console.log("arrow ")
// console.log(this);
// };
// foo();
// foo2();

// this.x = 9;
// const module ={
//     x: 81,
//     getX:function(){
//         return this.x;
//     }
// }
// //console.log(module.getX());//81

// const retriveX = module.getX;
// //console.log(retriveX());//9

// const bindX = retriveX.bind(module);
// console.log(bindX());//81
// //function.bind(): bind() 会创建一个新函数， 当这个新函数被调用时， 他的this值是传递给bind()的第一个参数。

//
// const foo = function() {
//     console.log("normal");
//     console.log(this);
// }.bind(this);//explicit binding
// foo();
// const foo2=()=>{
//     console.log("arrow");
//     console.log(this);
// }
// foo2();

//this and bind():
// const obj = {
//     foo: function () {
//         console.log(this);
//     }.bind(this),
//     foo2:()=>{
//         console.log(this);

//     },
// }
// obj.foo();
// obj.foo2();

//closure

//what is closure:闭包就是就是能够读取其他函数内部变量的函数， 定义在一个函数内部的函数（因为在js中只有函数内部的
//子函数才能够读取局部变量
//闭包好处：
//  1.可以读取函数内部的变量；
//  2.让这些变量的值始终保持在内存中。

// function foo() {
//     console.log("hello");
//     var a = 5;
//     return function() {
//         console.log(a);
//     };
// }
// //foo(); //hello
// let a  = foo();
// //console.log(a); //function
// a();

// var closureAlert = function () {
//     var x = "help!";
//     var alerter = function() {
//         alert(x);
//     }
//     alerter();
// };

// var closureAlert = function () {
//     var x = 0;
//     var alerter = function() {
//         alert(++x);//++x:x plus 1, then return x; x++: return x and then x plus 1;
//     }
//     return alerter;
// }
// var funclosure = closureAlert();
// var funclosure1 = closureAlert();
// funclosure();//1
// funclosure();//2
//console.log(funclosure1);//1: call a new function, it will create a new brand.


// var add = function(num) {
//     var num1 = num;
//     var addToNum1 = function(num2) {
//         return num1 + num2;
//     }
//     return addToNum1;//return addToNum1 to add5;
// }
// var add5 = add(5);
// console.log(add5(2));//7
// console.log(add5(3));//8: this is a new scope: num2 = 3
// var add5 = add(10);//overwrite
// console.log(add5(2));//12

// function counter () {
//     var n =0;
//     return{
//         count: function(){return ++n;},
//         reset: function(){return  n=0},
//     };
// };
// var myCounter = counter();
// console.log(myCounter);//object:{count:function, resset: function}
// console.log(myCounter.count());//1
// console.log(myCounter.count());//2
// console.log(myCounter.reset());//0

var sayAlice = function() {
    var makeLog = function(){
        console.log(alice);
    };
    var alice = "why hello";
    return makeLog();
}
var what = sayAlice();//why hello

var sayAlice = function() {
    var makeLog = function(){
        console.log(alice);
    };
    return makeLog();
    var alice = "why hello";
    //return makeLog();
}
var what = sayAlice();//undefined


//IIFE: yifei: it can be run without invoked
// (function foo() {
//     console.log("hello");
// })();

// const controller = (function(){
//     let a = 5;
//     return {
//         init:()=>{
//             console.log("init：" + a);

//         },
//     };
// })();
// controller.init();//init: 5

//currying function
//const add = (a) => (b) => (c) => a + b + c;

// function add(...a) {
//     return function (...b) {
//         return function (...c) {
//             return [...a, ...a, ...c].reduce((acc, cur) => acc + cur, 0);
//         };
//     };
// }
// console.log(add(1, 2, 3, 4,)(65,768,54)(56, 6));
//spread operater vs rest parameter


//async programming:
//what is exactly async programming?
// console.log(1);
// setTimeout(function(){
//     console.log("2");
// }, 1000);//1 second
// console.log(3);
// setTimeout(function(){
//     console.log(4);
// }, 0);
// 1, 3, 4, 2 
//1, 3:is sync Code, 2, 4: is async

//event loop: call stack, task/event queue, async/browser api ( excutet process: from right to left)

// function foo(){
//     for(var i =0;  i <5; i++){// for loop in call stack first;
//         setTimeout(()=> {
//             console.log(i);
//         }, i*1000);
//     }
// }
// foo();//55555

// function foo(){
//     for(let i =0;  i <5; i++){// let scope is block
//         setTimeout(()=> {
//             console.log(i);
//         }, i*1000);
//     }
// }//0 1 2 3 4 

//another way use iife
// function foo(){
//     for(var i = 0; i < 5; i++){
//     (function (){
//      
//         setTimeout(()=>{
//             console.log(i);
//         }, i*1000);
//     })();
//     }
// }
// foo();//55555

// function foo(){
//     for(var i = 0; i < 5; i++){
//     (function (){
//         var j = i;
//         setTimeout(()=>{
//             console.log(j);
//         }, i*1000);
//     })();
//     }
// }
// foo();//01234

// var closureAlerter = function() {
//     var x = "help";
//     var alerter = function() {
//         alert(x);
//     }
//     setTimeout(alerter, 1000);
//     console.log("hi");
//  }
//  closureAlerter(); // hi=> help

// function foo() {
//     console.log("foo");
// }
// function randomTimer(){
//     return Math.random()*1000;
// }
// function callFooWithRandomTimer(){
//     setTimeout(foo, randomTimer());//composition
// }

//callback hell....? can be solved by using promise()

//api calls
//{json} placeholder 
//xhr: http reauest

//json:a data format
//优点：light to transfer

//make convversion:how can we change jso to js
//:JSON.parse/string

//高阶函数：higher order function：
//wrapper function:

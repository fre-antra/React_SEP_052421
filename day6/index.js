// destructure


// keyword "this"
// this in arrow func is binded when it is declared
// this in normal func is binded when it is called
// const obj = {
//     foo: function () {
//         console.log(this);
//     }.bind(this),
//     foo2: () => {
//         console.log(this);
//     },
// };
// obj.foo();
// obj.foo2();

// closure: func exec time; get access of outer func in inner func
// function foo(){
//     console.log("hello");
//     var a = 5;
//     return function (){
//         // this is a closure
//         console.log(a);
//     }
// }
// let a = foo();
// console.log(a);
// foo()();
// a();

// IIFE: immediate invoked function expression
// const controller = (function (){
//     let a = 5;
//     return {
//         init: () => {
//             console.log("init: " + a);
//         }
//     }
// })();
// controller.init();

// currying function
// function add(...a){
//     return function (...b){
//         return function (...c){
//             return [...a, ...b, ...c].reduce((acc, curr) => acc + curr, 0);
//         };
//     };
// }

// const add = (...a) => (...b) => (...c) => [...a, ...b, ...c].reduce((acc, curr) => acc + curr, 0);
// console.log(add(1, 24, 5)(2, 1, 2, 3, 1, 2, 3)(2, 1, 31, 43, 1));

// async programming
// console.log(1);

// setTimeout(function(){
//     console.log(2);
// }, 1000);
// console.log(3);

// setTimeout(function(){
//     console.log(4);
// }, 0);

// event loop: handle async code
// call stack, event queue, async API
// function foo(){
//     for (var i = 0; i < 5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// foo();

// function foo(){
//     console.log("foo");
// }

// function randomTimer(){
//     return Math.random()*1000;
// }

// function callFooWithRandomTimer(cb){
//     let timer = randomTimer();
//     console.log("delayed timer: " + timer);
//     setTimeout(cb, timer);
// }

// // callback hell
// callFooWithRandomTimer(()=>{
//     callFooWithRandomTimer(()=>{
//         callFooWithRandomTimer(foo);
//     });
// });

// API calls, XHR

// Higher order func: reduce, foreach, function that takes func as arg

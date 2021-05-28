//primitive: number boolean string undefined null symbol bigint
// console.log(true);
// console.log(6);
var a = 5;
function foo(input) {
    input = 6;
    console.log("input=",input);
}
foo(a);
console.log("a=",a);
//pass by value: copy the value

//pass by value
var b = 7;
var c= b;
b = 11;
console.log("b=", b,"c=",c)//11, 7
//primitive pass by value; object pass by reference.

//coersion
var res= true + false;
console.log(res);//1
console.log("1"==1);//true
console.log("1"===1);//false: it's about coersion

//plain obj
// var obj = {};
// console.log(obj);
// var obj2= Object.create({});
// console.log(obj2);

// //class obj
// class MyObj{
//   constructor( name){
//     this.name= name;

//   }
// }
// var obj3 = new MyObj("Dio");
// console.log(obj3);

// //function
// function foo(){}
// console.log(foo);
//what is exactly a prototype chain?
// var obj = {name:"dio"};
// function foo(input){
//   input={name:"jojo"};
//   console.log(input.name);
//   console.log(obj===input);
// }
// foo(obj);
// console.log(obj);
//object is paa by reference
// var obj = {name:"dio"};
// function foo(input){
//   input.name="jojo";
//   console.log(input.name);
//   console.log(obj===input);
// }
// foo(obj);
// console.log(obj);

//var : is function scope 

// function foo(){
//   var a=5;
// }
// //undefined: declared but not initialized
// var a
// console.log(a);

//hoisting
// var a =4;
// function foo() {
//   console.log(a);// a is hoisting
//   if(true) {
//   var a=5;
//   }
//   console.log(a);//var has function scope
// }
// foo();//undefined, 5 node:14 node12: 4, 5


//let const:block
// function foo() {
// console.log(a);
// if(true) {
//   let a= 3;
// }
// console.log(a);
// }
// foo();//a is not defined

// b =6;//global


//const

// const obj={
//   name="dio"
// };
// //obj.name= "jojo";//normal
// obj={name:"jojo"};//error
// conosle.log(obj);

// const num =1;
// num.name="a";
// console.log(num);//1
// console.log(num.name);//undefined
// console.log(typeof(num.name));//undefined
// console.log(typeof(num));//number


//function hoisting
//normal function 
foo();
function foo() {
    console.log("normal");
}
//function as anonymous fn
fn();
let fn=function(){
    console.log("variable");
}//Cannot access 'fn' before initialization

//arrow function
test();
let test=()=>{
    console.log("test");
}//Cannot access 'test' before initialization

//variable fn
myFn();
let myFn = function namedFn(){
    console.log("myFn");
}//Cannot access 'test' before initialization

function Person(name, age) {
    this.name=name;
    this.age=age;
}
let pa= new Person("david", 12);
console.log(pa);

//using function to create class obj
function Person(name, age) {
    this.name=name;
    this.age=age;
}
let pa= Person("david", 12);//undefined it's a function and without return value.
console.log(pa);
//difference with:
function Person(name, age) {
    let obj={};
    obj.name=name;
    obj.age=age;
    obj._proto_constructor= Person;
    return obj;
}
let pa= Person("david", 12);
console.log(pa);



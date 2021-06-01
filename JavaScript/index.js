// oop: Object-oriented programming

// // encapsulation
// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }
//     walk() {
//         console.log(this.#name + ' walk around the world! ' + this.#age);
//         console.log(this.#name, 'walk around the world!', this.#age);
//         console.log(`${this.#name} walk around the world! ${this.#age}`);
//     }
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.walk = function() {
//     console.log(this.name + ' walk around the world! ' + this.age);
// }

// const p = new Person('Jojo', 18);
// Person.prototype.__proto__.run = function() {
//     console.log(this.name + ' is running');
// }
// console.log(p);
// p.walk();
// p.run();

// console.log(Person.prototype === p.__proto__);

// const p1 = new Person('Dio', 200);
// console.log(p1);
// p1.walk();
// p1.run();
// p.name = 'Dio';
// console.log(p.name);
// p.walk();

// // // inheritance
// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     walk() {
//         console.log(this.name + ' instance 1 from employee class ');
//     }
//     walk(salary) {
//         console.log(this.name + ' instance 2 from employee class ' + 20000);
//     }
// }

// function Employee(name, age, company) {
//     const P = Person.bind(this);
//     P(name, age); // call apply bind
//     this.company = company;
// }
// Employee.prototype = Person.prototype;
// Employee.prototype.constructor = Employee;

// const e = new Employee('Dio', 200, 'Jump');
// console.log(e);
// e.walk();

// // Poly-morph-ism : Many Forms
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log('move');
//     }
// }
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can run');
//     }
// }
// const fish = new Fash('fish');
// const bird = new Bird('bird');
// const monkey = new Monkey('monkey');
// fish.move();
// bird.move();
// monkey.move();

// // Abstraction
// class Circle {
//     #pi = 3.1415926; 
//     constructor(radius) {
//         this.radius = radius;
//     }

//     getArea() {
//         return this.#pi * this.radius ** 2;
//     }
// }
// const c = new Circle(20);
// console.log(c.getArea());

// // loop

// for (let i = 0; i < arr.length; i++)
// const arr = [3, 2, 1];

// Array.prototype.myForEach = function(callbackfn) {
//     // console.log('this: ', this);
//     for (let i = 0; i < this.length; i++) {
//         callbackfn(this[i], i, this);
//     }
// }

// Array.prototype.myMap = function(callbackfn) {
//     // console.log('this: ', this);
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(callbackfn(this[i], i, this));
//     }
//     return arr;
// }

// Array.prototype.myFilter = function(callbackfn) {
//     // console.log('this: ', this);
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {

//         if (callbackfn(this[i], i, this)) {
//             arr.push(this[i])
//         }
//     }
//     return arr;
// }

// // mySome, myEvery, myReduce

// const arr = ['a', 'b', 'c'];
// console.log(arr.reduce((acc, cur, i, arr) => acc + cur + cur, 'dd')); // 'ddaabbcc'
// // 'dd' + a + a = 'ddaa' + b + b = ddaabb + c + c 

// for (let i in arr) {
//     console.log(arr[i]);
// }

// console.log(arr.myFilter((num, i, array) => {
//     return num > 1;
// }));


// const obj = {name: 'Jojo', age: 18};

// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// // object copy: shallow, deep

const obj = {
    name: 'Dio', 
    age: 200,
    arr: [
        { id: 1 }
    ],
    date: new Date(),
    foo() {
        console.log(111);
    }
};
// first leve, 

// const obj2 = {...obj};
// obj2.arr[0].id = 2;
// console.log(obj.arr[0].id);

// // JSON.stringify
// console.log(JSON.stringify(obj));
// const obj2 = JSON.parse( JSON.stringify(obj) );
// console.log(obj,obj2);

// deep coyp;
const _ = require('lodash');
const obj3 = _.cloneDeep(obj);
console.log(obj);
console.log(obj3);


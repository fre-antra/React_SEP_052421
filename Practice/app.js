// // oop: Object-oriented programming

// // // encapsulation
// class Person {
//   #name
//   #age
//   constructor(name, age) {
//     this.#name = name
//     this.#age = age
//   }
//   get name() {
//     return this.#name
//   }
//   set name(newName) {
//     this.#name = newName
//   }
//   walk() {
//     console.log(this.#name + ' walk around the world! ' + this.#age)
//     console.log(this.#name, 'walk around the world!', this.#age)
//     console.log(`${this.#name} walk around the world! ${this.#age}`)
//   }
// }

// // function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// // }
// // Person.prototype.walk = function() {
// //     console.log(this.name + ' walk around the world! ' + this.age);
// // }

// // const p = new Person('Jojo', 18);
// // Person.prototype.__proto__.run = function() {
// //     console.log(this.name + ' is running');
// // }
// // console.log(p);
// // p.walk();
// // p.run();

// // console.log(Person.prototype === p.__proto__);

// // const p1 = new Person('Dio', 200);
// // console.log(p1);
// // p1.walk();
// // p1.run();
// // p.name = 'Dio';
// // console.log(p.name);
// // p.walk();

// // // inheritance
// class Employee extends Person {
//   constructor(name, age, company) {
//     super(name, age)
//     this.company = company
//   }
//   walk() {
//     console.log(this + ' instance 1 from employee class ')
//   }
//   walk(salary) {
//     console.log(this + ' instance 2 from employee class ' + salary)
//   }
// }

// const e = new Employee('Dio', 200, 'Jump')
// console.log(e)
// e.walk()

// // // Poly-morph-ism
// // // Abstraction

// // // loop
// // // object copy

// const _ = require('lodash')
// const obj3 = _.cloneDeep(obj)
// console.log(obj)
// console.log(obj3)
const foo = function () {
  return Math.random() * 1000
}
console.log(foo())

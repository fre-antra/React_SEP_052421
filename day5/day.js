// // //oop
// // //encapsulation
// class Person{
//     #name;
//     #age;
//     constructor(name, age) {
//         this.name=name;
//         this.age=age;
//     }
//     // get name(){
//     //     return this.#name;
//     // }
//     // set name(newName) {
//     //     this.#name=newName;
//     // }
//     walk(){
//         console.log(this.#name+' walk ' + this.#age);
//         console.log(this.#name, 'walk', this.#age);
//         console.log(`${this.#name} walk ${this.#age}`);
//     }
// }
// // const p =new Person('jojo', 18);
// // console.log(p);

// //inheritance: only override, no overload
// class Employee extends Person{
//     constructor(name, age, company) {
//         //this.name=name;
        
//         super(name,age);
//         this.company = company;
//     }
//     walk() {
//         console.log(this.#name);
//     }
// }
// const e = new Employee('dio', 200,'jump');
// console.log(e);
// e.walk();

function Person(name, age) {
this.name=name;
this.age=age;
}
Person.prototype.walk= function (){
    console.log(this.name+' walk ');
}
function Employee(name, age, company) {
    Person.call(this, name, age);//this: instance of employee
    //person.apply(this, [name, age]);

    this.company=company;
}
Employee.prototype= Person.prototype;
Employee.prototype.constructor = Employee;
const e = new Employee('dio', 200,' jump');
console.log(e);
e.walk();


// //polymorphism
// //abstraction
// //loop

// //object copy



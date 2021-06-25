// Mypromise implementation
class MyPromise {
  constructor(callBack) {
    this.callBackQueue = []
    this.promiseStatus = 'pending'

    callBack(this.resolve, this.reject)
  }
  resolve = function (data) {
    this.promiseStatus = 'complete'
    console.log(this)
    setTimeout(() => {
      console.log(data)
    }, 1000)
    return data
  }.bind(this)

  reject = function (error) {
    this.promiseStatus = 'failed'
    setTimeout(() => {
      console.log(data)
    }, 1000)
    return error
  }.bind(this)
  // then
}

const prom = new MyPromise((resolve, reject) => {
  console.log(resolve('success'))
})
console.log(prom)

// oop: Object-oriented programming

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
// const foo = function () {
//   return Math.random() * 1000
// }
// console.log(foo())

// const myFetch = function (url) {
//   return new Promise((resolve, reject) => {
//     let data
//     var xhttp = new XMLHttpRequest()
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         data = JSON.parse(this.responseText)
//         resolve(data)
//       }
//     }
//     xhttp.open('GET', url, true)
//     xhttp.send()
//   })
// }
// class MyPromise {
//   constructor(cb) {
//     this.promiseState = 'pending'
//     this.resolve = function (data) {
//       this.promiseState = 'fulfilled'
//       this.curData = data
//       setTimeout(() => {
//         while (this.thenCbQueue.length > 0) {
//           const curThenCb = this.thenCbQueue.shift()
//           if (this.curData instanceof MyPromise) {
//             this.curData.then(promiseData => {
//               curThenCb(promiseData)
//             })
//           } else {
//             this.curData = curThenCb(this.curData)
//           }
//         }
//       }, 0)
//     }.bind(this)
//     this.reject = function (error) {
//       this.promiseState = 'failed'
//       this.curError = error
//       setTimeout(() => {
//         while (this.catchCbQueue.length > 0) {
//           const curCatchCb = this.catchCbQueue.shift()
//           this.curError = curCatchCb(this.curError)
//         }
//       })
//     }.bind(this)
//     this.thenCbQueue = []
//     this.catchCbQueue = []
//     cb(this.resolve, this.reject)
//   }
//   then(thenCb) {
//     this.thenCbQueue.push(thenCb)
//     return this
//   }
//   catch(catchCb) {
//     this.catchCbQueue.push(catchCb)
//     return this
//   }
// }

// const p = new MyPromise((res, rej) => {
//   res('Hello')
// })
//   .then(data => {
//     console.log('Data1: ')
//     console.log(data)
//     return new MyPromise((res, rej) => {
//       res('Promise Data')
//     })
//   })
//   .then(data2 => {
//     console.log('Data2: ')
//     console.log(data2)
//   })

// const p = new MyPromise((resolve, reject) => {
//   let timer = randomTimer()
//   setTimeout(() => {
//     if (timer > 2000) {
//       reject('Rejected: Too long to wait')
//     } else {
//       resolve('Resolve')
//     }
//   }, timer)
// })
//   .then(data => {
//     console.log('Data1: ')
//     console.log(data)
//     return 'Hi'
//   })
//   .catch(error => {
//     console.warn(error)
//   })

// const p = new Promise((resolve, reject) => {
//   console.log("hello");
// });

// console.log(p)

// function Person(age, weight) {
//   this.age = age
//   this.weight = weight
// }
// Person.prototype.getInfo = function () {
//   return (
//     'I am ' + this.age + ' years old ' + 'and weighs ' + this.weight + ' kilo.'
//   )
// }

// function Employee(age, weight, salary) {
//   Person.call(this)
//   this.age = age
//   this.weight = weight
//   this.salary = salary
// }

// Employee.prototype.getInfo = function () {
//   return (
//     'I am ' +
//     this.age +
//     ' years old ' +
//     'and weighs ' +
//     this.weight +
//     ' kilo ' +
//     'and earns ' +
//     this.salary +
//     ' dollar.'
//   )
// }

// var person = new Person(50, 90)
// var employee = new Employee(43, 80, 50000)

// console.log(person.getInfo())
// console.log(employee.getInfo())

// function $$(data) {
//   let classname = data.split('.')[1]
//   let ele = document.querySelector(data)
//   console.log(ele)

//   return {
//     html: data => {
//       ele.innerHTML = data
//     },
//   }
// }

// $$('button.continue').html('Next Step..')

// function foo(array, key) {
//   let left = array.length - 2
//   let right = array.length - 1
//   count = 0
//   while (right >= 0 && left >= 0) {
//     if (array[right] === key && array[left] !== key) {
//       count++
//       array[right] = array[left]
//       right--
//       left--
//       console.log('array1', array)
//     } else if (array[right] !== key && array[left] === key) {
//       left--
//     } else {
//       if (count > 0) {
//         if (array[right] !== key && array[left] !== key) {
//           array[right] = array[left]
//           right--
//           left--
//           console.log('arraycount', array)
//         } else if (array[right] !== key && array[left] === key) {
//           left--
//         } else {
//           right--
//           left--
//         }
//       } else {
//         left--
//         right--
//       }
//     }
//   }
//   if (array[0] === key) count++
//   array.forEach((item, index) => {
//     if (index < count) array[index] = key
//   })

//   console.log(array)
//   console.log('left', left, 'right', right, 'count', count)
//   return array
// }

// const arr = [1, 2, 3, 1, 2, 3, 3, 4]
// const key = 3
// console.log(foo(arr, key))

class Objecttest {
  constructor() {
    this.test = 'hello'
    this.fun = function () {
      this.test = 'funchange'
      return this.test
    }.bind(this)
  }

  tester = function () {
    this.test = 'testerchange'

    return this.test
  }
}
const a = new Objecttest()
const b = new Objecttest()
console.log('func   aaaaaa', a)
console.log('func   bbbbbb', b)
console.log('func  aaaaa test', a.test)
console.log('func  bbbbb test', b.test)
a.tester()
// console.log('tester log return', a.tester())
// console.log('fun log return', a.fun())
// a.test = 'many'

// console.log('func', a)

// console.log('tester log return', a.tester())
// console.log('fun log return', a.fun())
const foo = a.tester
console.log(foo)

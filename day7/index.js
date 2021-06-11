// prev code
function randomTimer() {
    let timer = Math.random() * 5000;
    console.log(`delayed time: ${timer}`);
    return timer;
}

// function foo() {
//     let timer = randomTimer();
//     console.log(`Delayed time: ${timer}`);
//     setTimeout(() => {
//         logMsg(`hello`);
//     }, timer);
// }

function logMsg(data) {
    console.log(data);
}

// then() needed to be called after promise

// const p = new Promise((resolve, reject) => {
//     let timer = randomTimer();
//     setTimeout(() => {
//         resolve(`hello`);
//     }, timer);
// }).then((data1) => {
//     console.log(`data1: `);
//     logMsg(data1);
//     // return data1;
// }).then((data2) => {
//     console.log(`data2: `);
//     logMsg(data2);
// })

// function getUser(userID) {
//     return new Promise((resolve, reject) => {
//         let data;
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 data = JSON.parse(this.responseText);
//                 resolve(data);
//             }
//         };
//         xhttp.open(
//             "GET",
//             "https://jsonplaceholder.typicode.com/todos/" + userID,
//             true
//         );
//         xhttp.send();
//     });
// }

// getUser(1).then((data) => {
//     logMsg(data);
//     return getUser(2);
// }).then((data2) => {
//     logMsg(data2);
//     return getUser(3);
// }).then((data3) => {
//     logMsg(data3);
//     // return getUser(3);
// })


// in reality, Js uses micro task queue
class MyPromise {
    constructor(cb) {
        this.promiseState = "pending";
        // resolve
        this.resolve = function (data) {
            this.promiseState = "fulfilled";
            this.curData = data;
            setTimeout(() => {
                while (this.thenCbQueue.length > 0) {
                    const curThenCb = this.thenCbQueue.shift();
                    if (this.curData instanceof MyPromise) {
                        this.curData.then((promiseData) => {
                            curThenCb(promiseData);
                        });
                    } else {
                        this.curData = curThenCb(this.curData);
                    }
                }
            }, 0);
        }.bind(this);

        // reject
        this.reject = function (error) {
            this.promiseState = "failed";
            this.curError = error;
            setTimeout(() => {
                while (this.catchCbQueue.length > 0) {
                    const curCatchCb = this.catchCbQueue.shift();
                    this.curError = curCatchCb(this.curError);
                }
            }, 0);

        }.bind(this);

        this.thenCbQueue = [];
        this.catchCbQueue = [];
        cb(this.resolve, this.reject);
    }

    then(thenCb) {
        this.thenCbQueue.push(thenCb);
        return this;
    }

    catch(catchCb) {
        this.catchCbQueue.push(catchCb);
        return this;
    }

    // do not need to create instance to call
    static all(promiseArr) {
        let numPromise = promiseArr.length;
        let numFulfilled = 0;
        let resolveData = new Array(numPromise);
        return new MyPromise((resolve, reject) => {
            promiseArr.forEach((promise, index) => {
                promise.then(data => {
                    numFulfilled++;
                    resolveData[index] = data;
                    if (numFulfilled === numPromise) {
                        resolve(resolveData);
                    }
                })
            });
        })
    }
}

// const p = new MyPromise((res, rej) => {
//     res("Hello");
// }).then((data) => {
//     console.log("Data1: ");
//     console.log(data);
//     return new MyPromise((res, rej) => {
//         res("Promise Data");
//     });
// }).then((data2) => {
//     console.log("Data2: ");
//     console.log(data2);
// });

// const p = new MyPromise((res, rej) => {
//     let timer = randomTimer();
//     setTimeout(() => {
//         if (timer > 2000) {
//             rej("rejected: too long to wait");
//         } else {
//             res("resolve");
//         }
//     }, timer);
// }).then((data) => {
//     console.log(`data 1: ${data}`);
//     return "hi";
// }).catch((error) => {
//     console.warn(error);
// })

// bind, apply, call
// const person = {
//     firstName: "Ana",
//     lastName: "Xin",
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// let personIntro = function (hobby, food) {
//     console.log(`${this.firstName} ${this.lastName} loves ${hobby} and ${food}`);
// };

// let myIntro = personIntro.bind(person);
// myIntro("games", "burger");

// personIntro.call(person, "anime", "sushi");

// personIntro.apply(person, ["manga", "chicken"]);

// fetch method returns a promise since .then is only inherited from promise

// function myFetch(url) {
//     return new Promise((resolve, reject) => {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 const response = {
//                     json: function () {
//                         return new Promise((resolve, reject) => {
//                             resolve(JSON.parse(xhttp.responseText));
//                         });
//                     }
//                 };
//                 // data = JSON.parse(this.responseText);
//                 resolve(response);
//             }
//         };
//         xhttp.open(
//             "GET",
//             url,
//             true
//         );
//         xhttp.send();
//     });
// }


// the order will not be deterministic since fetch is async
// let fulfilledCounter = 0;
// let resultArr = [];
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => {
//         fulfilledCounter += 1;
//         resultArr.push(json);
//         if (fulfilledCounter == 3) {
//             console.log(resultArr);
//         }
//     });
// fetch('https://jsonplaceholder.typicode.com/todos/2')
//     .then(response => response.json())
//     .then(json => {
//         fulfilledCounter += 1;
//         resultArr.push(json);
//         if (fulfilledCounter == 3) {
//             console.log(resultArr);
//         }
//     });
// fetch('https://jsonplaceholder.typicode.com/todos/3')
//     .then(response => response.json())
//     .then(json => {
//         fulfilledCounter += 1;
//         resultArr.push(json);
//         if (fulfilledCounter == 3) {
//             console.log(resultArr);
//         }
//     });


// promise.all()
const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
const promise2 = fetch('https://jsonplaceholder.typicode.com/todos/2').then((response) => response.json());
const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/3').then((response) => response.json());

MyPromise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
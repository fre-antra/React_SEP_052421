// const p = new Promise((resolve, reject) => {
//   let timer = randomTimer();
//   setTimeout(() => {
//     resolve("Hello");
//   }, timer);
// }).then((data1) => {
//   console.log("Data1: ");
//   logMsg(data1);
// });
//   .then((data2) => {
//     console.log("Data2: ");
//     logMsg(data2);
//   });

//   getUser(1, (data1) => {
//     // Use wrapper function to retrieve 3 data
//     logMsg(data1);
//     getUser(2, (data2) => {
//       logMsg(data2);
//       getUser(3, (data3) => {
//         logMsg(data3);
//       });
//     });
//   });

// Previous code
function randomTimer() {
  let timer = Math.random() * 5000;
  console.log("Delayed time: ", timer);
  return timer;
}

// function foo() {
//   let timer = randomTimer();
//   console.log("Delayed time, ", timer);
//   setTimeout(() => {
//     logMsg("Hello");
//   }, timer);
// }

function logMsg(data) {
  console.log(data);
}

// function getUser(userID) {
//   return new Promise((resolve, reject) => {
//     let data;
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         data = JSON.parse(this.responseText);
//         resolve(data);
//       }
//     };
//     xhttp.open(
//       "GET",
//       "https://jsonplaceholder.typicode.com/todos/" + userID,
//       true
//     );
//     xhttp.send();
//   });
// }

// getUser(1)
//   .then((data) => {
//     logMsg(data);
//     return getUser(2);
//   })
//   .then((data2) => {
//     logMsg(data2);
//     return getUser(3);
//   })
//   .then((data3) => {
//     logMsg(data3);
//   });

//micro task queue
//bind(), apply(), call()
// const person = {
//   firstName: "Ana",
//   lastName: "Xin",
//   getFullName: function () {
//     let fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
// };

// let personIntro = function (hobby, food) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       " " +
//       " loves " +
//       hobby +
//       " and " +
//       food
//   );
// };

// let myIntro = personIntro.bind(person);
// personIntro.apply(person, ["painting", "fruits"]);
// myIntro("video games", "sushi");

// class MyPromise {
//   constructor(cb) {
//     this.promiseState = "pending";
//     this.resolve = function (data) {
//       this.promiseState = "fulfilled";
//       this.curData = data;
//       setTimeout(() => {
//         while (this.thenCbQueue.length > 0) {
//           const curThenCb = this.thenCbQueue.shift();
//           if (this.curData instanceof MyPromise) {
//             this.curData.then((promiseData) => {
//               curThenCb(promiseData);
//             });
//           } else {
//             this.curData = curThenCb(this.curData);
//           }
//         }
//       }, 0);
//     }.bind(this);
//     this.reject = function (error) {
//       this.promiseState = "failed";
//       this.curError = error;
//       setTimeout(() => {
//         while (this.catchCbQueue.length > 0) {
//           const curCatchCb = this.catchCbQueue.shift();
//           this.curError = curCatchCb(this.curError);
//         }
//       });
//     }.bind(this);
//     this.thenCbQueue = [];
//     this.catchCbQueue = [];
//     cb(this.resolve, this.reject);
//   }
//   then(thenCb) {
//     this.thenCbQueue.push(thenCb);
//     return this;
//   }
//   catch(catchCb) {
//     this.catchCbQueue.push(catchCb);
//     return this;
//   }
//   static all(promiseArr) {
//     let fulfilledNum = 0;
//     let maxPromNum = promiseArr.length;
//     let resData = new Array(maxPromNum);

//     return new MyPromise((resolve, reject) => {
//       promiseArr.forEach((promise, index) => {
//         promise.then((data) => {
//           fulfilledNum++;
//           resData[index] = data;
//           if (fulfilledNum === maxPromNum) {
//             resolve(resData);
//           }
//         });
//       });
//     });
//   }
// }

// const p = new MyPromise((resolve, reject) => {
//   let timer = randomTimer();
//   setTimeout(() => {
//     if (timer > 2000) {
//       reject("Rejected: Too long to wait");
//     } else {
//       resolve("Resolve");
//     }
//   }, timer);
// })
//   .then((data) => {
//     console.log("Data1: ");
//     console.log(data);
//     return "Hi";
//   })
//   .catch((error) => {
//     console.warn(error);
//   });

// const p = new Promise((resolve, reject) => {
//   console.log("hello");
// });

// console.log(p);

// Create a queue using array
//push() + shift()
//pop() + unshift()

//fetch()
// myFetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

function myFetch(url) {
  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const response = {
          json: function () {
            return new Promise((resolve, reject) => {
              resolve(JSON.parse(xhttp.responseText));
            });
          },
        };

        resolve(response);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}
// promise.all()
// let fulfilledCounter = 0;
// let resultArr = new Array(3);
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     fulfilledCounter++;
//     resultArr[0] = json;
//     if (fulfilledCounter === 3) {
//       console.log(resultArr);
//     }
//   });
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => response.json())
//   .then((json) => {
//     fulfilledCounter++;
//     resultArr[1] = json;
//     if (fulfilledCounter === 3) {
//       console.log(resultArr);
//     }
//   });
// fetch("https://jsonplaceholder.typicode.com/todos/3")
//   .then((response) => response.json())
//   .then((json) => {
//     fulfilledCounter++;
//     resultArr[2] = json;
//     if (fulfilledCounter === 3) {
//       console.log(resultArr);
//     }
//   });

// const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//   (response) => response.json()
// );
// const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
//   (response) => response.json()
// );
// const promise3 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
//   (response) => response.json()
// );

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

class MyPromise {
  constructor(cb) {
    this.status = "pending";
    this.onFulfilledCallbacks = [];
    const resolve = (currentValue) => {
      this.status = "fulfilled";
      this.currentValue = currentValue;
      setTimeout(() => {
        this.onFulfilledCallbacks.forEach((fn) => fn());
      });
    };
    const reject = () => {};

    cb(resolve, reject);
  }

  then(onFulfilled) {
    return new MyPromise((res, rej) => {
      if (this.status === "fulfilled") {
        let cur = onFulfilled(this.currentValue);
        if (cur instanceof MyPromise) {
          cur.then((data) => {
            res(data);
          });
        } else {
          res(cur);
        }
      } else if (this.status === "pending") {
        this.onFulfilledCallbacks.push(() => {
          const cur = onFulfilled(this.currentValue);
          if (cur instanceof MyPromise) {
            cur.then((data) => {
              res(data);
            });
          } else {
            res(cur);
          }
        });
      }
    });
  }
}

const p = new MyPromise((res, rej) => {
  res("Hello");
})
  .then((data) => {
    console.log("Data1: ");
    console.log(data);
    return new MyPromise((res, rej) => {
      res("Promise Data");
    });
    // return "Hi";
  })
  .then((data2) => {
    console.log("Data2: ");
    console.log(data2);
    return "Aloha";
  })
  .then((data3) => {
    console.log("Data3: ");
    console.log(data3);
  });

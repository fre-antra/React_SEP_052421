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
  return Math.random() * 5000;
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
class MyPromise {
  constructor(cb) {
    this.promiseState = "pending";
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
    this.reject = function () {};
    this.thenCbQueue = [];
    cb(this.resolve, this.reject);
  }
  then(thenCb) {
    this.thenCbQueue.push(thenCb);
    return this;
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
  })
  .then((data2) => {
    console.log("Data2: ");
    console.log(data2);
  });

// const p = new Promise((resolve, reject) => {
//   console.log("hello");
// });

// console.log(p);

// Create a queue using array
//push() + shift()
//pop() + unshift()

// // Regular and customer promise classes.

// //Console Logging function
// function logMsg(msg) {
//   console.log(msg);
// }

// var x = 0;

// //Regular promise with then and catch
// const p = new Promise((resolve, reject) => {
//   if (x === 0) {
//     resolve("Correct value of x.");
//   } else {
//     reject("Wrong value of x.");
//   }
// })
//   .then((data) => {
//     logMsg("Data : ");
//     logMsg(data);
//   })
//   .catch((data) => {
//     logMsg("Rejected : ");
//     logMsg(data);
//   });

// //Promise with multiple then methods

// function getUser(userID) {
//   return new Promise((resolve, reject) => {
//     let data;
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         data = JSON.parse(this.responseText);
//         resolve(data);
//       } else if (this.status == 404) {
//         reject({ msg: `Data with user id ${userID} not found` });
//       }
//     };
//     xhr.open(
//       "GET",
//       "https://jsonplaceholder.typicode.com/todos/" + userID,
//       true
//     );
//     xhr.send();
//   });
// }

// getUser(1)
//   .then((data) => {
//     logMsg("User 1: ");
//     logMsg(data);
//     return getUser(2);
//   })
//   .then((data) => {
//     logMsg("User 2: ");
//     logMsg(data);
//     return getUser(31);
//   })
//   .then((data) => {
//     logMsg("User 3: ");
//     logMsg(data);
//   })
//   .catch((err) => {
//     logMsg("Error: ");
//     logMsg(err.msg);
//   });

// Custom myhPromise class
console.log("------------myPromise Class-------------");
class myPromise {
  constructor(cb) {
    this.promiseState = "pending";
    this.resolve = function (data) {
      this.promiseState = "fulfilled";
      this.curData = data;
      setTimeout(() => {
        var index = 0;
        while (this.thenCbQueue.length > 0) {
          const curThenCb = this.thenCbQueue.shift();
          //console.log(curThenCb);
          if (this.curData instanceof myPromise) {
            this.curData.then((promiseData) => {
              curThenCb(promiseData);
            });
          } else {
            this.curData = curThenCb(this.curData);
          }
        }
      }, 0);
    }.bind(this);
    this.reject = function (data) {
      this.promiseState = "rejected";
      setTimeout(() => {
        const curCatchCb = this.catchCbQueue.shift();
        curCatchCb(data);
      }, 0);
    }.bind(this);
    this.thenCbQueue = [];
    this.catchCbQueue = []; //Might not need queue for catch
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
}

console.log(
  "------------myPromise Class-Single then and catch blocks-------------"
);
//myPromise for single then and catch block.
var y = 1;
const myP = new myPromise((resolve, reject) => {
  if (y === 0) {
    resolve("Resolved data");
  } else {
    reject("Rejected data");
  }
})
  .then((data) => {
    console.log("Data: ");
    console.log(data);
  })
  .catch((data) => {
    console.log("Error: ");
    console.log(data);
  });

setTimeout(() => {
  console.log("------------myPromise Class-Multiple then blocks-------------");
}, 0);

//myPromise for multiple then blocks
function checkInput(input) {
  return new myPromise((resolve, reject) => {
    if (input < 4) {
      resolve("Correct input range");
    }
  });
}

checkInput(1)
  .then((data) => {
    console.log("First then : ", data);
    return checkInput(2);
  })
  .then((data) => {
    console.log("Second then : ", data);
    return checkInput(3);
  })
  .then((data) => {
    console.log("Third then : ", data);
  });

//Training myPromise class
//FIXME does not work for then >2 calls.
// class MyPromise1 {
//   constructor(cb) {
//     this.promiseState = "pending";
//     this.resolve = function (data) {
//       this.promiseState = "fulfilled";
//       this.curData = data;
//       setTimeout(() => {
//         while (this.thenCbQueue.length > 0) {
//           const curThenCb = this.thenCbQueue.shift();
//           if (this.curData instanceof MyPromise1) {
//             this.curData.then((promiseData) => {
//               curThenCb(promiseData);
//             });
//           } else {
//             this.curData = curThenCb(this.curData);
//           }
//         }
//       }, 0);
//     }.bind(this);
//     this.reject = function () {};
//     this.thenCbQueue = [];
//     cb(this.resolve, this.reject);
//   }
//   then(thenCb) {
//     this.thenCbQueue.push(thenCb);
//     return this;
//   }
// }

// const p = new MyPromise1((res, rej) => {
//   res("Hello");
// })
//   .then((data) => {
//     console.log("Data1: ");
//     console.log(data);
//     return new MyPromise1((res, rej) => {
//       res("Promise Data");
//     });
//   })
//   .then((data2) => {
//     console.log("Data2: ");
//     console.log(data2);
//     return new MyPromise1((res, rej) => {
//       res("Promise Data");
//     });
//   })
//   .then((data3) => {
//     console.log("Data3: ");
//     console.log(data3);
//   });

Array.prototype.myForEach = function (callbackfn) {
  for (let i = 0; i < this.length; i++) {
    callbackfn(this[i], i, this);
  }
};

Array.prototype.myMap = function (callbackfn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callbackfn(this[i], i, this));
  }
  return arr;
};

Array.prototype.myFilter = function (callbackfn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackfn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.mySome = function (callbackfn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackfn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

Array.prototype.myEvery = function (callbackfn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackfn(this[i], i, this) === false) {
      return false;
    }
  }
  return true;
};

Array.prototype.myReduce = function (callbackfn, initVal) {
  let acc = initVal;
  let initIdx = 0;
  if (initVal === undefined) {
    acc = this[0];
    initIdx = 1;
  }

  for (let i = initIdx; i < this.length; i++) {
    acc = callbackfn(acc, this[i], i, this);
  }
  return acc;
};

// =================================================
const arr = [3, 2, 7, 1, 9, 11];
arr.myForEach((n) => console.log(n));
console.log(arr.myMap((n) => n + 3));
console.log(arr.myFilter((n) => n < 5));
console.log(arr.mySome((cur) => cur > 3));
console.log(arr.myEvery((cur) => cur < 3));
console.log(arr.myReduce((acc, cur) => acc + cur, 4));

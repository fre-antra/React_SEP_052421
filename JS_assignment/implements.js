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
console.log(arr.mySome((cur, i, arr) => cur > 3));
console.log(arr.myEvery((cur, i, arr) => cur < 3));
console.log(arr.myReduce((acc, cur, i, arr) => acc + cur, 0));

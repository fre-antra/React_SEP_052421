Array.prototype.myForEach = function(callbackfn) {
    for (let i = 0; i < this.length; i++) {
        callbackfn(this[i], i, this);
    }
}

Array.prototype.myMap = function(callbackfn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callbackfn(this[i], i, this));
    }
    return arr;
}

Array.prototype.myFilter = function(callbackfn) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {

        if (callbackfn(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr;
}

// mySome, myEvery, myReduce
Array.prototype.myEvery = function(callbackfn) {
  for (let i = 0; i < this.length; i++) {
    if (!callbackfn(this[i], i, this)) return false;
  }
  return true;
}

Array.prototype.mySome = function(callbackfn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackfn(this[i], i, this)) return true;
  }
  return false;
}

Array.prototype.myReduce = function(callbackfn, initialValue) {
  let accumulator = initialValue || this[0];
  let i = initialValue ? 0 : 1;
  while (i < this.length) {
    accumulator = callbackfn(accumulator, this[i], i, this);
    i++;
  }
  return accumulator;
}

const arr = ['a', 'b', 'c'];
console.log(arr.myReduce((acc, cur, i, arr) => acc + cur + cur, 'dd')); // 'ddaabbcc'
console.log(arr.myEvery((cur, i, arr) => cur < 'd'));
console.log(arr.mySome((cur, i, arr) => cur > 'b'));

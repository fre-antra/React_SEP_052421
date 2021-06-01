const arr = [1, 2, 3, 4];

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

Array.prototype.myMap = function (callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
}

Array.prototype.myFilter = function (callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr;
}

Array.prototype.myReduce = function (callback, initialVal) {
  let acc = initialVal || this[0];
  const startIndex = initialVal ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this)
  }
  return acc;
}

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
}

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
}

arr.myForEach(x => console.log(x))
console.log(arr.myMap(x => x * 2))
console.log(arr.myFilter(x => x > 1))
console.log(arr.myReduce((acc, cur) => acc + cur, 0)) // 10
console.log(arr.mySome(x => x > 3)) // true
console.log(arr.myEvery(x => x >= 1)) // true
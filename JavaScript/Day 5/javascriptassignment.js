// Exercise: some, every, reduce
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    let cur = this[i];
    acc = cb(acc, cur, i, this);
  }
  return acc;
};
Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) return false;
  }
  return true;
};
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return true;
  }
  return false;
};

//1
function fn(value) {
  return value.split("").reverse().join("");
}

//2
function fn(value) {
  return value === value.split("").reverse().join("");
}

//3
function fn(value) {
  let newValue = [];
  for (let i = 0; i < value.length; i++) {
    for (let j = i; j < value.length; j++) {
      newValue.push(value.substring(i, j + 1));
    }
  }
  return newValue.join(", ");
}

//4
function fn(value) {
  let arr = value.split("");
  return arr.sort();
}

//5
function fn(value) {
  let arr = value.split(" ");
  for (let i in arr) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join(" ");
}
//6

//7

//8

//9

//10

//11

//12

//13

//14

//15

//16

//17

//18

//19

//20

//21

//22

//23

//24

//25

//26

//27

//28

//29

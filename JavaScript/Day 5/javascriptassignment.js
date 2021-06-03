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
function fn(value) {
  let arr = value.split(" ");
  let longestWord = "";
  arr.forEach((eachWord) =>
    eachWord.length > longestWord.length ? (longestWord = eachWord) : ""
  );
  return longestWord;
}

//7
function fn(value) {
  let arr = value.match(/[aeiou]/gi);
  return arr.length ? arr.length : 0;
}

//8
function fn(value) {
  if (value % 2 && value % 3) return true;
  return false;
}

//9
function fn(value) {
  return typeof value;
}

//10
function fn(value) {
  for (let i = 0; i < value; i++) {
    let line = "";
    for (let j = 0; j < value; j++) {
      if (i === j) line += " 1 ";
      else line += " 0 ";
    }
    console.log(line);
  }
}

//11
function fn(value) {
  let arrSeconds = [];
  value.sort();
  arrSeconds.push(value[1]);
  arrSeconds.push(value[value.length - 2]);
  return arrSeconds;
}

//12
function fn(value) {
  const arr = [];
  let total = 0;

  for (let i = 1; i < value; i++) {
    if (value % i === 0) arr.push(i);
  }

  total = arr.reduce((acc, cur) => acc + cur, 0);
  return (total + value) / 2 === value && total === value ? true : false;
}

//13
function fn(value) {
  const arr = [];
  for (let i = 0; i < value; i++) {
    if (value % i === 0) arr.push(i);
  }
  return arr;
}

//14
function fn(value, coins) {
  let currentValue = value;
  let i = 0;
  const arr = [];
  while (currentValue > 0) {
    if (currentValue - coins[i] >= 0) {
      arr.push(coins[i]);
      currentValue -= coins[i];
    } else {
      i++;
    }
  }
  return arr;
}

//15
function fn(b, n) {
  return Math.pow(b, n);
}

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

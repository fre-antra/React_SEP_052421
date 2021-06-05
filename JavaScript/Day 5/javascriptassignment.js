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
function fn(value) {
  const alphaBox = {};
  const unique = [];
  for (let c of value) {
    if (!(c in alphaBox)) {
      unique.push(c);
      alphaBox[c] = true;
    }
  }
  return unique.join("");
}

//17
function fn(value) {
  const count = {};
  for (let c of value) {
    if (!(c in count)) {
      count[c] = 1;
    } else {
      count[c] += 1;
    }
  }
  return count;
}

//18
function fn(arr, x) {
  arr.sort();
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > x) {
      end = mid - 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

//19
function fn(arr, x) {
  return arr.filter((num) => num > x);
}

//20
function fn() {
  const word = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idArr = [];
  for (let i = 0; i < word.length; i++) {
    idArr.push(word[Math.floor(Math.random() * word.length)]);
  }
  return idArr.join("");
}

//21
function fn(arr, len) {
  return arr
    .reduce(
      (subsets, cur) => subsets.concat(subsets.map((set) => [cur, ...set])),
      [[]]
    )
    .filter((set) => set.length >= len);
}

//22
function fn(str, letter) {
  return Array.from(str).filter((w) => w === letter).length;
}

//23
function fn(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return i;
  }
  return -1;
}

//24
function fn(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.reverse();
}

//25
function fn(arr) {
  let longest = "";
  for (let country of arr) {
    if (country.length > longest.length) {
      longest = country;
    }
  }
  return longest;
}

//26
function fn(s) {
  let start = 0;
  let cms = "";
  const used = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in used && start <= used[s[i]]) {
      start = used[s[i]] + 1;
    }
    cms =
      cms.length < s.substring(start, i + 1).length
        ? s.substring(start, i + 1)
        : cms;
    used[s[i]] = i;
  }
  return cms;
}

//27
function fn(s){
  let pw = ''
  
  for(let i=0; i<s.length; i++){
    for(let j=s.length; j>-1; j--){
      let word = s.substring(i,j)
      if(pw.length >= j-i) break
      else if(word === word.split('').reverse().join('')){
        pw = word
        break
      }
    }
  }
  return pw
}

//28
function fn(_cb){
  cb()
}
function _cb{
  console.log('hello antra')
}

//29
function fn(cb){
  console.log(cb.name)
}
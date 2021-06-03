// 1
const reverseNumber = (num) => {
  let tmp = Math.abs(num).toString().split("");
  let reversed = tmp.reverse().join("");
  return reversed;
};

// console.log(reverseNumber(32243));

// ====================================================
// 2
const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === " ") {
      left++;
      continue;
    }

    if (str[right] === " ") {
      right--;
      continue;
    }

    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};

// console.log(isPalindrome("nurses run"));

// ====================================================
// 3
const strCombinations = (str) => {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      output.push(str.slice(i, j));
    }
  }
  return output;
};

// console.log(strCombinations("dog"));

// ====================================================
// 4
const alphabetOrder = (str) => {
  return str.split("").sort().join("");
};

// console.log(alphabetOrder("webmaster"));

// ====================================================
// 5
const firstUppercase = (str) => {
  let output = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") output += str[i].toUpperCase();
    else output += str[i];
  }

  return output;
};

// console.log(firstUppercase("the quick brown fox"));

// ====================================================
// 6
const longestWord = (str) => {
  let arr = str.split(" ");
  let output = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > output.length) output = arr[i];
  }
  return output;
};

// console.log(longestWord("Web Development Tutorial"));

// ====================================================
// 7
const countVowels = (str) => {
  let count = 0;
  let hmap = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  for (let c of str) {
    if (hmap[c]) count++;
  }
  return count;
};

// console.log(countVowels("the quick brown fox"));

// ====================================================
// 8
const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// console.log(isPrime(11));

// ====================================================
// 9
const myTypeOf = (arg) => {
  return typeof arg;
};

// console.log(myTypeOf(isPrime));

// ====================================================
// 10
const identityMatrix = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let tmp = [];
    for (let j = 0; j < n; j++) {
      if (i === j) tmp.push(1);
      else tmp.push(0);
    }
    matrix.push(tmp);
  }
  return matrix;
};

// console.log(identityMatrix(3));

// ====================================================
// 11
const secondLowestGreatest = (arr) => {
  if (arr.length < 2) return [];
  arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
};

// console.log(secondLowestGreatest([11, 21, 3, 1, 7]));

// ====================================================
// 12
const perfectNum = (num) => {
  let tmp = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) tmp += i;
  }
  return num === tmp;
};

// console.log(perfectNum(8128));

// ====================================================
// 13
const computeFactor = (num) => {
  let output = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) output.push(i);
  }
  return output;
};

// console.log(computeFactor(30));

// ====================================================
// 14
const convertToCoin = (num, arr) => {
  let output = [];
  arr.sort((a, b) => b - a);
  for (let c of arr) {
    let tmp = Math.floor(num / c);
    num = num % c;
    while (tmp > 0) {
      output.push(c);
      tmp--;
    }
  }
  return output;
};

// console.log(convertToCoin(46, [1, 10, 2, 5, 25]));

// ====================================================
// 15
const exponentBase = (n, b) => {
  let output = 1;
  while (n > 0) {
    output *= b;
    n--;
  }
  return output;
};

// console.log(exponentBase(10, 2));

// ====================================================
// 16
const unique = (str) => {
  let tmp = new Set();
  let output = "";
  for (let c of str) {
    if (!tmp.has(c)) output += c;
    tmp.add(c);
  }
  return output;
};

// console.log(unique("thequickbrownfoxjumpsoverthelazydog") === "thequickbrownfxjmpsvlazydg");

// ====================================================
// 17

// ====================================================
// 18

// ====================================================
// 19

// ====================================================
// 20

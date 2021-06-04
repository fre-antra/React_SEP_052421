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
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i].length > output.length) output = arr[i];
  // }
  arr.forEach((e) => (e.length > output.length ? (output = e) : output));
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
const charOccurence = (str) => {
  let hmap = {};
  for (let c of str) {
    if (c in hmap) hmap[c]++;
    else hmap[c] = 1;
  }
  return hmap;
};

// console.log(charOccurence("helloworld"));

// ====================================================
// 18
const binarySearch = (num, arr) => {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] > num) j = mid - 1;
    else if (arr[mid] < num) i = mid + 1;
    else return mid;
  }

  return -1;
};

// console.log(binarySearch(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// ====================================================
// 19
const largerThanNumber = (num, arr) => arr.filter((n) => n > num);

// console.log(largerThanNumber(7, [1, 12, 3, 8, 10, 6, 11, 2, 13]));

// ====================================================
// 20
const generateId = (num) => {
  const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let output = "";
  let len = charList.length;
  for (let i = 0; i < num; i++) {
    output += charList[Math.floor(Math.random() * len)];
  }
  return output;
};

// console.log(generateId(10));

// ====================================================
// 21
const subset = (arr, num) => {
  let output = [[]];
  for (let i = 0; i < arr.length; i++) {
    let len = output.length;
    for (let j = 0; j < len; j++) {
      output.push(output[j].concat(arr[i]));
    }
  }
  return output.filter((e) => e.length >= num);
};

// console.log(subset([1, 2, 3], 2));

// ====================================================
// 22
const numOfOccurence = (str, ch) => {
  let count = 0;
  str = str.toLowerCase();
  for (let c of str) {
    if (ch === c) count++;
  }
  return count;
};

// console.log(numOfOccurence("microsoft.com", "o"));

// ====================================================
// 23
const firstNotRepeat = (str) => {
  let hmap = {};
  for (let c of str) {
    if (c in hmap) hmap[c]++;
    else hmap[c] = 1;
  }
  for (let c of str) {
    if (hmap[c] === 1) return c;
  }
  return "";
};

// console.log(firstNotRepeat("abacddbec"));

// ====================================================
// 24
const bubbleSort = (arr) => {
  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        flag = false;
      }
    }
  }
  return arr;
};

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// ====================================================
// 25
const longestName = (arr) => {
  let output = arr[0];
  // for (let i of arr) {
  //   if (i.length > output.length) output = i;
  // }
  arr.forEach((e) => (e.length > output.length ? (output = e) : output));

  return output;
};

// console.log(longestName(["Australia", "Germany", "United States of America"]));

// ====================================================
// 26
const longestSubstring = (str) => {
  let hset = new Set();
  let tmp = "";
  let output = "";
  for (let c of str) {
    if (!hset.has(c)) {
      hset.add(c);
      tmp += c;
    } else {
      if (tmp.length > output.length) {
        output = tmp;
      }
      hset.clear();
      hset.add(c);
      tmp = c;
    }
  }

  return output;
};

// console.log(longestSubstring("abcabdcbbc"));

// ====================================================
// 27
const longestPalindromeSubstr = (str) => {
  let output = [];
  let count = 0;
  let substrs = strCombinations(str).filter((s) => isPalindrome(s) && s.length > 1);
  substrs.forEach((s) => {
    s.length > count ? (count = s.length) : count;
  });

  substrs.forEach((s) => {
    s.length === count ? output.push(s) : "";
  });
  return output;
};

// console.log(longestPalindromeSubstr("abracadabra"));

// ====================================================
// 28
const jsFunc = (cb, ...args) => {
  return cb(...args);
};

// console.log(jsFunc((a, b, c) => a + b + c, 3, 7, 1));

// ====================================================
// 29
const fnName = (fn) => {
  return fn.name;
};

function fnName2() {
  return arguments.callee.name;
}

// console.log(fnName(fnName));
// console.log(fnName(isPrime));
// console.log(fnName2());

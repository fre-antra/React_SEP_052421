// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
console.log('=======================================================');
console.log();

const reverseNumber = function (num) {
  let res = 0;

  let sign = num < 0 ? -1 : 1;

  num = Math.abs(num);

  while (num !== 0) {
    res = res * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return res * sign;
};

console.log(reverseNumber(-32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
console.log('=======================================================');
console.log();

const checkPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && s[l] === ' ') l++;
    while (l < r && s[r] === ' ') r--;
    if (s[l++] !== s[r--]) return false;
  }

  return true;
};

console.log(checkPalindrome('nurses run'));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
console.log('=======================================================');
console.log();

const combinations = function (s) {
  let res = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      res.push(s.substring(i, j));
    }
  }

  return res;
};

console.log(combinations('dog'));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
console.log('=======================================================');
console.log();

const sortLetters = (s) => {
  return s.split('').sort().join('');
};

console.log(sortLetters('webmaster'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
console.log('=======================================================');
console.log();

const capFirstLetter = (s) => {
  return s
    .split(' ')
    .map((word) => {
      if (!word) return word;
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};

console.log(capFirstLetter('the quick brown fox '));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
console.log('=======================================================');
console.log();

const findLongestWord = (s) => {
  let res = '';

  s.split(' ').forEach((word) => {
    if (word.length > res.length) res = word;
  });

  return res;
};

console.log(findLongestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
console.log('=======================================================');
console.log();

const countVowels = (s) => {
  let res = 0;
  let set = new Set(['A', 'E', 'I', 'O', 'U']);

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i].toUpperCase())) res++;
  }

  return res;
};

console.log(countVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
console.log('=======================================================');
console.log();

const isPrime = (num) => {
  if (num <= 0) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
};

console.log(isPrime(169023785461));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
console.log('=======================================================');
console.log();

const checkType = (arg) => {
  return typeof arg;
};

let test;
console.log(checkType(new Array()));
console.log(checkType(true));
console.log(checkType(checkType));
console.log(checkType(1));
console.log(checkType('a'));
console.log(checkType(test));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
console.log('=======================================================');
console.log();

const buildMatrix = (n) => {
  let res = new Array();

  for (let i = 0; i < n; i++) {
    let row = new Array();

    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    res.push(row);
  }

  return res;
};

console.log(buildMatrix(4));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
console.log('=======================================================');
console.log();

const findSecondBoth = (arr) => {
  if (arr.length < 2) return 'Invalid input';

  arr.sort();

  return arr[1] + ',' + arr[arr.length - 2];
};

console.log(findSecondBoth([1, 2, 3, 4, 5]));

// 12. Write a JavaScript function which says whether a number is perfect.

// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
console.log('=======================================================');
console.log();

const isPerfectNumber = (num) => {
  let res = 0;

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      res += i + num / i;
    }
  }

  return res === num * 2;
};

console.log(isPerfectNumber(6));

// 13. Write a JavaScript function to compute the factors of a positive integer.
console.log('=======================================================');
console.log();

const showFactors = (num) => {
  let res = new Set();

  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      res.add(i);
      res.add(num / i);
    }
  }
  return res;
};

console.log(showFactors(64));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
console.log('=======================================================');
console.log();

const convertCoins = (amount, coins) => {
  let res = new Array();

  for (let i = 0; i < coins.length; i++) {
    let val = coins[i];
    while (amount >= val) {
      res.push(val);
      amount -= val;
    }
  }

  return res;
};

console.log(convertCoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
console.log('=======================================================');
console.log();

const pow = (b, n) => {
  if (n === 0) return 1;
  if (b === 0 || b === 1) return b;

  if (n < 0) return 1 / pow(b, -n);

  let res = pow(b, Math.floor(n / 2));

  if (n % 2 === 0) return res * res;
  else return res * res * b;
};

console.log(pow(0.1, 2));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
console.log('=======================================================');
console.log();

const uniqueLetters = (s) => {
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }

  let res = '';

  set.forEach((c) => {
    res += c;
  });

  return res;
};

console.log(uniqueLetters('thequickbrownfoxjumpsoverthelazydog'));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
console.log('=======================================================');
console.log();

const countLetters = (s) => {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set(s[i], 1);
  }

  return map;
};

console.log(countLetters('aabbccdkfh'));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
console.log('=======================================================');
console.log();

const binarySearch = (arr, target) => {
  arr.sort();

  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((r - l) / 2) + l;

    if (arr[mid] < target) l = mid + 1;
    else if (arr[mid] > target) r = mid - 1;
    else return true;
  }

  return false;
};

console.log(binarySearch([1, 2, 3, 4], 5));

// 19. Write a JavaScript function that returns array elements larger than a number.
console.log('=======================================================');
console.log();

const countLarger = (arr, target) => {
  let res = new Array();

  for (let n of arr) {
    if (n > target) res.push(n);
  }

  return res;
};

console.log(countLarger([1, 2, 3, 4, 5], 3));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
console.log('=======================================================');
console.log();

const genId = (len) => {
  const data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let res = '';
  for (let i = 0; i < len; i++) {
    res += data[Math.floor(Math.random() * data.length)];
  }
  return res;
};

console.log(genId(18));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
console.log('=======================================================');
console.log();

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
console.log('=======================================================');
console.log();

const countOneLetter = (s, c) => {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) res++;
  }

  return res;
};

console.log(countOneLetter('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
console.log('=======================================================');
console.log();

const firstUniqueLetter = (s) => {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], false);
    else {
      if (!map.get(s[i])) map.set(s[i], true);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) return s[i];
  }

  return null;
};

console.log(firstUniqueLetter('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".

// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
console.log('=======================================================');
console.log();

const bubbleSort = (arr) => {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      if (arr[j] > arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
};

console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
console.log('=======================================================');
console.log();

const longestCountryName = function (list) {
  let max = 0;
  let res = '';
  list.forEach((s) => {
    if (s.length > max) res = s;
  });

  return res;
};

console.log(
  longestCountryName(['Australia', 'Germany', 'United States of America'])
);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
console.log('=======================================================');
console.log();

const longestSub = function (s) {
  let set = new Set();
  let res = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[j++]);
    }

    set.add(s[i]);

    res = Math.max(res, i - j + 1);
  }

  return res;
};

console.log(longestSub('abacdcefgg'));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".

// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
console.log('=======================================================');
console.log();
const longestPalindromeSub = (s) => {
  let max = 0;
  let res = new Array();

  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;

    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        l--;
        r++;
      } else break;
    }

    if (r - l - 1 > max) {
      max = r - l - 1;
      res = new Array();
      res.push(s.slice(l + 1, r));
    } else if (r - l - 1 === max) {
      res.push(s.slice(l + 1, r));
    }
  }

  return res;
};

console.log(longestPalindromeSub('abracadabra'));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
console.log('=======================================================');
console.log();
const passFunction = (func, num) => {
  return num + func(num);
};

const toDouble = (num) => {
  return num - 0.001;
};

console.log(passFunction(toDouble, 1));

// 29. Write a JavaScript function to get the function name.
console.log('=======================================================');
console.log();
const getFuncName = (func) => {
  return func.name;
};

console.log(getFuncName(passFunction));
console.log(getFuncName(toDouble));

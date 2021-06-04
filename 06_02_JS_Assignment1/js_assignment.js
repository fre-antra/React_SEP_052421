// JavaScript Assignment

// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 
function reverseANumber(num) {
  let numToStr = num.toString();
  let reversedNumStr = numToStr.split('').reverse().join('');
  return parseInt(reversedNumStr);
}
console.log(reverseANumber(12345567));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. 
function isPalindrome(str) {
  let arr = str.split('');
  let left = 0, right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome('madam'));

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 
function allCombinationsOfStr(str) {
  const ans = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      ans.push(str.slice(i, j + 1));
    }
  }
  return ans;
}
console.log(allCombinationsOfStr('dog'));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function orderedStr(str) {
  let arr = str.split('').sort();
  return arr.join('');
}
console.log(orderedStr('webmaster'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
function convertFirstLetterToUpperCase(str) {
  let arr = str.split(' ');
  const newArr = [];
  for (let word of arr) {
    let wordArr = word.split('');
    wordArr[0] = wordArr[0].toUpperCase();
    newArr.push(wordArr.join(''));
  }
  return newArr.join(' ');
}
console.log(convertFirstLetterToUpperCase('the quick brown fox'));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
function longestWord(str) {
  let arr = str.split(' ');
  if (arr.length < 2) return arr[0];
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > ans.length) ans = arr[i];
  }
  return ans;
}
console.log(longestWord('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
function countVowels(str) {
  const vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  }
  let count = 0;
  let arr = str.split('');
  for (const char of arr) {
    if (vowels[char]) count++;
  }
  return count;
}
console.log(countVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}
console.log(isPrime(11));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function typeCheck(arg) {
  return typeof arg;
}
console.log(typeCheck(() => 1))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function nRow_nColIdentityMatrix(n) {
  let matrix = Array(n).fill(0).map(ele => Array(n).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][i] = 1;
  }
  return matrix;
}
console.log(nRow_nColIdentityMatrix(3));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function findSecondGreatestAndLowestNums(arr) {
  arr = arr.sort((a, b) => a - b);
  return [arr[1], arr[arr.length - 2]];
} 
console.log(findSecondGreatestAndLowestNums([2, 3, 1, 5, 4]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfectNum(num) {
  const set = new Set();
  let acc = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      set.add(i);
      set.add(num / i);
    }
  }
  set.forEach((value) => acc = acc + value);
  if (acc / 2 === num) return true;
  else return false;
}
console.log(isPerfectNum(8128));

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factorsOfInteger(num) {
  const set = new Set();
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      set.add(i);
      set.add(num / i);
    }
  }
  return Array.from(set);
}
console.log(factorsOfInteger(8128));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function amountToCoins(amount, coinsArr) {
  const ans = [];
  for (let coin of coinsArr) {
    const count = parseInt(amount / coin);
    amount = amount % coin;
    for (let i = 0; i < count; i++) {
      ans.push(coin);
    }
  }
  return ans;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
const exponentOfBase = (b, n) => (Math.pow(b, n));
console.log(exponentOfBase(4, 0.5));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
const extractUniqueChar = (str) => {
  const arr = str.split('');
  const set = new Set();
  for (const char of arr) {
    set.add(char);
  }
  const newArr = Array.from(set);
  return newArr.join('');
}
console.log(extractUniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
const occurrencesOfLetter = (str) => {
  const map = {};
  for (let letter of str) {
    map[letter] = map[letter] + 1 || 1;
  }
  return map;
}
console.log(occurrencesOfLetter("thequickbrownfoxjumpsoverthelazydog"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
const binarySearch = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6));

// 19. Write a JavaScript function that returns array elements larger than a number. 
const elementsLargerThanTarget = (arr, target) => (arr.filter((currentValue) => currentValue > target));
console.log(elementsLargerThanTarget([2, 4, 6, 4, 2, 5, 8], 3));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const randomChar = (len) => {
  const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charListLen = charList.length;
  const ans = [];
  for (let i = 0; i < len; i++) {
    ans.push(charList[Math.floor(Math.random() * charListLen)]);
  }
  return ans.join('');
}
console.log(randomChar(15));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
const fixedLengthCombinations = (arr, len) => {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
      let ansLen = ans.length;
      for (let j = 0; j < ansLen; j++) {
          let copy = [...ans[j]]; 
          ans[j].push(arr[i]);
          ans.push(copy);
      }
      ans.push([arr[i]]);
  }
  return ans.filter((currentValue) => currentValue.length === len);
}
console.log(fixedLengthCombinations([1, 2, 3], 2));


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
const numberOfOccurrences = (str, letter) => {
  const map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  return map[letter] ? map[letter] : 0;
}
console.log(numberOfOccurrences('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
const firstUnrepeatedChar = (str) => {
  const map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  for (let char of str) {
    if (map[char] === 1) return char;
  }
  return null;
}
console.log(firstUnrepeatedChar('abacddbec'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j >= len - i; j--) {
      if (arr[j] > arr[j - 1]) {
        const temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
const Longest_Country_Name = (list) => {
  let maxLen = -Infinity;
  let ans = undefined;
  for (const country of list) {
    if (country.length > maxLen) {
      maxLen = country.length;
      ans = country;
    }
  }
  return ans;
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
const longestSubstringWithoutRepeatingChars = (str) => {
  let left = 0, right = 0;
  const window = {};
  let longestSubstr = '';
  while (right < str.length) {
    let c1 = str[right];
    window[c1] = window[c1] + 1 || 1;
    while (window[c1] > 1) {
      let c2 = str[left];
      window[c2]--;
      left++;
    }
    let currentSubstr = str.substring(left, right + 1);
    longestSubstr = longestSubstr.length > currentSubstr.length ? longestSubstr : currentSubstr;
    right++;
  }
  return longestSubstr;
}
console.log(longestSubstringWithoutRepeatingChars("abcabcbb")); 

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
const expandAroundCenter = (str, left, right) => {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return [left + 1, right - 1];
}

const longestPalindrome = (str) => {
  if (str === null || undefined || str.length < 1) return '';
  let start = 0, end = 0;
  for (let i = 0; i < str.length; i++) {
    let [left1, right1] = expandAroundCenter(str, i, i);
    let [left2, right2] = expandAroundCenter(str, i, i + 1);
    if (right1 - left1 > end - start) {
      start = left1;
      end = right1;
    } 
    if (right2 - left2 > end - start) {
      start = left2;
      end = right2;
    }
  }
  return str.substring(start, end + 1);
}
console.log(longestPalindrome('babad'));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
const fn = (arg1, arg2, callbackFn) => {
  return callbackFn(arg1, arg2);
}
console.log(fn(5, 2, Math.max));

// 29. Write a JavaScript function to get the function name. 
function nameOfFunc() {
  return arguments.callee.name;
//   return nameOfFunc.name;
}
console.log(nameOfFunc());

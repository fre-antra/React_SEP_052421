// JavaScript Assignment

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
//i: number, o: number,
function reverse(number) {
  return Number(number.toString().split("").reverse().join(""));
}
const test1 = 234234;
console.log(reverse(test1));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
//i: string, o: boolean
function isPalindrome(string) {
  let len = Math.floor(string.length / 2);
  for (let i = 0; i < len; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
}
// const isPalindrome = (string) => {
//   return string === string.split('').reverse().join('');
// }
const test2 = "palindrome";
const test3 = "radar";
console.log(isPalindrome(test2));
console.log(isPalindrome(test3));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
//i: string, o: array of string
function combinationsOfString(string) {
  let output = [];
  for (let i = 0; i < string.length; i++) {
    let temp = "";
    for (let j = i; j < string.length; j++) {
      temp += string[j];
      output.push(temp);
    }
  }
  return output;
}

const test4 = "dog";
console.log(combinationsOfString(test4));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
//i: string.(ignore the capital for now), o: string(re-order in alphabetical way)
function alphabetOrder(string) {
  return string.split("").sort().join("");
}

console.log(alphabetOrder("webmaster"));
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
//i: string, o:string
function capitalizeLetter(string) {
  return string
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

  /* Use reduce */
  // return string
  //   .split(" ")
  //   .reduce(
  //     (accumulator, currentValue) =>
  //       accumulator[0].toUpperCase() +
  //       accumulator.slice(1) +
  //       " " +
  //       currentValue[0].toUpperCase() +
  //       currentValue.slice(1)
  //   );
  
  /* Use for loop */
    // let array = string.split(' ');
    // let result = [];
    // for (let word of array) {
    //   word = word.split('')
    //   word[0] = word[0].toUpperCase();
    //   result.push(word.join(''))
    // }
    return result.join(' ')
}

console.log(capitalizeLetter("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
//i: string(sentence), o: string(longest word) edge case: more than one longest words, return the first one.
function longestWord(string) {
  let maxLen = [0, ""];
  string.split(" ").forEach((item) => {
    if (maxLen[0] < item.length) {
      maxLen[0] = item.length;
      maxLen[1] = item;
    }
  });
  return maxLen[1];
}

console.log(longestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
//i: string, o: number(number of vowel),
//Be aware: capital
function numberOfVowel(string) {
  // let vowelArr = {
  //   A: true,
  //   E: true,
  //   I: true,
  //   O: true,
  //   U: true,
  //   a: true,
  //   e: true,
  //   i: true,
  //   o: true,
  //   u: true,
  // };
  let vowelArr = new Set('AEIOUaeiou');
  let count = 0;
  for (let char of string) {
    if (vowelArr.has(char)) count++;
  }
  return count;
}

console.log(numberOfVowel("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//i: number o: boolean(true represents is prime)
function prime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
  /* Use filter */
  // return [...Array(number).keys()].slice(2).filter(item=>number % item === 0).length === 0;
}

console.log(prime(3));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function typeOfValue(input) {
  return typeof input;
}
console.log(typeOfValue((a) => console.log(b)));
console.log(typeOfValue(true));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
//identity matrix means the number on the diagonal is '1'.
//i: number(n by n matrix), o: matrix(identity)
function identityMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) row.push(1);
      else row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}

console.log(identityMatrix(8));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
//i: array(array of numbers) o: array(the second lowest and second greatest numbers)
// array.length > 2?
function findNumber(array) {
  if (array.length <= 2) return [];
  array.sort((a, b) => a - b);
  return [array[1], array[array.length - 2]];
}

console.log(findNumber([1, 2, 3, 4, 5]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
//i: number o: boolean(true if is perfect)
function perfectNumber(number) {
  return (
    [...Array(number).keys()]
      .slice(1)
      .filter((item) => number % item === 0)
      .reduce((acc, cur) => acc + cur) === number
  );
}

console.log(perfectNumber(6));
console.log(perfectNumber(8));
console.log(perfectNumber(28));
// 13. Write a JavaScript function to compute the factors of a positive integer.
//i: number o: array(factors of factors)
function factors(int) {
  return [...Array(int + 1).keys()].slice(1).filter((item) => int % item === 0);
}

console.log(factors(20));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
//i: number and array of number, o: array
//1: multiple combination??? or just one?
//2: array is sorted?
function amountToCoins(amount, array) {
  let output = [];
  array.sort((a, b) => b - a);
  for (let i = 0; i < array.length; i++) {
    let len = Math.floor(amount / array[i]);
    for (let j = 0; j < len; j++) {
      amount -= array[i];
      output.push(array[i]);
    }
  }
  return output;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of b^n where n is the exponent and b is the bases. Accept b and n from the user and display the result.
//i: number(bases) and number(exponent)
function exponent(bases, exponent) {
  // let result = 1;
  // if (bases === 1) return result;
  //   while(exponent > 0)  {
  //     result *= bases;
  //     exponent--;
  //   }
  //   return result;
  /* use reduce */
  return [...Array(exponent).fill(bases)].reduce((acc, cur) => acc * cur);
}

console.log(exponent(5, 3));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
// output:           "thequickbrownfxjmpsvlazydg";
//i: string, o: string(eliminate the duplicate character)
function unique(string) {
  // let map = new Map(), uni = '';
  // for (let char of string) {
  //   if (!map.has(char)) {
  //     map.set(char, 1);
  //     uni += char;
  //   }
  // }
  // return uni;

  /* use set */
  return [...new Set(string)].join("");
}

console.log(unique("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
//i: string, o: object(key: letter, value: occurrences)
//if the string is sentence, not sure if store the occurrences of the space, the function below will store the space frequency.
function occurrences(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  return obj;
}

console.log(occurrences("sentence"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// i: array of numbers, target: number.  output: index (array[index] === target)
function binarySearch(array, target) {
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] > target) right = mid - 1;
    if (array[mid] < target) left = mid + 1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// 19. Write a JavaScript function that returns array elements larger than a number.
// i: array of number, target; o: array of number(larger than target)
function largerNumber(array, target) {
  return array.filter((item) => item > target).sort((a, b) => a - b)[0];
}

console.log('19',largerNumber([2, 6, 8, , 3, 4, 5, 1, 3, 10], 3));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateId(length) {
  // let output = '';
  let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // for (let i = 0; i < length; i++) {
  //   output += list[Math.floor(Math.random() * list.length)];
  // }
  // return output;
// /* use reduce */
  return [...Array(length)].map(
    (item) => (item = list[Math.floor(Math.random() * list.length)])
  ).join('');
/* use forEach */
  // let  output = '';
  // [...Array(length)].forEach(
  //   (item) => {
  //     item = list[Math.floor(Math.random() * list.length)];
  //     output += item;
  // });
  // return output;
}

console.log(generateId(8));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
//input: [1, 2, 3, 4], 2 
// output : 
// [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 3],
//   [2, 4],
//   [3, 4],
//   [1, 2, 3],
//   [1, 2, 4],
//   [1, 3, 4],
//   [2, 3, 4],
//   [1, 2, 3, 4],
// ];
//i: array subset length; o: array of subsets
//constrain: Is order matter?

var subsetArr = function (array, len) {
  var helper = function (k, mutateArr, store) {
    if (k === 0) {
      results.push(store);
      return;
    }
    for (var j = 0; j < mutateArr.length; j++) {
      helper(k - 1, mutateArr.slice(j + 1), store.concat([mutateArr[j]]));
    }
  };
  var results = [];

  // for (var i = len; i < array.length; i++) {
    // helper(i, array, [], results);
  // }
  // results.push(array);
  helper(len, array, []);
  return results;
};
   


console.log(subsetArr([1, 2, 3, 4], 2));
//[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
//i: string target(string of letter) o; number(the number of occurrences)
function occurrencesOfLetter(string, target) {
  return string.split('').filter(item=>item===target).length;
}

console.log(occurrencesOfLetter('microsoft.com', 'o'))


// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
//i: string o: string(first and not repeated character)
//constrain: what if all letter has repeated character?
function firstNotRepeated(string) {
  let map = new Map();
  for (let char of string) {
    if(!map.has(char)) {
      map.set(char, true);
    } else {
      map.set(char, false);
    }
  }
  for(let char of string) {
    if (map.get(char)) return char;
  }
}

console.log(firstNotRepeated("abwacddbecf"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(array) {
  let isSort = true;
  while (isSort) {
    isSort = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSort = true;
      }
    }
  }
  return array;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
//i: array of strings o: string(longest length)
function longestCountry(array) {
  return array.sort((a,b)=>b.length - a.length)[0];
}

console.log(longestCountry(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
//'adacberdxaa' => acberdx
//i: string, o: string(substring with no repeating characters)
function longestNoRepeat(string) {
  let substring = '', temp = '';
  let map = new Map();
  for (let char of string) {
    if (!map.has(char)) {
      map.set(char, 1);
      temp += char;
    } else {
      if (temp.length > substring.length) {
        substring = temp;
      }
      temp = char;
      map.clear();
      map.set(char, 1);
    }
  }
  return substring;
}

console.log(longestNoRepeat("adacberddxaa"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
//i: string o: array of string(longest substrings are palindrome)
//use helper function above isPalindrome to determine if the substring is palindrome.
function longestPalindromeSubstring(s) {
  // let resultArr = [];
  // for (let i = 0; i < s.length - 1; i++) {
  //   for (let j = s.length - 1; j > i; j--) {
  //     if (s[i] === s[j] && isPalindrome(s.slice(i, j + 1)) && j + 1 - i !== s.length) {
  //       resultArr.push(s.slice(i, j + 1));
  //     }
  //   }
  // }
  // return resultArr.sort((a,b)=>b.length-a.length).filter(item=>item === resultArr[0]);
  let resultArr = [], maxLen = 0;;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j] && isPalindrome(s.slice(i, j + 1)) && j + 1 - i !== s.length) {
        if (maxLen < j + 1 - i) {
          maxLen = j + 1 - i;
          resultArr = [];
          resultArr.push(s.slice(i, j + 1));
        } else if (maxLen === j + 1 - i) {
          resultArr.push(s.slice(i, j + 1));
        }
      }
    }
  }
  return resultArr;
}

console.log(longestPalindromeSubstring("bananarrsbanana"));


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
const callback = (input) => {
  console.log(`This is ${input}!`)
}

function higherOrder(s, callback) {
  callback(s);
}

console.log(higherOrder('callback function', callback))

// 29. Write a JavaScript function to get the function name.

function functionName() {
  return arguments.callee.name;
}
console.log(functionName());
// 1. Write a JavaScript function that reverse a number.
//  Example x = 32243;Expected Output : 34223
function reverseNumber(num) {
  num = num + "";
  let str = num.split("");
  return str.reverse().join("");
}
// console.log(reverseNumber(233));

// 2. Write a JavaScript function that checks whether a passed string is
// palindrome or not? A palindrome is word, phrase,
// or sequence that reads the same backward as forward, e.g.,madam or nurses run.

function palindrome(str) {
  let newStr = str
    .split("")
    .filter((letter) => letter !== " ")
    .join("");
  let palindromeStr = newStr.split("").reverse().join("");
  let index = palindromeStr.length - 1;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== palindromeStr[index]) {
      return false;
    }
    index--;
  }
  return true;
}
// console.log(palindrome("go run"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog' Expected Output : d,do,dog,o,og,g
function strCombinations(str) {
  // create en empty arr to hold the res
  let res = [];
  for (let i = 0; i < str.length; i++) {
    // create a temp array that hold one char on each iteration
    let temp = [str[i]];
    // loop over the res of the word
    let index = 0;
    while (res[index]) {
      // check if the result has a string, if so push it to temp
      temp.push(res[index] + str[i]);
      index++;
    }
    res = res.concat(temp);
  }
  console.log(res.length);
  return res;
}

// console.log(strCombinations("dog"))

//4. Write a JavaScript function that returns a passed string with letters in
//  alphabetical order. Example string :
// 'webmaster' Expected Output :  'abeemrstw'
// Assume = punctuation and numbers  symbols are not included in the passed string

// convert the string to an array of its letters
// loop over it
// check the string if it only has letter
// filter the symbols or empty spaces
// if not, we don't do any operation over it
// sort it
// join

function strChecker(str) {
  return /^[a-zA-Z]+$/.test(str);
}
function alphabeticalOrder(str) {
  return [...str]
    .filter((char) => strChecker(char))
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

//String.prototype.localeCompare(another string)
// turn the letter into UTF-8 encoded
// console.log(alphabeticalOrder("webmaster99"));

// 5.Write a JavaScript function that accepts a string as a parameter
// and converts the first letter of each word of the string in upper case.
// Example string :
// 'the quick brown fox' Expected Output : 'The Quick Brown Fox '

function convertFirstLetterToUpperCase(str) {
  // convert the string into an array of words
  // loop over the word
  // convert first letter to uppercase
  // rejoin the string again

  return str.split(" ").reduce((acc, cur) => {
    return acc + cur.slice(0, 1).toUpperCase() + cur.slice(1) + " ";
  }, "");
}
// console.log(convertFirstLetterToUpperCase("my name is yasir"));

// 7.Write a JavaScript function that accepts a string as a parameter
// and find the longest word within the string. Example string :
// 'Web Development Tutorial' Expected Output : 'Development

function findLongestWord(str) {
  // convert the string into an array of its word
  // sort them in ascending order
  // return the last word
  let arr = str.split(" ").sort((a, b) => a.length - b.length);
  return arr[arr.length - 1];
}
// console.log(findLongestWord("hello my name is yasir whaaaaaat"));

// 7.Write a JavaScript function that accepts a string as a parameter
//  and counts the number of vowels within the string. Note :
// As the letter 'y' can be regarded as both a vowel and a consonant,
// we do not count 'y' as vowel here. Example string :
// 'The quick brown fox' Expected Output : 5

// vowel = [A, E, I, O, U]
function countVowels(str) {
  // convert the string into array of words
  // check each letter of each word
  // if letter in vowel
  // count ++
  let count = 0;
  let newStr = str.split(" ");
  let vowels = ["a", "e", "i", "o", "u"];
  let countLetter = {};
  for (let i = 0; i < newStr.length; i++) {
    let word = newStr[i].toLowerCase();
    for (let j = 0; j < word.length; j++) {
      if (countLetter[word[j]]) {
        countLetter[word[j]] += 1;
      } else {
        countLetter[word[j]] = 1;
      }
    }
  }
  for (let key of Object.keys(countLetter)) {
    if (vowels.indexOf(key) > 0) {
      count += countLetter[key];
    }
  }
  return count;
}
// console.log(countVowels("The quick brown fox"));

// 8.Write a JavaScript function that accepts a number as a parameter
// and check the number is prime or not.
// Note : A prime number (or a prime) is a natural
// number greater than 1 that has no positive divisors other than 1 and itself.
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
// console.log(isPrime(13));

// 9Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof
// returns: object, boolean, function, number,string, and undefined.

function returnType(obj) {
  return typeof obj;
}
// console.log("num", returnType(2));
// console.log("str", returnType("n"));
// console.log("bool", returnType(false));
// console.log("obj", returnType(null));
// console.log("undefined", returnType(undefined));
// console.log(
//   "func",
//   returnType(() => 5 + 4)
// );
// console.log("obj", returnType({ name: "yasir" }));

// 10.Write a JavaScript function which returns
// the n rows by n columns identity matrix.
// create an array of zeros, n length on each iteration
// inject 1 on each iteration

function matrix(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let arr = new Array(n).fill(0);
    arr[i] = 1;
    res.push(arr);
  }
  return res;
}
// console.log(matrix(3));
// console.log(matrix(4));

// 11.Write a JavaScript function which will take an array of numbers
//  stored and find the second lowest and second greatest numbers,
// respectively. Sample array : [1,2,3,4,5]Expected Output : 2,4
function findNumbers(arr) {
  // sort the array
  // return second position
  // return number before the last
  let newArr = arr.sort((a, b) => a - b);
  return [newArr[1], newArr[newArr.length - 2]];
}
// console.log(findNumbers([4, 1, 3, 0, -1, 10]));

// 12.Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer
// that is equal to the sum of its proper positive divisors, that is, the sum of
// its positive divisors excluding the number itself (also known as its aliquot sum).
//  Equivalently, a perfect number is a number that is half the sum of all of its positive
//  divisors (including itself).Example : The first perfect number is 6, because 1, 2,
//  and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
//  the number 6 is equal to half the sum of all its positive
//  divisors: ( 1+ 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
//   This is followed by the perfect numbers 496 and 8128.

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function foo1(num) {
  var array1 = Array.from(String(num), Number);
  return array1.reverse().join("");
}
console.log("solution 1 : " + foo1(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function foo2(input) {
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] !== input[input.length - 1 - i]) return false;
  }
  return true;
}
console.log("solution 2 : " + foo2("12321"));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function foo3(input) {
  var res = [];
  for (let i = 0; i < input.length; i++) {
    var str = "";
    for (let j = i; j < input.length; j++) {
      str += input[j];
      if (res.indexOf(str) == -1) res.push(str);
    }
  }
  return res;
}
console.log("solution 3 : " + foo3("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function foo4(input) {
  const str = [...input];
  return str.sort().join("");
}
console.log("solution 4 : " + foo4("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function foo5(input) {
  let ans = input.split(" ");
  // ans.forEach((union, i) => ans[i][0].toUpperCase());
  for (let i in ans) {
    ans[i] = ans[i][0].toUpperCase() + ans[i].substr(1);
  }
  return ans.join(" ");
}
console.log("solution 5 : " + foo5("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function foo6(input) {
  var max = 0;
  var index = -1;
  input = input.split(" ");
  input.forEach((item, i) => {
    index = item.length > max ? i : index;
    max = item.length > max ? item.length : max;
  });
  return input[index];
}
console.log("solution 6 : " + foo6("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
function foo7(input) {
  const vowels = ["a", "e", "i", "o", "u"];
  let res = 0;
  input
    .toLowerCase()
    .split("")
    .forEach((item) => {
      if (vowels.includes(item)) res += 1;
    });
  return res;
}
console.log("solution 7 : " + foo7("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function foo8(input) {
  for (let i = 2; i < input / 2; i++) {
    if (input % i == 0) return false;
  }
  return true;
}
console.log("solution 8 : " + foo8(37));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function foo9(input) {
  return typeof input;
}
console.log("solution 9 : " + foo9("the quick brown fox"));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function foo10(input) {
  let matrix = Array(input)
    .fill(0)
    .map((item) => Array(input).fill(0));
  for (let i = 0; i < input; i++) {
    matrix[i][i] = 1;
  }
  return matrix;
}
console.log("solution 10 : " + foo10(3));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
function foo11(input) {
  input = input.sort();
  return [input[1], input[input.length - 2]];
}
console.log("solution 11 : " + foo11([1, 2, 3, 4, 5]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function foo12(input) {
  let sum = 0;
  for (let i = 1; i <= input / 2; i++) {
    sum = input % i == 0 ? sum + i : sum;
  }
  if (sum == input) return true;
  return false;
}
console.log("solution 12 : " + foo12(496));

// 13. Write a JavaScript function to compute the factors of a positive integer.
function foo13(input) {
  let res = [];
  for (let i = 1; i <= input / 2; i++) {
    if (input % i == 0) res.push(i);
  }
  res.push(input);
  return res;
}
console.log("solution 13 : " + foo13(24));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
function foo14(amount, coins) {
  let res = [];
  for (let i = 0; amount > 0; i++) {
    if (amount >= coins[i]) {
      amount -= coins[i];
      res.push(coins[i]);
      i--;
    }
  }
  return res;
}
console.log("solution 14 : " + foo14(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function foo15(b, n) {
  return Math.pow(b, n);
}
console.log("solution 15 : " + foo15(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function foo16(input) {
  let res = [];
  input.split("").forEach((item) => {
    if (res.indexOf(item) == -1) res.push(item);
  });
  return res.join("");
}
console.log("solution 16 : " + foo16("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
function foo17(input) {
  const dictionary = {};
  for (let item of input) {
    dictionary[item] = item in dictionary ? dictionary[item] + 1 : 1;
    // if (!item in dictionary) dictionary[item] = 0;
    // dictionary[item] += 1;
  }
  // 3 lines below is way to show content in dictionary
  // for (let key in dictionary) {
  //   console.log(key + " : " + dictionary[key] + " times");
  // }
  return dictionary;
}
console.log("solution 17 : " + foo17("thequickbrownfoxjumpsoverthelazydog"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function foo18(target, input) {
  input = input.sort();
  var left = 0,
    right = input.length - 1,
    mid = Math.floor((right + left + 1) / 2);
  while (input[mid] !== target) {
    if (input[mid] > target) {
      right = mid;
      mid = Math.floor((right + left + 1) / 2);
    } else {
      left = mid;
      mid = Math.floor((right + left + 1) / 2);
    }
  }
  return mid;
}
console.log("solution 18 : " + foo18(6, [1, 3, 8, 6, 5, 9]));

// 19. Write a JavaScript function that returns array elements larger than a number.
function foo19(target, input) {
  return input.filter((item) => item > target);
}
console.log("solution 19 : " + foo19(5, [1, 3, 8, 6, 5, 9]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function foo20(input) {
  return "Undone";
}
console.log("solution 20 : " + foo20(5, [1, 3, 8, 6, 5, 9]));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function foo21(input, len, start = 0) {
  // var res = [];
  // var cur = "";
  // if (start >= input.length) return;
  // var list = foo21(input, len, start + 1);
  // list.map((item) => res.push(cur + item));
  // cur = input(start);
  // list = foo21(input, len - 1, start + 1);
  // list.map((item) => res.push(cur + item));
  // return res;
  return "Undone";
}
console.log("solution 21 : " + foo21([1, 3, 8, 6, 5, 9], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
function foo22(input, target) {
  var res = 0;
  input = input.split("");
  input.forEach((item) => (res = item == target ? res + 1 : res));
  return res;
}
console.log("solution 22 : " + foo22("microsoft.com", "o"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
function foo23(input) {
  var res;
  // for (let i = 0; i < input.length; i++) {
  //   var item = input.charAt(i);
  //   if (input.indexOf(item) == i && input.indexOf(item, i + 1) == -1) {
  //     res = item;
  //   }
  // }
  input.split("").forEach((item, index) => {
    if (input.indexOf(item) == index && input.indexOf(item, index + 1) == -1) {
      res = item;
    }
  });
  return res;
}
console.log("solution 23 : " + foo23("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function foo24(input) {
  var flag = true;
  while (flag) {
    flag = false;
    for (var index = 1; index < input.length; index++)
      if (input[index - 1] < input[index]) {
        var oper = input[index - 1];
        input[index - 1] = input[index];
        input[index] = oper;
        flag = true;
      }
  }
  return input;
}
console.log(
  "solution 24 : " +
    foo24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function foo25(input) {
  var max = 0,
    res;
  input.forEach((item) => {
    if (item.length > max) {
      max = item.length;
      res = item;
    }
  });
  return res;
}
console.log(
  "solution 25 : " + foo25(["Australia", "Germany", "United States of America"])
);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function foo28(fn, arg) {
  return "Now we are running function1 and result is " + fn(arg);
}
console.log("solution 28 : " + foo28(foo1, [32243]));

// 29. Write a JavaScript function to get the function name.
function foo29(input) {
  return input.name;
}
console.log("solution 29 : " + foo29(foo2));

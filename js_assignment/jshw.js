// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;Expected Output : 34223

function reverse(x) {
  return x
    .toString()
    .split("")
    .reverse()
    .reduce((acc, cur) => {
      if (cur === "-") return -acc;
      else return acc * 10 + cur * 1;
    });
}

function reverse2(x) {
  return parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);
}

console.log(reverse(32243)); //34223
console.log(reverse(-32243)); //-34223

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward,
// e.g.,madam or nurses run.

function palindrome(x) {
  return x.split("").reverse().join("") === x;
}

console.log(palindrome("saasd")); //false
console.log(palindrome("qwerewq")); //true

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog' Expected Output : d,do,dog,o,og,g
function combinations(x) {
  let chars = x.split("");
  let res = [];
  for (let i = 1; i <= x.length; i++) {
    combi(res, [], chars, 0, i);
  }
}

function combi(ans, word, chars, pos, goal) {
  if (word.length === goal) {
    ans.push(word.join(""));
    return;
  }

  for (let i = pos; i < chars.length; i++) {
    word.push(chars[i]);
    combi(ans, word, chars, i + 1, goal);
    word.pop();
  }
}

console.log(combinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster' Expected Output : 'abeemrstw'Assume punctuation and numbers
// symbols are not included in the passed string.
function sort(x) {
  return x.split("").sort().join("");
}
console.log(sort("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first
// letter ofeach word of the string in upper case. Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// string is unahangable in js

function upper(x) {
  return x
    .split(" ")
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
}
console.log(upper("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin
// the string. Example string : 'Web Development Tutorial' Expected Output : 'Development'
function longestWord(x) {
  return x.split(" ").reduce((acc, cur) => {
    return acc.length > cur.length ? acc : cur;
  });
}

console.log(longestWord("Web Development Tutorial"));
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels
// within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant,
// we do not count 'y' asvowel here. Example string : 'The quick brown fox' Expected Output : 5
function numOfVowels(x) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < x.length; i++) {
    if (vowels.indexOf(x[i]) !== -1) {
      count++;
    }
  }
  return count;
}

console.log(numOfVowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors
// other than 1 and itself.

function isPrime(x) {
  if (x === 1) {
    return false;
  } else if (x === 2 || x === 3) {
    return true;
  }
  let sqrtx = Math.sqrt(x);
  for (let i = 2; i <= sqrtx; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(131));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number,string,
// and undefined.
function myTypeOf(x) {
  return Object.prototype.toString
    .call(x)
    .split(/[ ''\[\]]+/)
    .filter((s) => s)
    .pop();
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
  let row = [];
  let res = [];
  for (let i = 0; i < n; i++) {
    row.push(0);
  }
  for (let i = 0; i < n; i++) {
    res.push([...row]);
    res[i][i] = 1;
  }
  return res;
}

console.log(identityMatrix(10));

// 11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest
// and second greatest numbers, respectively. Sample array : [1,2,3,4,5]Expected Output : 2,4
function swap(a, b) {
  let tmp = a;
  a = b;
  b = tmp;
}

function min2max2(arr) {
  let a = find(arr, 0, arr.length - 1, 2);
  let b = find(arr, 0, arr.length - 1, arr.length - 1);
  return [a, b];
}

function find(arr, start, end, k) {
  let l = start + 1;
  let r = end;

  while (l < r) {
    while (l < end && arr[l] <= arr[start]) {
      l++;
    }
    while (r > start && arr[r] >= arr[start]) {
      r--;
    }
    if (l < r) {
      swap(arr[l], arr[r]);
    }
  }
  swap(arr[start], arr[r]);
  if (r - start + 1 == k) {
    return arr[r];
  } else if (r - start + 1 < k) {
    return find(arr, r + 1, end, k - r + start - 1);
  } else if (r - start + 1 > k) {
    return find(arr, start, r - 1, k);
  }
  // js requires to return recursive function, undefined otherwise.
}

console.log(min2max2([1, 2, 3, 4, 5]));

// 12. Write a JavaScript function which says whether a number is perfect. According to Wikipedia :
// In number theory, a perfect number is a positive integer that is equal tothe sum of its proper positive
// divisors, that is, the sum of its positive divisors excluding thenumber itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that ishalf the sum of all of its
// positive divisors (including itself).Example : The first perfect number is 6,
// because 1, 2, and 3 are its proper positive divisors, and1 + 2 + 3 = 6. Equivalently,
// the number 6 is equal to half the sum of all its positive divisors: ( 1+ 2 + 3 + 6 ) / 2 = 6.
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed bythe perfect numbers 496
// and 8128.
function isPerfect(x) {
  let sum = 1;
  let sqrtx = Math.sqrt(x);
  for (let i = 2; i <= sqrtx; i++) {
    if (x % i === 0) {
      sum += i;
      sum += x / i;
    }
  }
  return sum === x;
}

console.log(isPerfect(8128));

// 13. Write a JavaScript function to compute the factors of a positive integer.
function findFactors(x) {
  let factors = [];

  for (let i = 1; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      factors.push(i);
      if (x / i !== i) {
        factors.push(x / i);
      }
    }
  }
  return factors.sort(function (x, y) {
    return x - y;
  });
}

console.log(findFactors(8128));

// 14. Write a JavaScript function to convert an amount to coins. Sample function :
// amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

function coins(amount, coins) {
  let res = [];
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < amount / coins[i]; j++) {
      res.push(coins[i]);
      amount -= coins[i];
    }
  }
  return res;
}

console.log(coins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b
// is thebases. Accept b and n from the user and display the result.

function myPow(base, exp) {
  let res = 1;
  if ((exp & 1) === 1) {
    res *= base;
    exp--;
  }

  if (exp === 0) return res;
  else return res * myPow(base * base, exp / 2);
}

console.log(myPow(2, 10));

// 16. Write a JavaScript function to extract unique characters from a string. Example string
// : "thequickbrownfoxjumpsoverthelazydog"Expected Output : "thequickbrownfxjmpsvlazydg"

function uniqueChar(str) {
  let charMap = {};
  let res = [];
  str.split("").forEach((c) => {
    if (charMap.hasOwnProperty(c)) charMap[c]++;
    else charMap[c] = 1;
  });

  for (key in charMap) {
    res.push(key);
  }

  return res.join("");
}

console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.

function numOfChar(str) {
  let charMap = {};
  let res = [];
  str.split("").forEach((c) => {
    if (charMap.hasOwnProperty(c)) charMap[c]++;
    else charMap[c] = 1;
  });

  return Object.entries(charMap);
}

console.log(numOfChar("thequickbrownfoxjumpsoverthelazydog"));

// 18. Write a function for searching JavaScript arrays with a binary search. Note :
// A binary search searches by splitting an array into smaller and smaller chunks until it
// findsthe desired value.

function binarySearch(arr, target) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    let mid = Math.round((l + r) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      r = mid - 1;
    } else if (target > arr[mid]) {
      l = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));

// 19. Write a JavaScript function that returns array elements larger than a number.
function greaterThan(arr, target) {
  return arr.filter((item) => {
    return item > target;
  });
}
// 20. Write a JavaScript function that generates a string id (specified length) of random
// characters.Samplecharacterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateId(len) {
  var res = [];
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < len; i++) {
    res.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  return res.join("");
}
console.log(generateId(10));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function subset(arr, len) {
  let res = [];
  combi2(res, [], arr, 0, len);
  return res;
}

function combi2(ans, tmpset, arr, pos, goal) {
  if (tmpset.length === goal) {
    // tmpset passed by ref, which will be popped out.
    ans.push([...tmpset]);
    return;
  }

  for (let i = pos; i < arr.length; i++) {
    tmpset.push(arr[i]);
    combi2(ans, tmpset, arr, i + 1, goal);
    tmpset.pop();
  }
}

console.log(subset([1, 2, 3, 4], 2));

// 22. Write a JavaScript function that accepts two arguments,
// a string and a letter and the functionwill count the number of occurrences of the
// specified letter within the string. Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
function countChar(str, char) {
  let charMap = {};
  let res = [];
  str.split("").forEach((c) => {
    if (charMap.hasOwnProperty(c)) charMap[c]++;
    else charMap[c] = 1;
  });

  return charMap[char];
}

console.log(countChar("microsoft.com", "o"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec' Expected output : 'e'
function notRepeat(str) {
  let charMap = {};
  let res = [];
  str.split("").forEach((c) => {
    if (charMap.hasOwnProperty(c)) {
      charMap[c]++;
    } else {
      charMap[c] = 0;
      res.push(c);
    }
  });

  for (key in charMap) {
    if (charMap[key] !== 0) res.splice(res.indexOf(key), 1);
  }

  return res[0];
}

console.log(notRepeat("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort,
// is a simplesorting algorithm that works by repeatedly stepping through the list to be sorted,
// comparingeach pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] < arr[j]) {
        let tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
      }
    }
    console.log(arr);
  }
  return arr;
}

console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

// 25. Write a JavaScript function that accept a list of country names as input and
// returns thelongest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function longestName(countries) {
  return countries.reduce(function (acc, cur) {
    return acc.length > cur.length ? acc : cur;
  }, "");
}

console.log(longestName(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstring(str) {
  let strArr = str.split("");
  let charMap = {};
  let l = 0,
    r = 0;
  let maxl = 0,
    maxs = "" + strArr[0];

  for (r = 0; r < strArr.length; r++) {
    while (charMap.hasOwnProperty(strArr[r]) && charMap[strArr[r]] !== -1) {
      charMap[strArr[l]] = -1;
      l++;
    }
    charMap[strArr[r]] = r;

    if (r - l + 1 > maxl) {
      maxl = r - l + 1;
      maxs = strArr.slice(l, r + 1);
    }
  }
  return maxs.join("");
}
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("bbbbb"));
// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or
// longestsymmetric factor problem is the problem of finding a maximum-length contiguous substring
// of agiven string that is also a palindrome. For example, the longest palindromic substring
// of"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique;
// forexample, in the string "abracadabra", there is no palindromic substring with length greater
// thanthree, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic
// substrings (that is, allsubstrings that are themselves palindromes and cannot be extended
// to larger palindromicsubstrings) rather than returning only one substring or returning
// the maximum length of apalindromic substring.
function longestPalindromicSubstring(str) {
  let strArr = str.split("");
  let res = [];
  let dp = new Array(strArr.length);
  for (let i = 0; i < strArr.length; i++) {
    dp[i] = new Array(strArr.length).fill(false);
    dp[i][i] = true;
    res.push([...strArr[i]]);
  }

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 1; j < strArr.length / 2; j++) {
      if (i - j >= 0 && i + j < strArr.length) {
        dp[i - j][i + j] =
          dp[i - j + 1][i + j - 1] && strArr[i - j] === strArr[i + j];
        if (dp[i - j][i + j])
          res.push([...strArr.slice(i - j, i + j + 1)].join(""));
      }
    }
  }
  return longestName(res);
}
console.log(longestPalindromicSubstring("bananas"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function foo(callback) {
  let rnd = Math.random() * 10;
  if (rnd > 5) callback(rnd);
}

function print(text) {
  console.log("success!", text);
}

foo(print);
// 29. Write a JavaScript function to get the function name.

function foo() {
  console.log(arguments.callee.name);
}
foo();

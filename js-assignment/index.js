// 1. Write a JavaScript function that reverse a number. Example x = 32243;Expected Output : 34223 
const reverseNum = (num) => {
    let str = num + '';
    let reverseStr = str.split('').reverse().join('');
    return Number(reverseStr);
}

let res1 = reverseNum(12345);
console.log('Answer of Question 1, reverseNum ===>', res1);

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run.
const checkPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
            continue;
        }
        else return false;
    }
    return true;
}

let res2 = checkPalindrome('nurses');
console.log('Answer of Question 2-1, checkPalindrome ===>', res2);
let res202 = checkPalindrome('madam');
console.log('Answer of Question 2-2, checkPalindrome ===>', res202);

// 3. Write a JavaScript function that generates all combinations of a string. Example string : 'dog' Expected Output : d,do,dog,o,og,g 
const combination = (str) => {

}

let res3 = combination('nurses');
console.log('Answer of Question 3, combination ===>', res3);

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string : 'webmaster' Expected Output : 'abeemrstw'Assume punctuation and numbers symbols are not included in the passed string.
const sortOrder = (str) => {
    return str.split('').sort().join('');
}

let res4 = sortOrder('webmaster');
console.log('Answer of Question 4, sortOrder ===>', res4);

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '
const firstLetterToUpperCase = (str) => {
    let res = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') res = res + str[i].toUpperCase();
        else res = res + str[i];
    }
    return res;
}

let res5 = firstLetterToUpperCase('the quick brown fox');
console.log('Answer of Question 5, firstLetterToUpperCase ===>', res5);

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. Example string : 'Web Development Tutorial' Expected Output : 'Development'
const findLongestWord = (str) => {
    let res = '';
    let arr = str.split(' ');

    for (let word of arr) {
        if (word.length > res.length) res = word;
    }
    return res;
}

let res6 = findLongestWord('the quickest brown fox');
console.log('Answer of Question 6, findLongestWord ===>', res6);

//7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here. Example string : 'The quick brown fox' Expected Output : 5
const countVowels = (str) => {
    let res = 0;
    let vowelStr = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        if (vowelStr.includes(str[i])) res++;
    }
    return res;
}

let res7 = countVowels('the quickest brown fox');
console.log('Answer of Question 7, countVowels ===>', res7);

//8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not. Note : A prime number (or a prime) is a natural number greater than 1 that has no positivedivisors other than 1 and itself.
const isPrime = (num) => {

}

let res8 = isPrime(13);
console.log('Answer of Question 8, isPrime ===>', res8);

//9. Write a JavaScript function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number,string, and undefined.
const checkType = (param) => {
    return typeof (param);
}

let res9 = checkType(13);
console.log('Answer of Question 9-1, checkType ===>', res9);
let res92 = checkType('str');
console.log('Answer of Question 9-2, checkType ===>', res92);
let res93 = checkType({ key: 1 });
console.log('Answer of Question 9-3, checkType ===>', res93);
let res94 = checkType(undefined);
console.log('Answer of Question 9-4, checkType ===>', res94);
let res95 = checkType(true);
console.log('Answer of Question 9-5, checkType ===>', res95);
let res96 = checkType(isPrime);
console.log('Answer of Question 9-6, checkType ===>', res96);

//10. Write a JavaScript function which returns the n rows by n columns identity matrix
const identityMatrix = (num) => {
    let ans = [];
    for (let i = 0; i < num; i++) {
        let arr = new Array(num).fill(0);
        arr[i] = 1;
        ans.push(arr);
    }
    return ans;
}

let res10 = identityMatrix(5);
console.log('Answer of Question 10, identityMatrix ===>', res10);

// 11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5]Expected Output : 2,4 
const secondLowestAndGreatest = (arr) => {

}

let res11 = secondLowestAndGreatest([1, 1, 2, 2, 2, 4, 4, 4, 5, 6, 6]);
console.log('Answer of Question 11, secondLowestAndGreatest ===>', res11);

// 12. Write a JavaScript function which says whether a number is perfect. According to Wikipedia : In number theory, a perfect number is a positive integer that is equal tothe sum of its proper positive divisors, that is, the sum of its positive divisors excluding thenumber itself (also known as its aliquot sum). Equivalently, a perfect number is a number that ishalf the sum of all of its positive divisors (including itself).Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1+ 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed bythe perfect numbers 496 and 8128.
const perfectNum = (num) => {

}

let res12 = perfectNum(22);
console.log('Answer of Question 12, perfectNum ===>', res12);

//13. Write a JavaScript function to compute the factors of a positive integer.
const computeFacotrs = (num) => {

}

let res13 = computeFacotrs(22);
console.log('Answer of Question 13, computeFacotrs ===>', res13);

//14. Write a JavaScript function to convert an amount to coins. Sample function : amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1
const amountToCoins = (amount, coins) => {

}

let res14 = amountToCoins(46, [25, 10, 5, 2, 1]);
console.log('Answer of Question 14, amountToCoins ===>', res14);

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. Accept b and n from the user and display the result. 
const exp = (base, exponent) => {
    let ans = base;
    for (let i = 1; i < exponent; i++) {
        ans = ans * base;
    }
    return ans;
}

let res15 = exp(2, 3);
console.log('Answer of Question 15, exp ===>', res15);

//16. Write a JavaScript function to extract unique characters from a string. Example string : "thequickbrownfoxjumpsoverthelazydog"Expected Output : "thequickbrownfxjmpsvlazydg"
const uniqueChar = (str) => {
    let ans = '';
    let set = new Set();
    for (let char of str) {
        if (!set.has(char)) {
            set.add(char);
            ans += char;
        }
    }
    return ans;
}

let res16 = uniqueChar("thequickbrownfoxjumpsoverthelazydog");
console.log('Answer of Question 16, uniqueChar ===>', res16);

//17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring. 
const numberOfLetter = (str) => {
    let ans = {};
    for (let char of str) {
        if (!ans[char]) ans[char] = 1;
        else ans[char]++;
    }
    return ans;
}

let res17 = numberOfLetter("harrypotter");
console.log('Answer of Question 17, numberOfLetter ===>', res17);

//18. Write a function for searching JavaScript arrays with a binary search. Note : A binary search searches by splitting an array into smaller and smaller chunks until it findsthe desired value.
const binarySearch = (str) => {

}

let res18 = binarySearch();
console.log('Answer of Question 18, binarySearch ===>', res18);

//19. Write a JavaScript function that returns array elements larger than a number. 
const largerElements = (arr, target) => {
    return arr.filter(x => x > target);
}

let res19 = largerElements([1, 2, 3, 4, 5, 6], 3);
console.log('Answer of Question 19, largerElements ===>', res19);

//20. Write a JavaScript function that generates a string id (specified length) of random characters.Samplecharacterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const generateId = (length) => {

}

let res20 = generateId(10);
console.log('Answer of Question 20, generateId ===>', res20);

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array. Sample array : [1, 2, 3] and subset length is 2 Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
const arraySubnets = (arr) => {

}

let res21 = arraySubnets();
console.log('Answer of Question 21, arraySubnets ===>', res21);

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string
//Sample arguments : 'microsoft.com', 'o' Expected output : 3
const countOccurrences = (str, letter) => {
    let res = 0;
    for (let char of str) {
        if (char === letter) res++;
    }
    return res;
}

let res22 = countOccurrences('microsoft.com', 'o');
console.log('Answer of Question 22, countOccurrences ===>', res22);

//23. Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e' 
const firstUnique = (str) => {
    let ans = '';
    let set = new Set();
    for (let char of str) {
        if (!set.has(char)) {
            ans = char;
            set.add(char);
        }
    }
    return ans;
}

let res23 = firstUnique('abacddbec');
console.log('Answer of Question 23, firstUnique ===>', res23);

//24. Write a JavaScript function to apply Bubble Sort algorithm. Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simplesorting algorithm that works by repeatedly stepping through the list to be sorted, comparingeach pair of adjacent items and swapping them if they are in the wrong order". Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubbleSort = (str) => {

}

let res24 = bubbleSort();
console.log('Answer of Question 24, bubbleSort ===>', res24);

//25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output. Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output : "United States of America"
const longestCountryName = (arr) => {
    let ans = '';
    for (let country of arr) {
        if (country.length > ans.length) ans = country;
    }
    return ans;
}

let res25 = longestCountryName(["Australia", "Germany", "United States of America"]);
console.log('Answer of Question 25, longestCountryName ===>', res25);

//26. Write a JavaScript function to find longest substring in a given a string without repeatingcharacters. 
const longestSubstring = (arr) => {

}

let res26 = longestSubstring();
console.log('Answer of Question 26, longestSubstring ===>', res26);

//27. Write a JavaScript function that returns the longest palindrome in a given string. Note: According to Wikipedia "In computer science, the longest palindromic substring or longestsymmetric factor problem is the problem of finding a maximum-length contiguous substring of agiven string that is also a palindrome. For example, the longest palindromic substring of"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; forexample, in the string "abracadabra", there is no palindromic substring with length greater thanthree, but there are two palindromic substrings with length three, namely, "aca" and "ada".In some applications it may be necessary to return all maximal palindromic substrings (that is, allsubstrings that are themselves palindromes and cannot be extended to larger palindromicsubstrings) rather than returning only one substring or returning the maximum length of apalindromic substring.
const longestPalindrome = (arr) => {

}

let res27 = longestPalindrome();
console.log('Answer of Question 27, longestPalindrome ===>', res27);

//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
const outerFn = (cb) => {
    return cb(["Australia", "Germany", "United States of America"]);
}

let res28 = outerFn(longestCountryName);
console.log('Answer of Question 28, outerFn ===>', res28);

//29. Write a JavaScript function to get the function name.
function getFunctionName() {
    return arguments.callee.name;
}

let res29 = getFunctionName();
console.log('Answer of Question 29, getFunctionName ===>', res29);
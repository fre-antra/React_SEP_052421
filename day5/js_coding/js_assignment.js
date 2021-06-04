// JavaScript Assignment

// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 
function reverseNumber(number) {
    return Number(number.toString().split("").reverse().join(""));
}
console.log("test function 1: ", reverseNumber(32243));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(string) {
    let start = 0;
    let end = string.length - 1;
    while (start < end) {
        if (string.charAt(start) == " ") start++;
        if (string.charAt(end) == " ") end--;
        if (string.charAt(start) != string.charAt(end)) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
}
console.log("test function 2: ", isPalindrome("madam"));
console.log("test function 2: ", isPalindrome("nurses run"));
console.log("test function 2: ", isPalindrome("nursessrun"));


// 3. Write a JavaScript function that generates all substrings. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 
function generateSubstr(string) {
    let output = [];
    let endPos = string.length;
    for (let startPos = 0; startPos < string.length; startPos++) {
        while (startPos < endPos) {
            output.push(string.slice(startPos, endPos))
            endPos--;
        }
        endPos = string.length;
    }
    return output;
}
console.log("test function 3: ", generateSubstr("dog"));
console.log("test function 3: ", generateSubstr("abc"));


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortString(string) {
    return string.split("").sort().join("");
}
console.log("test function 4: ", sortString("webmaster"));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
function upperFirstLetter(string) {
    return string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}
console.log("test function 5: ", upperFirstLetter("the quick brown fox"));


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
function findLongestWord(string) {
    let strArray = string.split(" ");
    let maxLength = 0;
    let returnWord = "";
    for (let word of strArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            returnWord = word;
        }
    }
    return returnWord;
}
console.log("test function 6: ", findLongestWord("the quick brown fox"));
console.log("test function 6: ", findLongestWord("Web Development Tutorial"));


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
function countVowel(string) {
    let counter = 0;
    let vowels = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
    for (let i = 0; i < string.length; i++) {
        if (string[i] in vowels || string[i].toLowerCase() in vowels) {
            vowels[string[i]]++;
            counter++;
        }
    }
    // console.log(vowels);
    return counter;
}
console.log("test function 7: ", countVowel("the quick brown fox"));
console.log("test function 7: ", countVowel("thE qUIck brOwn fOx"));
console.log("test function 7: ", countVowel("   aaeeiouiouAEIOU"));


// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(number) {
    for (let i = 2; i < number; ++i) {
        if (number % i === 0) return false;
    }
    return number > 1;
}
console.log("test function 8: ", isPrime(2));
console.log("test function 8: ", isPrime(181));
console.log("test function 8: ", isPrime(182));


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function myTypeof(arg) {
    return typeof arg;
}
console.log("test function 9: ", myTypeof({}));
console.log("test function 9: ", myTypeof(true));
console.log("test function 9: ", myTypeof(isPrime));
console.log("test function 9: ", myTypeof(2));
console.log("test function 9: ", myTypeof("str"));
console.log("test function 9: ", myTypeof(undefined));


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMat(n) {
    let row = [];
    let result = [];
    let rowIdx = 0;
    while (rowIdx < n) {
        for (let i = 0; i < n; i++) {
            if (i == rowIdx) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        result.push(row);
        rowIdx++;
        row = [];
    }
    return result;
}
console.log("test function 10: ", identityMat(1));
console.log("test function 10: ", identityMat(5));


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function findSecondMinMax(array) {
    array.sort((a, b) => { return a - b });
    return [array[1], array[array.length - 2]];
}
console.log("test function 11: ", findSecondMinMax([1, 2, 3, 4, 5]));


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function isPerfectNum(number) {
    let divisorSum = 0;
    for (let i = 1; i < number; ++i) {
        if (number % i === 0) divisorSum += i;
    }
    return number == divisorSum;
}
console.log("test function 12: ", isPerfectNum(6));
console.log("test function 12: ", isPerfectNum(28));
console.log("test function 12: ", isPerfectNum(496));


// 13. Write a JavaScript function to compute the factors of a positive integer. 
function findFactors(number) {
    let factors = [];
    for (let i = 1; i < number; ++i) {
        if (number % i === 0) factors.push(i);
    }
    return factors;
}
console.log("test function 13: ", findFactors(6));
console.log("test function 13: ", findFactors(28));
console.log("test function 13: ", findFactors(496));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function amountTocoins(target, coins) {
    let output = [];
    coins.sort((a, b) => { return (b - a) });
    for (let coin of coins) {
        let num = Math.floor(target / coin);
        for (let i = 0; i < num; i++) {
            output.push(coin);
            target -= coin;
        }
    }
    return output;
}
console.log("test function 14: ", amountTocoins(46, [25, 10, 5, 2, 1]));
console.log("test function 14: ", amountTocoins(48, [25, 10, 5, 2, 1]));
console.log("test function 14: ", amountTocoins(56, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exp() {
    let base = prompt("Please enter base value: ");
    let exponent = prompt("Please entet exponent: ");
    if (base !== null && exponent !== null) {
        alert("value of b^n is: " + (Number(base) ** Number(exponent)).toString());
    }
}
// exp();

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function getUniqueChar(string) {
    return [...new Set(string.split(""))].join("");
}
console.log("test function 16: ", getUniqueChar("thequickbrownfoxjumpsoverthelazydog"));


// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function countOccurrences(string) {
    let dictionary = {};
    for (let char of string.split("")) {
        if (!(char in dictionary)) {
            dictionary[char] = 1;
        } else {
            dictionary[char] += 1;
        }
    }
    return dictionary;
}
console.log("test function 17: ", countOccurrences("thequickbrownfoxjumpsoverthelazydog"));
console.log("test function 17: ", countOccurrences(getUniqueChar("thequickbrownfoxjumpsoverthelazydog")));


// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function BinarySearch(array, target) {
    array.sort((a, b) => { return (a - b) });
    let start = 0, end = array.length;
    let mid = 0;
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (array[mid] === target) return mid;
        if (array[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
console.log("test function 18: ", BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log("test function 18: ", BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log("test function 18: ", BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
console.log("test function 18: ", BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
console.log("test function 18: ", BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));


// 19. Write a JavaScript function that returns array elements larger than a number. 
function findLargerElements(array, value) {
    return array.filter((a) => { return a > value });
}
console.log("test function 19: ", findLargerElements([1, 2, 3, 4, 5, 6, 7, 8, 9], -1));
console.log("test function 19: ", findLargerElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log("test function 19: ", findLargerElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log("test function 19: ", findLargerElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
console.log("test function 19: ", findLargerElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateID(n) {
    let result = [];
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < n; i++) {
        result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
    }
    return result.join('');
}
console.log("test function 20: ", generateID(5));


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2]]
function getSubsets(array, n) {
    let output = [[]];
    for (let i = 0; i < array.length; i++) {
        let numSubsets = output.length;
        for (let j = 0; j < numSubsets; j++) {
            output.push(output[j].concat(array[i]));
        }
    }
    return output.filter((e) => e.length >= n);
}
console.log("test function 21: ", getSubsets([1,2,3], 2));


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function countCharOccurrences(string, target){
    let counter = 0;
    for (let char of string){
        if (char === target || char.toUpperCase() === target) counter++;
    }
    return counter;
}
console.log("test function 22: ", countCharOccurrences('micrOsOft.com', 'O'));


// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
function findFirstUnique(string){
    let dict = {};
    for (let char of string){
        if (char in dict){
            dict[char]++;
        }else{
            dict[char] = 1;
        }
    }
    for(let char of string){
        if (dict[char] === 1) return char;
    }
    return null;
}
console.log("test function 23: ", findFirstUnique('micrOsOft.com', '.'));
console.log("test function 23: ", findFirstUnique('abacddbec', 'e'));


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(array){
    let isSorted = false, counter = 0;
    while (!isSorted){
        isSorted = true;
        for (let i = 0; i < array.length-1-counter; i++){
            if (array[i] < array[i + 1]){
               let temp = array[i + 1];
               array[i + 1] = array[i];
               array[i] = temp;
               isSorted = false; 
            }
        }
        counter++;
    }
    return array;
}
console.log("test function 24: ", bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function Longest_Country_Name(countries){
    countries.sort((a, b) => {return b.length - a.length});
    return countries[0];
}
console.log("test function 25: ", Longest_Country_Name(["Australia", "Germany", "United States of America"]));


// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function findLongestUniqueSubstr(string){
    let substr = [], start = 0, end = 0;
    while (end < string.length){
        let tempDict = {};
        while (!(string[end] in tempDict)){
            tempDict[string[end]] = 1;
            end++;
        }
        substr.push(string.slice(start, end));
        start = end;
    }
    substr.sort((a, b) => {return b.length - a.length});
    return substr[0];
}
console.log("test function 26: ", findLongestUniqueSubstr("United States of America"));
console.log("test function 26: ", findLongestUniqueSubstr("Germany"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

function findLongestPalindrom(string){
    let currLongest = [0,1];
    for (let i = 1; i < string.length; i++){
        const odd = getLongestPalindromFrom(string, i - 1, i + 1);
        const even = getLongestPalindromFrom(string, i - 1, i);
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        currLongest = currLongest[1] - currLongest[0] > longest[1] - longest[0] ? currLongest : longest; 
    }
    return string.slice(currLongest[0], currLongest[1]);
}
function getLongestPalindromFrom(string, leftIdx, rightIdx){
    while (leftIdx > 0 && rightIdx < string.length){
        if (string[leftIdx] !== string[rightIdx]) break;
        leftIdx--;
        rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
}
console.log("test function 27: ", findLongestPalindrom("abracadabra"));
console.log("test function 27: ", findLongestPalindrom("bananas"));


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function jsFunc(cb, ...args){
    return cb(...args);
}
console.log("test function 28: ", jsFunc(findLongestPalindrom, "bananas"));

// 29. Write a JavaScript function to get the function name. 
function getFuncName(func){return func.name;}
console.log("test function 29: ", getFuncName(findLongestPalindrom));
// 1. Write a JavaScript function that reverse a number. Example x = 32243;Expected Output : 34223 
function reverseNum(x) {
    let res = [];
    let counter = 0;
    x = x.toString().split('');

    for (let i = x.length - 1; i >= 0; i--) {
        res[counter] = x[i];
        counter++;
    }

    return res.join("")
}

console.log(reverseNum(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run.
function isPalindrome(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[input.length - i - 1]) {
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("madam"));


// 3. Write a JavaScript function that generates all combinations of a string. Example string : 'dog' Expected Output : d,do,dog,o,og,g 
function combinationString(input) {
    let res = [];
    let index = 0;

    for (let i = 0; i < input.length; i++) {

        res[index++] = input[i];

        for (let j = i + 1; j < input.length; j++) {
            res[index++] = input.slice(i, j + 1);
        };
    }
    return res.join(",");
}
console.log(combinationString('dog'));


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string : 'webmaster' Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sortLetters(input) {
    return input.split('').sort().join('');
};
console.log(sortLetters("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '
function upperCase(input) {
    input = input.split(" ");
    let res = [];

    for (let elem in input) {
        elem = elem[0].toUpperCase() + elem.slice(1);
        res.push(elem);
    }
    return res.join(" ");
}
console.log(upperCase('the quick brown fox'));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Example string : 'Web Development Tutorial' Expected Output : 'Development'
function longestWord(input) {
    input = input.split(" ");
    let res = "";
    let max = 0;
    for (let elem in input) {
        if (elem.length > max) {
            res = elem;
            max = elem.length;
        }
    }
    return res;
}
console.log(longestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string : 'The quick brown fox' Expected Output : 5
function countVowels(input) {
    input = input.toLowerCase();
    let count = 0;

    for (let elem in input) {
        if (elem == 'a' || elem == 'e' || elem == 'i' || elem == 'o' || elem == 'u') count++;
    }
    return count;
}
console.log(countVowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(input) {
    if (input < 2) return false;
    for (let i = 2; i * 2 <= input; i++) {
        if (input % i == 0) return false;
    }
    return true;
}
console.log(isPrime(12));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number,string, and undefined.
function returnType(input) {
    return typeof (input);
}
console.log(returnType("Siwei"));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (i == j) row.push(1);
            else row.push(0);
        }
        res.push(row);

    }
    return res;
}
console.log(identityMatrix(9));


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// ample array : [1,2,3,4,5]Expected Output : 2,4
function secondLowestAndSecondGreatest(input) {
    let res = [];
    input.sort();
    res.push(input[1]);
    res.push(input[input.length - 2])
    return res;
}
console.log(secondLowestAndSecondGreatest([1, 2, 4, 3, 5]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, 
// that is, the sum of its positive divisors excluding thenumber itself (also known as its aliquot sum). 
// Equivalently, a perfect number is a number that ishalf the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the s
function isPerfectNumber(num) {
    var sum = 1;
    for (let i = 2; i * 2 <= num; i++) {
        if (num % i == 0) sum += i;
    }
    return sum == num;
}
console.log(isPerfectNumber(6));


// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(input) {// assuming inputs are positive int
    let res = [];
    for (let i = 1; i * 2 <= input; i++) {
        if (input % i == 0) res.push(i);
    }

    return res;
}
console.log(factors(20));

// 14. Write a JavaScript function to convert an amount to coins. Sample function : amount To coins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1
function amountToCoins(amount, coins) {
    let res = [];
    coins.sort((a, b) => b - a);
    let i = 0;
    let coin = coins[i];
    while (amount > 0) {
        if (coin > amount) coin = coins[++i];
        else {
            amount -= coin;
        }
        res.push(coin);
    }
    return res;
}
console.log(amountToCoins(46, [1, 2, 25, 10, 5]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

function exp(b, n) {
    return b ** n;
}
console.log(exp(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string. Example string : "thequickbrownfoxjumpsoverthelazydog"Expected Output : "thequickbrownfxjmpsvlazydg
function uniqueCharacters(input) {
    let set = new Set(input);
    return Array.from(set).join('');
}
console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.
function occurrencesOfCharacters(input) {
    let res = {};
    input.split('').forEach(ch => {
        let temp = res[ch] || 0;
        res[ch] = temp + 1;
    });
    return res;
}
console.log(occurrencesOfCharacters("auhsidasdiasudh"));


// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function binarySearch(arr, target) {
    if (arr.length < 1) return -1;
    let lo = 0;
    let hi = arr.length - 1;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return arr[lo] == target ? lo : -1;
}
console.log(binarySearch([1, 2, 3, 5, 6, 9, 11,], 6));

// 19. Write a JavaScript function that returns array elements larger than a number. 
const largerFilter = (arr, n) => {
    return arr.filter(i => i > n);
}
console.log(largerFilter([1, 2, 3, 5, 6, 9, 11,], 6));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.Sample character list:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
function allSubset(arr, num) {
    let output = [[]];
    for (let i = 0; i < arr.length; i++) {
        let len = output.length;
        for (let j = 0; j < len; j++) {
            output.push(output[j].concat(arr[i]));
        }
    }
    return output.filter((e) => e.length == num);
};
console.log(allSubset([1, 2, 3], 2));


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o' Expected output : 3
function countLetter(str, s) {
    let res = 0;
    for (let elem in str) {
        if (elem == s) res++;
    }
    return res;
}
console.log(countLetter('microsoft.com', 'o'));
// 23. Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e' 
function firstNotRepeat(str) {
    let count = {};
    for (let elem in str) {
        let temp = count[elem] || 0;
        count[elem] = temp + 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (count[str.charAt(i)] == 1) return str.charAt(i);
    }
    return "";
}
console.log(firstNotRepeat('abacddbec'));


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparingeach pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    if (arr.length < 2) return arr;
    for (let i in arr) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output : "United States of America"
function longestName(arr) {
    return arr.reduce((acc, curr) => {
        return curr.length > acc.length ? curr : acc;
    }, "");
}
console.log(longestName(["Australia", "Germany", "United States of America"]))


// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstring(str) {
    let set = new Set();
    let res = 0;
    for (let start = 0, end = 0; start < str.length; start++) {
        while (set.has(str[start])) set.delete(str[end++]);
        set.add(str[start]);
        res = Math.max(res, end - start + 1);
    }
    return res;
}
console.log(longestSubstring('abacdcefgg'));

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. 
// For example, the longest palindromic substring of"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; 
// forecastle, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".In some applications it may be necessary to return all maximal palindromic substrings 
// (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromicsubstrings) rather than returning only one substring or returning the maximum length of apalindromic substring.
function longestPalindromicSubstring(string) {
    let res = "";
    const isPalindrome = (string, left, right) => {
        while (left >= 0 && right < string.length && string[left] == string[right]) {
            left--;
            right++;
        }
        left++;
        right--;
        return string.substring(left, right + 1);
    }
    for (let i = 0; i < string.length; i++) {
        let substring1 = isPalindrome(string, i, i);
        let substring2 = isPalindrome(string, i, i + 1);
        let longest = (substring1.length > substring2.length) ? substring1 : substring2;
        if (longest.length > res.length) {
            res = longest;
        }
    }
    return res;
};
console.log(longestPalindromicSubstring("abracadabra"))


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function square(a) {
    return a * a;
}

function add(a, b) {
    return a + b;
}
console.log(square(add(1, 2)));

// 29. Write a JavaScript function to get the function name
function getFunctionName(input) {
    return input.name;
}
console.log(getFunctionName(add));
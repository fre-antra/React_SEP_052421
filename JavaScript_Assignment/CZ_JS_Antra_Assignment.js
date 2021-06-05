//1. Write a JavaScript function that reverse a number. 
//Example x = 32243;
//Expected Output : 34223
/*
let x = 32243;
let reverse_x = x.toString().split('').reverse().join('');
console.log(reverse_x);
*/


//2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
/*
function isPalindrome(s) {
    // Change the original string s to lowercase
    let lower_string = s.toLowerCase();
    let new_string = ""

    // Keep the letters only
    for (let i = 0; i < lower_string.length; i++) {
        char = lower_string.charAt(i);
        if (char >= 'a' && char <= 'z') {
            new_string += char;
        }
    }
    
    return new_string === new_string.split('').reverse().join('');
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses run"));
*/


//3. Write a JavaScript function that generates all combinations of a string. 
//Example string : 'dog' 
//Expected Output : d,do,dog,o,og,g 
/*
function combinations(s) {
    let output = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            output.push(s.substring(i, j));
        }
    }

    return output;
}

console.log(combinations("dog"));
*/


//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//Example string : 'webmaster' 
//Expected Output : 'abeemrstw'
//Assume punctuation and numbers symbols are not included in the passed string.
/*
function pass(s) {
    let new_str = s.split('').sort().join('');
    return new_str;
}

console.log(pass('webmaster'));
*/


//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word 
// of the string in upper case. 
//Example string : 'the quick brown fox' 
//Expected Output : 'The Quick Brown Fox '
/*
function titleCase(s) {
    let words = s.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split('');
        word[0] = word[0].toUpperCase();
        words[i] = word.join('');
    }
    
    let new_s = words.join(' ');
    return new_s;
}

console.log(titleCase(s = 'the quick brown fox'));
*/


//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//Example string : 'Web Development Tutorial' 
//Expected Output : 'Development'
/*
function longestWord(s) {
    let words = s.split(' ');
    let longest_word_index = 0;
    let len_longest_word = words[0].length;

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > len_longest_word) {
            len_longest_word = words[i].length;
            longest_word_index = i;
        }
    }

    return words[longest_word_index];
}

console.log(longestWord('Web Development Tutorial'));
*/


//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
//Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
//Example string : 'The quick brown fox' 
//Expected Output : 5
/*
function countVowels(s) {
    s.split('');
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if ('aeiouAEIOU'.indexOf(s[i]) >= 0) {
            count++;
        }
    }

    return count;
}

console.log(countVowels(s = 'The quick brown fox'));
*/


//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
//Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
/*
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(10));
console.log(isPrime(11));
*/


//9. Write a JavaScript function which accepts an argument and returns the type. 
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
/*
function type(arg) {
    return (typeof arg);
}

console.log(type(1));
console.log(type({name: "Chunfu", hobby: "badminton"}));
console.log(type(true));
console.log(type(null));
console.log(type(undefined));
console.log(type(() => {}));
console.log(type("Test String"));
*/


//10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
/*
function identifyMatrix(n) {
    let id_matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                row.push(0);
            } else {
                row.push(1);
            }
        }
        id_matrix.push(row);
    }

    return id_matrix;
}

console.log(identifyMatrix(3));
console.log(identifyMatrix(6));
*/


//11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
//Sample array : [1,2,3,4,5]
//Expected Output : 2,4 
/*
function findSeconds(arr) {
    arr.sort();

    return [arr[1], arr[arr.length - 2]];
}

console.log(findSeconds([1,2,3,4,5]));
*/


//12. Write a JavaScript function which says whether a number is perfect. 
//According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
//Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
/*
function perfectNumber(num) {
    //let factors = [];
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            //factors.push(i);
            sum += i;
        }
    }

    //console.log(factors, sum);
    if (sum === num) {
        return true;
    } else {
        return false;
    }
}

console.log(perfectNumber(6));
console.log(perfectNumber(7));
console.log(perfectNumber(28));
console.log(perfectNumber(100));
console.log(perfectNumber(496));
console.log(perfectNumber(8128));
*/


//13. Write a JavaScript function to compute the factors of a positive integer. 
/*
function findFactors(num) {
    let factors = [];

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    factors.push(num);

    return factors;
}

console.log(findFactors(1));
console.log(findFactors(2));
console.log(findFactors(3));
console.log(findFactors(4));
console.log(findFactors(5));
console.log(findFactors(6));
console.log(findFactors(78));
console.log(findFactors(396));
console.log(findFactors(6475));
*/


//14. Write a JavaScript function to convert an amount to coins. 
//Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
//Output : 25, 10, 10, 1
/*
function amountToCoins(amount, arrCoins) {
    let coins = [];

    while (amount > 0) {
        for (let i = 0; i < arrCoins.length; i++) {
            if (amount >= arrCoins[i]) {
                coins.push(arrCoins[i]);
                amount -= arrCoins[i];
                break;
            }
        }
    }

    //console.log(coins);
    return coins;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
console.log(amountToCoins(108, [25, 10, 5, 2, 1]));
*/


//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
/*
function bPowerN() {
    let b = prompt("Please enter the base: ");   // This works with the browser, but not in the terminal with node
    let n = prompt("please enter the exponent/power: ");  // This works with the browser, but not in the terminal with node
    let result = Math.pow(b, n);

    return result;
}

console.log(bPowerN());
*/


//16. Write a JavaScript function to extract unique characters from a string. 
//Example string : "thequickbrownfoxjumpsoverthelazydog"
//Expected Output : "thequickbrownfxjmpsvlazydg"
// Q 16. Method 1: Use string operation
/*
function uniqueChars(s) {
    let new_str = "";

    for (let i = 0; i < s.length; i++) {
        if (new_str.indexOf(s.charAt(i)) < 0) {
            new_str += s.charAt(i);
        }
    }

    //console.log(new_str);
    return new_str;
}

console.log(uniqueChars(s = "thequickbrownfoxjumpsoverthelazydog"));
*/

// Q 16. Method 2: Use array
/*
function uniqueChars(s) {
    s.split('');
    let new_str = "";

    for (let i = 0; i < s.length; i++) {
        if (new_str.indexOf(s[i]) < 0) {
            new_str += s[i];
        }
    }

    //console.log(new_str);
    return new_str;
}

console.log(uniqueChars(s = "thequickbrownfoxjumpsoverthelazydog"));
*/


//17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
/*
function occurrences(s) {
    s.split('');
    let result = {};

    for (let i = 0; i < s.length; i++) {
        if (!result[s[i]]) {
            result[s[i]] = 1;
        } else {
            result[s[i]] += 1;
        }
    }

    return result;
}

console.log(occurrences("abcdefghijklmnjkn"));
*/


//18. Write a function for searching JavaScript arrays with a binary search. 
//Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

// CZ Note: For a binary search to work, the array has to be sorted.
// If the given array is not sorted, sort it first, add: 
//      arr.sort();
/*
function binarySearch(arr, num) {
    if (num < arr[0] || num > arr[arr.length - 1]) {
        return -1; // Or false, or "Not found."
    }

    let low_index = 0;
    let high_index = arr.length - 1;
    while (low_index <= high_index) {
        let middle_index = Math.floor((low_index + high_index) / 2);
        value_at_middle_index = arr[middle_index];
        if (num === value_at_middle_index) {
            return middle_index;
        } else if (value_at_middle_index < num) {
            low_index = middle_index + 1;
        } else {
            high_index = middle_index - 1;
        }
    }

    return -1; // Or false, or "Not found."
}

console.log((binarySearch([3, 17, 75, 80, 202], 22)));
console.log((binarySearch([3, 17, 75, 80, 202], 3)));
console.log((binarySearch([3, 17, 75, 80, 202], 17)));
console.log((binarySearch([3, 17, 75, 80, 202], 75)));
console.log((binarySearch([3, 17, 75, 80, 202], 80)));
console.log((binarySearch([3, 17, 75, 80, 202], 202)));
*/


//19. Write a JavaScript function that returns array elements larger than a number. 
/*
// Q 19. Method #1: Not using the filter function, but rather a custom function.
function numGreater(arr, num) {
    let num_greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            num_greater.push(arr[i]);
        }
    }

    return num_greater;
}

console.log(numGreater([3, 17, 75, 80, 202], 22));
*/
/*
// Q 19. Method #2: Use the filter function.
function numGreater(arr, num) {
    let num_greater = arr.filter(element => element > num);

    return num_greater;
}

console.log(numGreater([3, 17, 75, 80, 202], 22));
*/


//20. Write a JavaScript function that generates a string id (specified length) of random characters. 
//Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
/*
function stringId(n) {
    let string_id = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
    let len = chars.length;
    for (let i = 0; i < n; i++) {
        string_id += chars[Math.floor(Math.random() * len)];
    }

    return string_id;
}

console.log(stringId(5));
console.log(stringId(15));
console.log(stringId(25));
console.log(stringId(35));
*/


//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
//Sample array : [1, 2, 3] and subset length is 2 
//Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
/*
// This solution is for subset length = 2 only. Still trying to find a generic solution.
function subsets(arr, len) {
    let result = [];
    let row = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            row = [arr[i], arr[j]];
            result.push(row);
        }
    }

    console.log(result);
    return result;
}

console.log(subsets([1, 2, 3], 2));
*/


//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
//Sample arguments : 'microsoft.com', 'o' 
//Expected output : 3 
/*
// Q 22. Method 1: Use string method
function countLetter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}

console.log(countLetter('microsoft.com', 'o' ));
*/

/*
// Q 22. Method 2: Use string array method
function countLetter(str, letter) {
    str.split('');
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

console.log(countLetter('microsoft.com', 'o' ));
*/


//23. Write a JavaScript function to find the first not repeated character. 
//Sample arguments : 'abacddbec' 
//Expected output : 'e' 
/*
function firstNonRepeat(s) {
    s.split("");
    let letters = {};
    for (let i = 0; i < s.length; i++) {
        if (!letters[s[i]]) {
            letters[s[i]] = 1;
        } else {
            letters[s[i]] += 1;
        }
    }
    //console.log(letters);
    for (key in letters) {
        if (letters[key] === 1) {
            return key;
        }
    }
}

console.log(firstNonRepeat(s = 'abacddbec'));
console.log(firstNonRepeat(s = 'abacddbfec'));
console.log(firstNonRepeat(s = 'abacddbgfec'));
*/


//24. Write a JavaScript function to apply Bubble Sort algorithm. 
//Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
//Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
/*
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
*/


//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
//Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output : "United States of America"
/*
function Longest_Country_Name(arr) {
    let longest_name = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (longest_name.length < arr[i].length) {
            longest_name = arr[i];
        }
    }

    return longest_name;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
*/


//26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
/*
function longestSubstring(s) {
    s.split('');
    let longest_substr = "";
    let temp = "";

    for (let i = 0; i < s.length; i++) {
        temp += s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (temp.indexOf(s[j]) < 0) {
                temp += s[j];
            } else {
                break;
            }
        }

        if (temp.length > longest_substr.length) {
            longest_substr = temp;
        }
        temp = "";
    }

    return longest_substr;
}

console.log(longestSubstring("abcdefghijklmopqfgklim"));
console.log(longestSubstring("aabbcdefghhiijjkk"));
*/


//27. Write a JavaScript function that returns the longest palindrome in a given string. 
//Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
//In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
/*
function isPalindrome(s) {
    let new_s = s.split('').reverse().join('');
    return new_s === s;
}

//console.log(isPalindrome("ana"));
//console.log(isPalindrome("ada"));

function sortByCol2(a, b) {
    return b[1] - a[1];
}
function longestPalindromeSubstr(s) {
    s.split('');
    let palindrome_substrs = [];    // Store the palindromic substrings and their lengths

    for (let i = 0; i < s.length - 1; i++) {
        let temp = s[i];
        for (let j = i + 1; j < s.length; j++) {
            temp += s[j];

            if (isPalindrome(temp)) {
                palindrome_substrs.push([temp, temp.length]);
            }
        }
    }

    palindrome_substrs.sort(sortByCol2);    // Descent sort the palindromic substrings by length

    let result = [palindrome_substrs[0][0]];    // The longest palindromic substring(s)
    for (let i = 1; i < palindrome_substrs.length; i++) {
        if (palindrome_substrs[0][1] === palindrome_substrs[i][1]) {
            result.push(palindrome_substrs[i][0]);
        }
    }

    //console.log(result);
    return result;
}

console.log(longestPalindromeSubstr("bananas"));    // "anana"
console.log(longestPalindromeSubstr("abracadabra"));    // "aca" and "ada"
*/


//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
/*
// This element will sort a 2-D array by the second element (/dimension)
function sortByCol2(a, b) {
    return a[1] - b[1];
}

function sortArray(arr) {
    arr.sort(sortByCol2);
    return arr;
}

console.log(sortArray([[1, 3], [2, 5], [3, 2], [4, 1]]));
*/


//29. Write a JavaScript function to get the function name. 
/*
function functionName(fun) {
    let result = fun.toString();
    result = result.substr('function '.length);
    //console.log(result);
    result = result.substr(0, result.indexOf('('));
    //console.log(result);
    return result;
}

console.log(functionName(
    function testFunction() {
        //console.log("Test");
    }
))
*/

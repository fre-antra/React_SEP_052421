// JavaScript Assignment

// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

function rever(num) {
    // 1. convert number to string using String(num)
    // 2. Array.from takes An array-like or iterable object to convert to an array.
    //          Map (Number) function to call on every element of the array. convert string array to number array
    // 3. Array.reverse() to reverse the number array then join('') it into number.
    var ans = Array.from(String(num),Number)
    return ans.reverse().join('')
  }




// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// //  method 1: not good, reverse is in place replacement 
// const equals = (a, b) =>
//             a.length === b.length &&
//             a.every((v, i) => v === b[i]);

// function palidrome(str) {
//     const rev = str.split('')
//     return equals([...str],rev)
// }

// console.log(palidrome("abcba")) 

// method 2: two pointer
function palidrome(str) {
    str = str.split('')
    for(let i = 0; i < Math.floor(str.length/2); i ++){
        if(str[i] !== str[str.length -1 -i]){
            return false
        }
    }
    return true
}

// 4 ways convert string to array
// const string = 'word';
// // Option 1
// string.split('');
//
// // Option 2
// [...string];
//
// // Option 3
// Array.from(string);
//
// // Option 4
// Object.assign([], string);



// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

// assume 'dg' is not the case. Therefore, only care rest of chars in string
function combins(str) {
    let ans = []
    for(let i =0; i < str.length; i++) {
        let cur = ''
        for(let j =i; j < str.length; j++){
           cur += str[j]
           ans.push(cur)
        }
    }

    // edge case 'banana', remove duplicate if need
    ans = new Set(ans)
    return [...ans]
}



// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortstring(str)  {
    return str.split('').sort().join('');
}




// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

function upper(str){
    str = str.split(' ')
    for(let i in str){
        // str[i][0] = str[i][0].toUpperCase() // invalid Why???
        
        // need to concatinate words. "T" + "he"
        str[i] = str[i][0].toUpperCase()+ str[i].substr(1)
    }
    
    return str.join(' ')
}



// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

function longest(str) {
    const arr = str.split(' ')
    // descending sort element by length using arrow function
    return arr.sort((a,b)=> b.length > a.length)[0] 
}





// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

// method 1: brute force
function CountV(str) {
    const vowel = ['a','e','i','o','u']
    let ans = 0
    str = str.toLowerCase()
    for(let i of str){
        if(vowel.includes(i)) {
            ans += 1
        }
    }
    return ans
}

// method 2: diction
function CountV(str) {
    const dic = {}
    str = str.toLowerCase()
    console.log(str)
    for(let i of str){
        if(i in dic){
            dic[i] += 1
        }else{
            dic[i] = 1
        }
    }

    const vowel = ['a','e','i','o','u']
    let ans = 0
    for(let i of vowel){
        dic[i] ? ans += dic[i] : ans += 0
    }
    return ans
}




// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }



// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function checkType(arg) {
    return typeof arg
}


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function Imatrix(num) {
    let matrix = Array(num).fill(0).map((element) => Array(num).fill(0))

    // let matrix = new Array(num).fill(new Array(num).fill(0))
    // this method is pass by reference, each row will treat as same reference
    // second answer: https://stackoverflow.com/questions/8301400/how-do-you-easily-create-empty-matrices-javascript
    
    for(let i = 0; i < num; i++){
        matrix[i][i] = 1
    }
    return matrix
}



// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 
function getSec(arr) {
    return [arr[1],arr[arr.length-2]]
}


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function IsPerfect(num) {
    let ans = 0
    for(let i = 1; i <= num/ 2; i++){
        if(num%i === 0){
            ans += i
        }
    }
    return ans === num && ans !== 0 ? true: false
}



// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factors(num) {
    let ans = []
    for(let i = 1; i<= num; i++){
        if(num % i == 0 ){
            ans.push(i)
        }
    }
    return ans 
}


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1
function amountTocoins(num, arr){
    let ans = []
    for(let i of arr){
        while(num - i >= 0){
            ans.push(i)
            num = num - i
        } 
    }
    return ans
}


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function bn(base, exponent){
    // return base ** exponent

    return Math.pow(base,exponent)
}


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function unique(str) {
    str = new Set(str)
    return [...str].join('')
}



// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
function dic(str) {
    const dic = {}
    for(let char of str){
        if(char in dic){
            dic[char] += 1
        }else{
            dic[char] = 1
        }
    }
    return dic
}

console.log(dic('adfgsfvdxsvxzqwdfasdftc'));


// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binary(target,arr) {
    let left = 0
    let right = arr.length -1
    while(leff < right){
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] < target){
            return mid
        }else if (arr[mid] < target){
            left = mid
        }else{
            right = mid
        }
    }

    return -1
}


// 19. Write a JavaScript function that returns array elements larger than a number. 
function larger(num, arr){
    return arr.filter((e) => e > num)
}

console.log(larger(3,[1,4,6,2,3,5,3,6,1,2,3]));


// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function genID(num){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let ans = ''
    for(let i =0; i < num; i++){
        ans += chars[Math.floor(Math.random() * 100) % chars.length]
    }
    return ans 
}

console.log(genID(3));
console.log(genID(9));


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[1，2], [1，3], [2, 3]]
function subset(len, arr){
    let ans = []
    
    dfs([], 0)
    
    function dfs(path, index){
        ans.push(path)
        for (let i = index; i< arr.length; i++){
            dfs(path.concat(arr[i]),i+1)
        }
    }
    console.log(ans);
    return ans.filter( e => e.length == len)
}

console.log(subset(2,[1, 2, 3] ));





// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
function occurrences(str, char){
    return [...str].filter( e => e === char).length

    // or
    return str.split(char).length - 1
}

console.log(occurrences('microsoft.com', 'o')); 



// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 
function firstRe (str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
          return char;
        }
      }
      return null;
}



// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubble(arr){
    for(let i in arr){
        for(let j =0; j < arr.length - i - 1; j++){
            if(arr[j] < arr[j+1]){
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}



// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function longest(arr){
    return arr.sort( (a,b) => b.length >a.length)[0]
}



// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function longestSub(arr){

    let seen = new Set()
    let longest = 0
    let left = 0
    for(let right = 0; right < arr.length; right++){
        while(seen.has(arr[right])){
            seen.delete(arr[left])
            left += 1
        }
        seen.add(arr[right])
        longest = Math.max(longest, right - left + 1)
    }
    return longest
}


// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function longestPali(str) {
    let ans = ''
    for(let i =0; i< str.length; i++){
        for (let j =0; j<2; j ++){
            let l = i, r = i+j
            while( str[l] && str[l] == str[r]){
                l -= 1
                r += 1
            }
            if((r-l-1) > ans.length){
                ans = str.substring(l+1, r)
            }
        }
    }
    return ans
}

console.log(longestPali('akjshdfhjabbcbbaakjhadjh'));


// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function passFn(arg,cb){
    cb()
    console.log(arg)
}


// 29. Write a JavaScript function to get the function name. 
function getName(fn){
    return fn.name
}

console.log(getName(function MyName() {}))
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

/*

    JS Assignment (29 Questions)
    Author: Chirra Reddy Sai Sankeerth Reddy

*/

/*

    1. Write a JavaScript function that reverse a number.
     Example x = 32243;
     Expected Output : 34223

*/
const reverseNumber = (num) => {
    // parseFloat needed to consider negative numbers
    // +num.toString().split('').reverse().join('');
    return parseFloat(num.toString().split('').reverse().join(''))*Math.sign(num);
}

//console.log(reverseNumber(-2345));

/*

    2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run.

*/
const isPalindrome = (inputString) => {
    //replace any white spaces in between
    const newInput = inputString.replace(/\s+/g, '');
    return newInput.split('').reverse().join('') === newInput;
}

//console.log(isPalindrome("nurses run"));

/*

    3. Write a JavaScript function that generates all combinations of a string.
     Example string : 'dog' 
     Expected Output : d,do,dog,o,og,g 

*/
const allCombinationsOfString = (inputString) => {
    combinations = new Array();
    for(let i=0; i<inputString.length; i++){
        for(let j=i+1; j<inputString.length+1; j++){
            combinations.push(inputString.slice(i,j));
        }
    }
    return combinations;
}

// console.log(allCombinationsOfString("dog"));

/*

    4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
     Example string : 'webmaster' 
     Expected Output : 'abeemrstw'
     Assume punctuation and numbers symbols are not included in the passed string.

*/

const stringSorting = (inputString) => {
    return inputString.split('').sort().join('');
}

// console.log(stringSorting('webmaster'));

/*

    5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case.
     Example string : 'the quick brown fox' 
     Expected Output : 'The Quick Brown Fox '

*/

const capitalizeFirstLetter = (inputString) => {
    const input = inputString.split(' ');
    //Using different method for 'for' loop.
    for (word in input){
        input[word] = input[word].charAt(0).toUpperCase() + input[word].slice(1);
    }
    return input.join(" ");
}

//console.log(capitalizeFirstLetter('the quick brown fox'));

/* 

    6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string.
     Example string : 'Web Development Tutorial'
     Expected Output : 'Development'

*/

const longestWord = (inputString) => {
    let splitString = inputString.split(' ');

    let longestWord = '';

    for(let i=0; i<splitString.length; i++){
        if (splitString[i].length > longestWord.length){
            longestWord = splitString[i];
        }
    }
    return longestWord;
}

//If there are two words with same length, returns the first word. If we want last word (add = in if statement)
//console.log(longestWord('Web Development Tutorial'));

/* 

    7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here.
     Example string : 'The quick brown fox' 
     Expected Output : 5

*/

const vowelCount = (inputString) => {
    count = 0;
    for(let i =0;i<inputString.length; i++){
        let input = inputString[i].toLowerCase();
        if (input == 'a' ||input == 'e' || input == 'i' || input == 'o' || input == 'u' ) {
            count++;
        }
    }
    return count;
}

//console.log(vowelCount("The quick brown fox"));

/*

    8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not.
     Note : A prime number (or a prime) is a natural number greater than 1 that has no positivedivisors other than 1 and itself.

*/

const isPrime = (num) => {
    if(num === 1){
        return 'Nether prime nor composite';
    }

    if (num >1 && num <=3 ) {
        return true;
    }

    else if (num > 3) {
        for(let i=2; i<num;i++){
            if(num%i == 0 ){
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }

}

//console.log(isPrime(31));

/*

    9. Write a JavaScript function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number,string, and undefined.

*/

const argumentType = (input) => typeof input;

//console.log(argumentType(function() {}));

/*

    10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

*/

const nIdentityMatrix = (n) => {
    let matrix = new Array(n);
    for(let i=0;i<n;i++){
        matrix[i] = new Array(n);
        for(let j=0;j<n;j++){
            if (i===j){
                matrix[i][j] = 1;
            }else {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

//console.log(nIdentityMatrix(7));

/*

    11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. 
    Sample array : [1,2,3,4,5]
    Expected Output : 2,4 

*/

const secondLowestHighest = (inputArray) => {
    sortedInput = inputArray.sort();

    return sortedInput[1]+","+sortedInput[sortedInput.length-2];
}

//FIXME will not work for repeared values or array length less that 3
//console.log(secondLowestHighest([1,2,7,4,5,3]));

/*

    12. Write a JavaScript function which says whether a number is perfect. According to Wikipedia : In number theory, a perfect number is a positive integer that is equal tothe sum of its proper positive divisors, that is, the sum of its positive divisors excluding thenumber itself (also known as its aliquot sum). Equivalently, a perfect number is a number that ishalf the sum of all of its positive divisors (including itself).Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1+ 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed bythe perfect numbers 496 and 8128.

 */

const isPerfectNumber = (num) => {
    let perfectDivisors = new Array();
    perfectDivisors.push(1);
    for(let i=2; i<num;i++){
        if(num%i==0){
            perfectDivisors.push(i);
        }
    }
    let sum = perfectDivisors.reduce((cum,cur) => cum+cur,0);
    return sum === num;
}

//console.log(isPerfectNumber(8128));

/*

    13. Write a JavaScript function to compute the factors of a positive integer. 

*/

const postiveIntFactors = (num) => {
    let factors = new Array();
    for(let i=1;i<=num;i++){
        if(num%i === 0 ){
            factors.push(i);
        }
    }
    return factors;
}

//console.log(postiveIntFactors(12));

/*

    14. Write a JavaScript function to convert an amount to coins. 
    Sample function : amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
    Output : 25, 10, 10, 1

*/

const amountToCoins = (amt,coins) => {
    //sorting coins in decending order
    coins = coins.sort((a,b) => b-a);
    output = new Array();

    for(let i=0; i<coins.length;i++){
        let remainder = amt % coins[i];
        let count = Math.floor(amt/coins[i])
        for(let j = 0; j<count;j++){
            output.push(coins[i]);
        }
        amt = remainder;
        if(amt === 0 ) break;
    }
    return output;
}

//console.log(amountToCoins(46,[25,10,5,2,1]));

/*

    15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. Accept b and n from the user and display the result.

*/

const exponentCalculation = (base, exponent) => base ** exponent;

//console.log(exponentCalculation(12,3));

/*

    16. Write a JavaScript function to extract unique characters from a string.
     Example string : "thequickbrownfoxjumpsoverthelazydog"
     Expected Output : "thequickbrownfxjmpsvlazydg"

*/

const findUniqueChars = (inputString) => {
    let uniqueString = "";

    for (let i=0;i<inputString.length;i++){
        if(uniqueString.indexOf(inputString[i])===-1){
            uniqueString += inputString[i];
        }
    }
    return uniqueString;
}

//console.log(findUniqueChars("thequickbrownfoxjumpsoverthelazydog"));

/*

    17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.

*/

const letterOccurenceCount = (inputString) => {
    let letterCount = {};

    for(let i=0;i<inputString.length;i++){
        if(letterCount[inputString[i]] > 0){
            letterCount[inputString[i]]++;
        }else {
            letterCount[inputString[i]] = 1;
        }
    }
    return letterCount;
}

//console.log(letterOccurenceCount('abaaabcdesxgfskugrvs'));

/*

    18. Write a function for searching JavaScript arrays with a binary search. Note : A binary search searches by splitting an array into smaller and smaller chunks until it findsthe desired value.

*/

const binarySearch = (searchElement, inputArray) => {
    let sortedArray = inputArray.sort();

    let left = 0;
    let right = sortedArray.length -1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if (sortedArray[mid] === searchElement) return true;

        if (sortedArray[mid] < searchElement) left=mid+1;

        else right = mid-1;
    }
    return false;
}

//console.log(binarySearch(6, [1,2,3,4,5,6,7,8,9,10]));

/*

    19. Write a JavaScript function that returns array elements larger than a number.

*/

const findLargerThanNumbers = (num,inputArray) => {
    let output = new Array();

    for(let i=0;i<inputArray.length;i++){
        if (inputArray[i] > num) {
            output.push(inputArray[i]);
        }
    }
    return output;
}

//console.log(findLargerThanNumbers(5,[1,2,3,4,5,6,7,8,9,10]));

/*

    20. Write a JavaScript function that generates a string id (specified length) of random characters.Samplecharacterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

*/

const randomStringGenerator = (stringLength) => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result="";
    for(let i=0;i<stringLength;i++){
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

//console.log(randomStringGenerator(20));

/*

    21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array. Sample array : [1, 2, 3] and subset length is 2 
    Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

*/

const fixedLengthSubsets = (subsetLength, inputArray) => {
    let outputArray = [];
    let innerArray;

    for(let i=0;i<Math.pow(2,inputArray.length);i++){
        innerArray = [];
        let j = inputArray.length -1 ;
        do {
            if ((i & (1 << j)) !==0){
                innerArray.push(inputArray[j]);
            }
        }while(j--)

        if (innerArray.length >=subsetLength){
            outputArray.push(innerArray);
        }
    }
    return outputArray;
}

//Approach 2
const fixedLengthSubsets2 = (subsetLength, inputArray) => {
    const res = inputArray.reduce((arr, val) => arr.concat(
        arr.map(arr => [val,...arr])
        ),
        [[]])
    return res.filter(res => res.length === subsetLength);
}


//TODO leftshift and do while revision - different way to implement this?
//console.log(fixedLengthSubsets(2, [1,2,3]));
console.log(fixedLengthSubsets2(2,[1,2,3]));

/*

    22. Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string.
    Sample arguments : 'microsoft.com', 'o' 
    Expected output : 3 

*/

const letterOccurenceInString = (inputString, letter) => {
    let count =0;
    for(let i=0;i<inputString.length;i++){
        if(inputString[i] === letter){
            count++
        }
    }
    return count;
}

//console.log(letterOccurenceInString("microsoft.com","o"));

/*

    23. Write a JavaScript function to find the first not repeated character. 
    Sample arguments : 'abacddbec' 
    Expected output : 'e'

*/

const fistNonRepeatingCharacter = (inputString) => {
    characterCount = {}

    for(let i=0;i<inputString.length;i++){
        if(characterCount[inputString[i]] >0){
            characterCount[inputString[i]]++;
        }else{
            characterCount[inputString[i]] = 1;
        }
    }

    for( key in characterCount){
        if(characterCount[key] === 1) return key;
    }
    return 'No non repeating character';
}

//console.log(fistNonRepeatingCharacter("abacddbec"));

/*

    24. Write a JavaScript function to apply Bubble Sort algorithm. Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simplesorting algorithm that works by repeatedly stepping through the list to be sorted, comparingeach pair of adjacent items and swapping them if they are in the wrong order".
     Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
     Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

*/

const bubbleSort = (inputArray) => {
    for(let i=0;i<inputArray.length;i++){
        for(let j=0;j<inputArray.length;j++){
            // desceneding order. Change to greater than for ascending order sort.
            if(inputArray[j] < inputArray[j+1]){
                let temp = inputArray[j];
                inputArray[j] = inputArray[j+1];
                inputArray[j+1] = temp;
            }
        }
    }
    return inputArray;
}

//console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/*

    25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output. Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
    Expected output : "United States of America"

*/

const longestCountryName = (inputArray) => {
    let longestCountryName = "";

    for(let i=0;i<inputArray.length;i++){
        if (inputArray[i].length > longestCountryName.length){
            longestCountryName = inputArray[i];
        }
    }
    return longestCountryName;
}

//console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

/*

    26. Write a JavaScript function to find longest substring in a given a string without repeatingcharacters.

*/

const longestSubString = (inputString) => {
    if(inputString.length === 0) return 0;

    charIndex = {};

    let length = 0;
    let start = 0;

    for(let i=0;i<inputString.length;i++){
        if(inputString[i] in charIndex && start <= charIndex[inputString[i]]){
            start = charIndex[inputString[i]]+1;
        }else {
            length = Math.max(length, i-start+1);
        }
        charIndex[inputString[i]] = i;
    }
    return length;
}

//console.log(longestSubString("abcabcbb"));

/*

    27. Write a JavaScript function that returns the longest palindrome in a given string. Note: According to Wikipedia "In computer science, the longest palindromic substring or longestsymmetric factor problem is the problem of finding a maximum-length contiguous substring of agiven string that is also a palindrome. For example, the longest palindromic substring of"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; forexample, in the string "abracadabra", there is no palindromic substring with length greater thanthree, but there are two palindromic substrings with length three, namely, "aca" and "ada".In some applications it may be necessary to return all maximal palindromic substrings (that is, allsubstrings that are themselves palindromes and cannot be extended to larger palindromicsubstrings) rather than returning only one substring or returning the maximum length of apalindromic substring.

*/

const longestPalindromicSubString = (inputString) => {
    result="";
    reslen=0;

    for(let i=0;i<inputString.length;i++){
        //odd length string
        let l=i;
        let r=i;
        while(l>=0 && r<inputString.length && inputString[l] === inputString[r]){
            if(r-l+1 > reslen){
                result = inputString.slice(l,r+1);
                reslen = r-l+1;
            }
            l--;
            r++;
        }

        //even length string
        l=i;
        r=i+1;
        while(l>=0 && r<inputString.length && inputString[l]=== inputString[r]){
            if(r-l+1 > reslen){
                result = inputString.slice(l,r+1);
                reslen = r-l+1;
            }
            l--;
            r++;
        }
    }
    return result;
}

//console.log(longestPalindromicSubString("babad"));

/*

    28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

*/

const functionParameter = (num,inputFunction) => {
    console.log("Random number passed with function: "+num);
    inputFunction(num);
}

const testFunction = (num) => console.log("Function passed as paramter along with number: "+num);

//functionParameter(10, testFunction);

/*

    29. Write a JavaScript function to get the function name.

*/

function functionName(){
    console.log(arguments.callee.name);
}

//Does not work with arrow functions
//functionName();
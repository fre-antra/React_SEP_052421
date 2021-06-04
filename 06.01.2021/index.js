// 1. Write a JavaScript function that reverse a number.
function reverse(num) {
    const numString = num.toString();
    let answer = "";
    for (let i = numString.length - 1; i >= 0; i--) {
        answer += numString[i];
    }
    return parseFloat(answer);
}

// 2. Write a JavaScript function that inputs whether a passed string is palindrome or not?
function isPalindromeSingle(inputString, left, right, maxLength) {
    while (left >= 0 && right < maxLength) {
        if (inputString[left] === inputString[right]) {
            left--;
            right++;
        } else {
            return false;
        }
    }
    return true;
}

function isPalindrome(inputString) {
    inputString = inputString.split(" ").join("");
    let maxLength = inputString.length;
    let left = Math.floor((maxLength - 1) / 2);
    return (
        isPalindromeSingle(inputString, left, left, maxLength) ||
        isPalindromeSingle(inputString, left, left + 1, maxLength)
    );
}

// 3. Write a JavaScript function that generates all combinations of a string.
function generateCombinations(input) {
    maxLength = input.length;
    const ans = [];
    for (let left = 0; left <= maxLength - 1; left++) {
        let right = left + 1;
        while (right <= maxLength) {
            if (!ans.includes(input.slice(left, right))) {
                ans.push(input.slice(left, right));
            }
            right++;
        }
    }
    return ans;
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function sortString(input) {
    const memo = {};
    for (let index = 0; index < input.length; index++) {
        if (input[index] in memo) {
            memo[input[index]] += 1;
        } else {
            memo[input[index]] = 1;
        }
    }
    let alphabetical = "abcdefghijklmnopqrstuvwxyz";
    let ans = "";
    for (let index = 0; index < alphabetical.length; index++) {
        if (alphabetical[index] in memo) {
            let i = 0;
            while (i < memo[alphabetical[index]]) {
                ans += alphabetical[index];
                i++;
            }
        }
    }
    return ans;
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function toHigher(input) {
    const sentenceSplit = input.split(" ");
    const ansList = [];
    sentenceSplit.map((word) => {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        ansList.push(word);
    });
    return ansList.join(" ");
}

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLongestWord(input) {
    const inputArray = input.split(" ");
    let maxLength = 0,
        ans = "";
    inputArray.forEach((word) => {
        if (word.length > maxLength) {
            ans = word;
            maxLength = ans.length;
        }
    });
    return ans;
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowel(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if ("aeiouAEIOU".indexOf(input[i]) !== -1) {
            count += 1;
        }
    }
    return count;
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function isPrime(input) {
    if (input <= 3) {
        return input > 1;
    }

    let sqrtBound = Math.floor(Math.sqrt(input));
    for (let i = 2; i <= sqrtBound; i++) {
        if (input % i === 0) {
            return false;
        }
    }
    return true;
}

// 9. Write a JavaScript function which accepts an argument and returns the type.
// object, boolean, function, number, string, and undefined
function defineType(input) {
    return typeof input;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function generateMatrix(row, column) {
    const matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = new Array(column);
    }
    return matrix;
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function findNum(array) {
    if (array.length < 2) {
        return undefined;
    }
    array.sort();
    return [array[1], array[array.length - 2]];
}

// 12. Write a JavaScript function which says whether a number is perfect.
function isPerfect(input) {
    let cumulative = 0;
    let factors = [];
    for (let i = 1; i < Math.floor(input / 2); i++) {
        if (input % i === 0 && i !== input) {
            if (factors.indexOf(i) === -1) {
                cumulative += i;
                factors.push(i);
            }
            if (i !== 1 && factors.indexOf(input / i) === -1) {
                cumulative += input / i;
                factors.push(input / i);
            }
            if (cumulative > input) {
                return false;
            }
        }
    }

    if (cumulative === input) {
        return true;
    }
    return false;
}

// 13. Write a JavaScript function to compute the factors of a positive integer.
function computerFactors(input) {
    let factors = [];
    for (let i = 1; i < Math.floor(input / 2); i++) {
        if (input % i === 0 && factors.indexOf(i) === -1) {
            factors.push(i);
            if (factors.indexOf(input / i) === -1) {
                factors.push(input / i);
            }
        }
    }
    return factors;
}

// 14. Write a JavaScript function to convert an amount to coins.
function amountToCoins(amount, coins) {
    let memo = {};
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        if (amount / coin >= 1) {
            memo[coin] = Math.floor(amount / coin);
            amount = amount - memo[coin] * coin;
        }
    }
    const ans = [];
    for (let i = 0; i < coins.length; i++) {
        if (memo[coins[i]]) {
            for (let j = 0; j < memo[coins[i]]; j++) {
                ans.push(coins[i]);
            }
        }
    }
    return ans.join(",");
}

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function computeExp(b, n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    if (n < 0) {
        for (let i = 0; i < -n; i++) {
            result *= b;
        }
        return 1 / result;
    }
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            result *= b;
        }
        return result;
    }
}

// 16. Write a JavaScript function to extract unique characters from a string.
function extractUnique(input) {
    let memo = {},
        ans = "";
    for (let i = 0; i < input.length; i++) {
        if (!memo[input[i]]) {
            ans += input[i];
            memo[input[i]] = true;
        }
    }
    return ans;
}

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
function findOccur(input) {
    let memo = {};
    for (let i = 0; i < input.length; i++) {
        if (!memo[input[i]]) {
            memo[input[i]] = 1;
        } else {
            memo[input[i]] += 1;
        }
    }
    return memo;
}

// 18. Write a function for searching JavaScript arrays with a binary search.
function binarySearch(input, target) {
    // input.sort();
    let start = 0,
        end = input.length - 1;
    while (start + 1 < end) {
        let pivot = Math.floor((start + end) / 2);
        if (target < input[pivot]) {
            end = target;
        } else if (target === input[pivot]) {
            return pivot;
        } else {
            start = pivot;
        }
    }
    if (input[start] === target) {
        return start;
    }
    if (input[end] === target) {
        return end;
    }
    return null;
}

// 19. Write a JavaScript function that returns array elements larger than a number.
function findLarger(input, target) {
    let ans = [];
    input.forEach((number) => {
        if (number > target) {
            ans.push(number);
        }
    });
    return ans;
}

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
function generateString(num) {
    const sampleString =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ans = "";
    for (let index = 0; index < num; index++) {
        let random = sampleString.charAt(
            Math.floor(Math.random() * sampleString.length)
        );
        ans += sampleString.charAt(random);
    }
    return ans;
}

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
function subset(ans, subArray, input, size) {
    if (size === 0) {
        ans.push(subArray);
    }
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (size === 1) {
            if (
                !ans.some(
                    (subset) =>
                        subset.toString() === [...subArray, element].toString()
                )
            ) {
                ans.push([...subArray, element]);
            }
        } else {
            subset(
                ans,
                [...subArray, element],
                input.slice(index + 1),
                size - 1
            );
        }
    }
}

function totalSubset(input, size) {
    input.sort();
    const ans = [];
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (index !== 0 && element === input[index - 1]) {
            continue;
        }
        let subArray = [element];
        subset(ans, subArray, input.slice(index + 1), size - 1);
    }
    return ans;
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function countChar(input, target) {
    let count = 0;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element === target) {
            count += 1;
        }
    }
    return count;
}

// 23. Write a JavaScript function to find the first not repeated character.
function findFirstNotRepeat(input) {
    const memo = {};
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (memo[element] === undefined) {
            memo[element] = index;
        } else {
            memo[element] = -1;
        }
    }
    let small = Infinity,
        ans = null;
    for (const key in memo) {
        if (memo[key] !== -1 && memo[key] < small) {
            ans = key;
            small = memo[key];
        }
    }
    return ans;
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubleSort(input) {
    const ans = [...input];
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input.length - i - 1; j++) {
            if (input[j] < input[j + 1]) {
                let temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
            }
        }
    }
    return ans;
}

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function findLongestName(input) {
    let ans = "";
    input.map((curr) => {
        if (curr.length > ans.length) {
            ans = curr;
        }
    });
    return ans;
}

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function findLongestSubstring(s) {
    if(!s || s.length === 0) {
        return 0;
    }
    let currentMax = 1;
    let currentString = s[0];
    let i = 0, j = 1;
    for(i; i < s.length-1; i ++) {
        while(j < s.length && s.substring(i,j).indexOf(s[j]) === -1) {
            j ++
        }
        if(currentMax < j - i) {
            currentMax = j - i;
            currentString = s.slice(i, j);
        }
    }
    
    return currentString;
}

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
function expandCenter(s, left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right] ) {
        left --
        right ++
    }
    return s.substring(left+1, right)
}

var longestPalindrome = function(s) {
    let maxString = "";
    if(!s || s.length === 0) {
        return maxString;
    }
    
    for(let i = 0; i < s.length; i++) {
        let sameCenter = expandCenter(s, i, i);
        let doubleCenter = expandCenter(s, i, i+1);
        maxString = maxString.length >= sameCenter.length ? maxString : sameCenter;
        maxString = maxString.length >= doubleCenter.length ? maxString : doubleCenter;
    }
    return maxString;
};

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function fn(a) {
    return a + 3;
}

function pass(a, fn) {
    return fn(a)
}

// 29. Write a JavaScript function to get the function name. 
function getFnName()  {
    console.log(arguments.callee.name)
}



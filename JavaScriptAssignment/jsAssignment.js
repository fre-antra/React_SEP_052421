//1. reverse a number
function reverseNum(num) {
    let str = num + "";
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    return parseInt(reverseStr);
}

//2. check palindrome
function palindrome(str) {
    let reverseStr = str.reverse()
    return str === reverseStr;
}

//3. all comb of str
function combinStr(str) {
    let combSet = new Set();
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            combSet.add(str.slice(i, j));
        }
    }
    return Array.from(combSet);
}

//4. sort str        
function sortStr(str) {
    return str.split("").sort().join("");
}

//5. cap each word in sentence
function sentCap(str) {
    if (str.length === 0) {
        return str;
    }

    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

//6. find longest word
function longestWord(str) {
    let arr = str.split(" ");
    let max = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}

//7. count vowel
function countVowel(str) {
    const vowels = "aeiou";
    let res = 0;
    for (let c in str) {
        if (vowels.indexOf(c) !== -1) {
            res++;
        }
    }
    return res;
}

//8.check prime
function checkPrime(num) {
    if (num < 2) return false;
    if (num % 2 === 0) return false;
    for (let i = 3; i < Math.sqrt(num) + 1; i += 2) {
        if (num % i == 0) return false;
    }
    return true;
}

//9.return type 
function myType(arg) {
    return typeof arg;
}

//10 return matrix 
function createMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = new Array(n);
        matrix.push(row);
    }
    return matrix;
}

//11 return second lowest and greatest   
function secondGreatAndLow(arr) {
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223 

var reverse = function(x) {
    let res = 0;
    let neg = false;
    if (x < 0) {
       neg = true;
        x = -x;
    }
    while (x > 0) {
        res = res*10 + parseInt(x%10);
        x = parseInt(x/10);
    }
    return neg?-1* res:res;  
};

console.log("Q1: " + reverse(32243));
console.log("---------------------");

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
var isPalindrome = function(s) { 
    var ls = [];
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c.toLowerCase() != c.toUpperCase()) {
            ls.push(c.toLowerCase());
        }
        if (c >= '0' && c <= '9') {
           ls.push(c);
        }      
    }
    const newStr = ls.join("");
    let l = 0; 
    let r = newStr.length - 1;
    while (l < r) {
        if (newStr.charAt(l++) != newStr.charAt(r--)) {
            return false;
        }
    }
    return true;  
};

console.log("Q2: "+ isPalindrome("madam or nurses run"));
console.log("Q2: "+ isPalindrome("1K1"));
console.log("Q2: "+ isPalindrome("ahha"));
console.log("---------------------");

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

var combineString = function(s) {
    const res = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            res.push(s.slice(i, j+1));
        }
    }
    return res;   
}
console.log("Q3: "+ combineString("dog"));
console.log("---------------------");

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

var reorder = function(s) {
    return s.split("").sort().join("");
}
console.log("Q4: "+ reorder("webmaster"));
console.log("---------------------");

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

var capitalize = function(s) {
    const strs = s.split(" ");
    const res = [];
    for (let i = 0; i < strs.length; i++) {
        var curr = strs[i];
        res.push(curr.charAt(0).toUpperCase() + curr.slice(1));
        res.push(" ");
    }
    res.pop();
    return res.join(" ");

}
console.log("Q5: "+ capitalize("the quick brown fox"));
console.log("---------------------");

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'

var longestWord = function(s) {
    var longest = 0;
    var res ="";
    const strs = s.split(" ");
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > longest) {
            res = strs[i];
            longest = strs[i].length;
        }

    }
    return res;
}

console.log("Q6: "+ longestWord("Web Development Tutorial"));
console.log("---------------------");

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
var countVowel = function(s) {
    let res = 0;
    const set = new Set();
    set.add("a");
    set.add("e");
    set.add("i");
    set.add("o");
    set.add("u");

    for (let i = 0; i < s.length; i++) {
        if (set.has(s.charAt(i).toLowerCase())) {
            res++;
        }
    }
    return res;
}

console.log("Q7: "+countVowel("The quick brown fox"));
console.log("---------------------");

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

var isPrime = function(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    for (var i = 2; i < n; i ++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Q8: "+ isPrime(5));
console.log("Q8: "+ isPrime(37));
console.log("Q8: "+ isPrime(99));
console.log("---------------------");

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

var getType= function(input) {
    return typeof(input);
}

console.log("Q9: "+ getType(1));
console.log("Q9: "+ getType(true));
console.log("Q9: "+ getType("str"));
console.log("Q9: "+ getType(()=>{}));
console.log("---------------------");

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
var identityMatrix = function(row, col) {
    var matrix = [];
    for(let i= 0; i<col; i++) {
        matrix[i] = [];
        for(let j=0; j<row; j++) {
           if (i == j) {
               matrix[i][j] = 1;
           } else {
               matrix[i][j] = 0;
           }
        }
    }
    return matrix;
}

console.log("Q10: "+ identityMatrix(3,3));
console.log("Q10: "+ identityMatrix(4,4));
console.log("---------------------");

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

var findSecond = function(arr) {
    var res = [];
    arr.sort();
    res.push(arr[1]);
    arr.sort(function(a, b){return b-a});
    res.push(arr[1]);
    return res;
}

console.log("Q11: "+ findSecond([1,2,3,4,5]));
console.log("---------------------");
// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
var isPerfect = function(n) {
    if (n <= 0) return false;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            sum += i;
        }
        if (sum/2 > n) {
            return false;
        }
    }
    return parseInt(sum/2) == n;
}
console.log("Q12: "+ isPerfect(6));
console.log("Q12: "+ isPerfect(28));
console.log("Q12: "+ isPerfect(5));
console.log("---------------------");

// 13. Write a JavaScript function to compute the factors of a positive integer. 
var getFactors = function(n) {
    var res = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            res.push(i);
        }
    }
    return res;
}
console.log("Q13: "+ getFactors(1));
console.log("Q13: "+ getFactors(5));
console.log("Q13: "+ getFactors(50));
console.log("---------------------");

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

var amountTocoins = function(amount, coins) {
    var res = [];
    coins.sort(function(a, b){return b-a});
    console.log(coins);
    return  amountTocoinsHelper(amount, coins, res);
}

var amountTocoinsHelper = function(amount, coins, res) {
    if (amount === 0) return res;
    let notValid = true;

    for (let i = 0; i < coins.length; i++) {
        if (amount >= coins[i]) {
            notValid = false;
        }
    }
    if (notValid) {
        res = [];
        console.log("not able to convert");
        return res;
    } else {
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] <= amount) {
                amount -= coins[i];
                res.push(coins[i]);
                break;
            }
        }
        amountTocoinsHelper(amount, coins, res);
    }
    return res;
}

console.log("Q14: "+ amountTocoins(46, [25, 10, 5, 2, 1]));
console.log("---------------------");

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result. 
var getExponent = function(b, n) {
    return b **n;
}
console.log("Q15: "+ getExponent(3,4));
console.log("Q15: "+ getExponent(10,-2));
console.log("---------------------");

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
var uniqueChar = function(s) {
    const set = new Set();
    const res = [];
    for (let i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (!set.has(c)) {
            res.push(c);
        }
        set.add(c);
    }
    return res.join("");
}
console.log("Q16: "+ uniqueChar("thequickbrownfoxjumpsoverthelazydog"));
console.log("---------------------");
// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
var countLetter = function(s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        map[c] = map[c] + 1 || 1;
    }
    return map;
}

function printKeys(map){
	for (var i = 0, keys = Object.keys(map), ii = keys.length; i < ii; i++) {
		val = map[keys[i]];
		if(typeof val === 'object'){
			printKeys(val);
		}else{
			console.log("letter: "+keys[i] + ' count: ' + map[keys[i]]);
		}
	}
}

console.log("Q17: " );
printKeys(countLetter("keep"));
console.log("---------------------");

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
var binarySearch = function(arr, target) {
    let l = 0;
    let r = arr.length -1;
    arr.sort();

    while ( l <= r) {
        let m = parseInt((r+l)/2);
        if (arr[m] === target) {
            return true;
        } else if (arr[m] > target) {
            r = m-1;
        } else {
            l = m+1;
        }

    }
    return false;
} 
console.log("Q18: "+ binarySearch([5,6,8,9,12,4,100,99], 12));
console.log("Q18: "+ binarySearch([5,6,8,9,12,4,100,99], 6));
console.log("Q18: "+ binarySearch([5,6,8,9,12,4,100,99], 99));
console.log("Q18: "+ binarySearch([5,6,8,9,12,4,100,99], 1));
console.log("---------------------");

// 19. Write a JavaScript function that returns array elements larger than a number. 
var largerThan = function(arr, target) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) {
            res.push(arr[i]);
        }
    }
    return res;
} 
console.log("Q19: "+ largerThan([5,6,8,9,12,4,100,99], 10));
console.log("---------------------");

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomId(len) {
    var res = "";
    var chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < len; i++ ) {  
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}
console.log("Q20: "+ randomId(10));
console.log("---------------------");

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
var subsets = function(arr, len) {
    let result = [];
    result.push([]);
    
    arr.forEach(a => {
    
      //array length
       let length = result.length;
        let i =0;
    
        while(i < length){
    
          let temp = result[i].slice(0);
          temp.push(a);
    
          result.push(temp);
          i++;
    
        }
    })
    
    
    return result.filter(sub=>sub.length >= len);
}
console.log("Q21: "+ subsets([1,2,3],2));
console.log("---------------------");
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' 
// Expected output : 3 
var countChar = function(s,c) {
    const map = countLetter(s);
    return map[c]? map[c]: 0;
}
console.log("Q22: "+ countChar('microsoft.com', 'o'));
console.log("---------------------");

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

var firstNoRepeat = function(s) {
    const map = countLetter(s);
    for (let c of s) {
        if (map[c] == 1) {
            return c;
        }
    }
    return "no none repeated character";
}
console.log("Q23: "+ firstNoRepeat('abacddbec'));
console.log("Q23: "+ firstNoRepeat('aabb'));
console.log("---------------------");

// 24. Write a JavaScript function to apply Bubble Sort algoÒrithm. 
var bubbleSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }

        }
    }
    return arr;
}
console.log("Q24: "+ bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
console.log("---------------------");

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
var longestCountry = function(strs) {
    var longest = 0;
    var res ="";
    var pos = -1;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > longest) {
            res = strs[i];
            longest = strs[i].length;
            pos = i;
        }

    }
    return strs[pos];
}
console.log("Q25: "+ longestCountry(["Australia", "Germany", "United States of America"]));
console.log("---------------------");

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let maxLen = 0;
    let currMax = 0;
    let res ="";
    const map = new Map();

    for (; end < s.length; end++) {
        let c = s.charAt(end);
        map[c] = map[c] + 1 || 1;
        currMax++;

        while(map[c] > 1) {
            var sc = s.charAt(start);
            map[sc] = map[sc] -1;
            if (map[sc] == 0) {
                map.delete(sc);
            }
            start++;
            currMax--;

        }
        maxLen = Math.max(maxLen,currMax);
        var tmp = s.slice(start, end+1);
    
        if (tmp.length >= maxLen) {
            maxLen = tmp.length;
            res = tmp;
        }

    }
    return res;
}
console.log("Q26: "+ lengthOfLongestSubstring("abcabcbb"));
console.log("---------------------");

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 

var longestPal = function(s) {
    let maxLen = 0;
    let maxSubStr = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            const sub = s.slice(i, j);
            if (isPalindrome(sub)) {
                if (maxLen < sub.length) {
                    maxLen = sub.length;
                    maxSubStr = sub;
                }
            }
        }
    }
    return maxSubStr;
}
console.log("Q27: "+ longestPal("abananananabb"));
console.log("---------------------");

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
var inner = function(name){
    return 'hello '+ name + " !";
}
var outer = function (a, func){
    console.log(func(a));
} 
console.log("Q28: ");
outer("word",inner);   
console.log("---------------------");   

// 29. Write a JavaScript function to get the function name. 
var getFunctionName = function() {
    return arguments.callee.name;
} 
console.log("Q29: "+ getFunctionName());


// 1
const reverseNumber = function (num) {
    let newNum = num.toString().split("").reduce((acc, cur) => cur + acc, "");
    return parseInt(newNum);
}
console.log("1. =>", reverseNumber(32243));  // should return 34223


// 2
const isPalindrome = function (str) {
    let sanitized = str.split("").reduce((acc, cur) => {
        if (cur.match(/[a-z]/i)) return acc + cur;
        else return acc;
    }, "").toLowerCase();
    let reversed = sanitized.split("").reduce((acc, cur) => cur + acc, "");
    return sanitized === reversed;
}
console.log("2. =>", isPalindrome("nurses run"));  // should return true


// 3
const allSubstrings = function (str) {
    var res = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            res.push(str.substring(i, j));
        }
    }
    return res;
}
console.log("3. =>", allSubstrings("dog").toString());  // should return d,do,dog,o,og,g


// 4
const sortString = function (str) {
    let arr = str.split("");
    arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    return arr.join("");
}
console.log("4. =>", sortString("webmaster"));  // should return abeemrstw


// 5
const firstLetterUpperCase = function (str) {
    return str.split("").reduce(
        (acc, cur, i) => {
            if (i == 0 || i > 0 && str.charAt(i - 1) === " ") {
                return acc + cur.toUpperCase();
            } else return acc + cur;
        }, ""
    );
}
console.log("5. =>", firstLetterUpperCase("the quick brown fox"));  // should return The Quick Brown Fox


// 6
const longestWord = function (str) {
    return str.split(" ").reduce(
        (acc, cur) => {
            if (cur.length > acc.length) return cur;
            else return acc;
        }, ""
    );
}
console.log("6. =>", longestWord("Web Development Tutorial"));  // should return Development


// 7
const countVowels = function (str) {
    return str.toLowerCase().split("").reduce(
        (acc, cur) => {
            if (cur === "a" || cur === "e" || cur ==="i" || cur === "o" || cur === "u") return acc + 1;
            else return acc;
        }, 0
    );
}
console.log("7. =>", countVowels("The quick brown fox"));  // should return 5


// 8
const isPrimeNumber = function (num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("8. =>", isPrimeNumber(97));  // should return true


// 9
const getType = function (a) {
    return typeof a;
}
console.log("9. =>", getType([]));  // should return object


// 10
const generateIdentityMatrix = function (n) {
    var res = [];
    for (let i = 0; i < n; i++) {
        var row = new Array(n).fill(0);
        row[i] = 1;
        res.push(row);
    }
    return res;
}
console.log("10. =>", JSON.stringify(generateIdentityMatrix(5)));  // should return [[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]


// 11
const secondSmallestAndSecondGreatest = function (arr) {
    if (arr.length < 2) return [];
    arr.sort();
    return [arr[1], arr[arr.length - 2]];
}
console.log("11. =>", secondSmallestAndSecondGreatest([1,2,3,4,5]).toString());  // should return [2,4]


// 12
const isPerfectNumber = function (num) {
    if (num < 6) return false;
    var sum = 1;
    for (let i = 2; i * 2 <= num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}
console.log("12. =>", isPerfectNumber(28));  // should return true


// 13
const getFactors = function (num) {
    if (num < 1) return [];
    var res = [];
    for (let i = 1; i * 2 <= num; i++) {
        if (num % i === 0) res.push(i);
    }
    res.push(num);
    return res;
}
console.log("13. =>", getFactors(28).toString());  // should return [1,2,4,7,14,28]


// 14
const coinChange = function (num, coins) {
    if (coins.length < 1 || num <= 0) return [];
    coins.sort((a, b) => b - a);
    var memo = {};
    function dfs (n) {
        if (n in memo) return memo[n].length > 0;
        for (let coin of coins) {
            if (coin == n) {
                memo[n] = [coin];
                return true;
            }
            if (coin < n) {
                if (dfs(n - coin)) {
                    memo[n] = [coin, ...memo[n - coin]];
                    return true;
                }
            }
        }
        memo[n] = [];
        return false;
    }
    if (dfs(num)) {
        return memo[num];
    } else return [];
}
console.log("14. =>", coinChange(46, [25,10,5,2,1]).toString());  // should return [25,10,10,1]


// 15
const computePower = function (b, n) {
    return b ** n;
}
console.log("15. =>", computePower(5, 5));  // should return 3125


// 16
const uniqueChars = function (str) {
    var showed = {};
    return str.split("").reduce(
        (acc, cur) => {
            if (cur in showed) {
                return acc;
            } else {
                showed[cur] = true;
                return acc + cur;
            }
        }, ""
    );
}
console.log("16. =>", uniqueChars("thequickbrownfoxjumpsoverthelazydog"));  // should return thequickbrownfxjmpsvlazydg


// 17
const countChars = function (str) {
    var res = {};
    str.split("").forEach(ch => {
        res[ch] = (res[ch] || 0) + 1;
    });
    return res;
}
console.log("17. =>", JSON.stringify(countChars("abbccc")));  // should return {"a":1,"b":2,"c":3}


// 18 The arr must be sorted as a prerequisite
const binarySearch = function (arr, num) {
    if (arr.length < 1) return -1;
    var lo = 0;
    var hi = arr.length - 1;
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === num) return mid;
        if (arr[mid] < num) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return arr[lo] === num ? lo : -1;
}
console.log("18. =>", binarySearch([1,4,10,100], 10));  // should return 2


// 19
const elementsLargerThan = function (arr, num) {
    return arr.filter(a => a > num);
}
console.log("19. =>", elementsLargerThan([1,2,3,4,5], 2).toString());  // should return [3,4,5]


// 20
const generateRandomStringId = function (n) {
    var candidates = [];
    for (let i = 65; i < 91; i++) candidates.push(String.fromCharCode(i));
    for (let i = 97; i < 123; i++) candidates.push(String.fromCharCode(i));
    for (let i = 48; i < 58; i++) candidates.push(String.fromCharCode(i));
    var res = "";
    for (let i = 0; i < n; i++) res += candidates[Math.floor(Math.random() * candidates.length)];
    return res;
}
console.log("20. =>", generateRandomStringId(62));   // should return a valid string id


// 21
const getSubsetsFixedLength = function (arr, n) {
    var showed = {};
    var keys = [];
    for (let num of arr) {
        if (!(num in showed)) keys.push(num);
        showed[num] = true;
    }
    if (keys.length < n || n <= 0) return [];
    var memo = {};
    function dfs (start, len) {
        if (len == 1) return [[keys[start]]];
        if (start in memo && len in memo[start]) return memo[start][len];
        var res = [];
        for (let next = start + 1; next + len - 1 <= keys.length; next++) {
            dfs(next, len - 1).forEach(a => {
                res.push([keys[start], ...a]);
            });
        }
        if (start in memo) memo[start][len] = res;
        else {
            memo[start] = {};
            memo[start][len] = res;
        }
        return res;
    }
    var res = [];
    for (let i = 0; i + n <= keys.length; i++) {
        res = [...res, ...dfs(i, n)];
    }
    return res;
}
console.log("21. =>", JSON.stringify(getSubsetsFixedLength([1,2,3], 2)));  // should return [[1,2],[1,3],[2,3]]


// 22
const countChar = function (str, ch) {
    if (ch.length !== 1) return -1;
    var res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ch) res += 1;
    }
    return res;
}
console.log("22. =>", countChar("microsoft.com", "o"));  // should return 3


// 23
const findFirstNonRepeatChar = function (str) {
    var once = {};
    str.split("").forEach(ch => once[ch] = (ch in once ? false : true));
    for (let i = 0; i < str.length; i++) {
        if (once[str.charAt(i)]) {
            return str.charAt(i);
        }
    }
    return "";
}
console.log("23. =>", findFirstNonRepeatChar("abacddbec"));  // should return e


// 24
const bubbleSortReversed = function (arr) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j] > arr[j - 1]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log("24. =>", bubbleSortReversed(
    [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
).toString());  // should return [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]


// 25
const longestElement = function (arr) {
    return arr.reduce((acc, cur) => {
        if (cur.length > acc.length) return cur;
        else return acc;
    }, "");
}
console.log("25. =>", longestElement(["Australia", "Germany", "United States of America"]));  // should return United States of America


// 26
const longestSubstringWithoutDuplicate = function (str) {
    if (str.length == 0) return "";
    var res = str.charAt(0);
    var start = 0;
    var showed = {};
    for (let end = 0; end < str.length; end++) {
        let ch = str.charAt(end);
        if (!showed[ch]) {
            showed[ch] = true;
        } else {
            if (end - start > res.length) res = str.substring(start, end);
            for (; start < end; start++) {
                let chToDelete = str.charAt(start);
                showed[chToDelete] = false;
                if (chToDelete === ch) {
                    showed[chToDelete] = true;
                    start++;
                    break;
                }
            }
        }
    }
    if (str.length - start > res.length) res = str.substring(start, str.length);
    return res;
}
console.log("26. =>", longestSubstringWithoutDuplicate("pwwkew"));  // should return wke


// 27
const longestPalindromes = function (str) {
    if (str.length < 2) return str;
    var res = [str.charAt(0)];
    var center = Math.floor(str.length / 2);
    searchBoth(center);
    for (let offset = 1;; offset++) {
        let newCenter1 = center - offset;
        let flag1 = Math.min(newCenter1 + 1, str.length - newCenter1) * 2 >= res[0].length;
        if (flag1) searchBoth(newCenter1);
        let newCenter2 = center + offset;
        let flag2 = Math.min(newCenter2 + 1, str.length - newCenter2) * 2 >= res[0].length;
        if (flag2) searchBoth(newCenter2);
        if (!flag1 && !flag2) break;
    }
    return res;
    function searchBoth (center) {
        let oddOffset = searchOdd(center);
        if (oddOffset * 2 + 1 > res[0].length) res = [str.substring(center - oddOffset, center + oddOffset + 1)];
        else if (oddOffset * 2 + 1 == res[0].length) res.push(str.substring(center - oddOffset, center + oddOffset + 1));
        let evenOffset = searchEven(center);
        if (evenOffset * 2 + 2 > res[0].length) res = [str.substring(center - evenOffset, center + evenOffset + 2)];
        else if (evenOffset * 2 + 1 == res[0].length) res.push(str.substring(center - evenOffset, center + evenOffset + 2));
    }
    function searchOdd (center) {
        var offset = 1;
        for (; center - offset >= 0 && center + offset < str.length; offset++) {
            if (str.charAt(center - offset) !== str.charAt(center + offset)) break;
        }
        return offset - 1;
    }
    function searchEven (center) {
        var offset = 0;
        for (; center - offset >= 0 && center + offset + 1 < str.length; offset++) {
            if (str.charAt(center - offset) !== str.charAt(center + offset + 1)) break;
        }
        return offset - 1;
    }
}
console.log("27. =>", longestPalindromes("abracadabra").toString());  // should return [aca,ada]


// 28
const simpleCallback = function (cb) {
    return cb(1, 2);
}
function add(a, b) {
    return a + b;
}
console.log("28. =>", simpleCallback(add));  // should return 3


// 29
const getFunctionName = function (fn) {
    return fn.name;
}
console.log("29. =>", getFunctionName(add));  // shoudl return add
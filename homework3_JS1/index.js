//Q1
const reverseNumber = (num) => {
    let str = num.toString();
    return Number.parseInt(str.split("").reverse().join(""))
}

console.log(reverseNumber(32243));


//Q2
const checkPalindrome = (str) => {
    return str.split("").reverse().join("")===str
}
console.log(checkPalindrome("abba"));


//Q3
const allCombinations = (str) => {
    let ans = []
    for (let i = 0; i < str.length; i++){
        for (let j = i; j < str.length; j++){
            ans.push(str.slice(i,j+1))
        }
    }
    return ans
}

console.log(allCombinations("dog"));

//Q4
const orderString = (str) => {
    let arr = str.split("")
    arr.sort((a,b) => {
        if (a < b) return -1
        else 1
    })
    return arr.join("")
}

console.log(orderString('webmaster' ));

//Q5
const upperCaseString=(str) => {
    let arr = str.split(" ")
    for (let i in arr) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr.join(" ")
}

console.log(upperCaseString("the quick brown fox"));
//Q6
const longestWord = (str) => {
    let arr = str.split(" ")
    let index = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > arr[index].length) {
            index = i;
        }
    }
    return arr[index]
}

console.log(longestWord('Web Development Tutorial'));

//Q7
const countVowel = (str) => {
    let vowel = new Set("aeiouAEIOU")
    let count = 0
    for (let ch of str) {
        if (vowel.has(ch)) {
            count++
        }
    }
    return count
}

console.log(countVowel("The quick brown fox"));
//Q8
const isPrime = (num) => {
    if (n <= 3) return n > 1
    let sqrt = Math.sqrt(num)
    for (let i = 2; i <= sqrt; i++){
        if(num%i===0)return False
    }
    return True
}

//Q9

const typeCheck = (data) => {
    if (data === true || data===false) return "boolean"
    return typeof data
}

console.log(typeCheck(true));
console.log(typeCheck(null));
console.log(typeCheck(undefined));
console.log(typeCheck(111));
console.log(typeCheck("1111"));
console.log(typeCheck({}));

//Q10

const identityMatrix = (n) => {
    let arr = (new Array(n).fill(0).map((v, index) => {
        return new Array(n).fill(0)
    }))
    for (let i = 0; i < n; i++){
        arr[i][i]=1
    }
    return arr
}

console.log(identityMatrix(5));
// let arr = (new Array(2).fill(1)).map((v,index)=>{
//     return new Array(3).fill(0)
// })
// console.log(arr);

//Q11
const secondNumber = (arr) => {
    let ans = []
    return [arr[1],arr[arr.length-2]]
}

console.log(secondNumber([1]));

//Q12
const isPerfectNumber = (num) => {
    let total = 1
    let mid = Math.sqrt(num)
    for (let i = 2; i <= mid; i++){
        if (num % i === 0) {
            total += i
            total += num / i
        }
    }
    if (total === num) return true
    return false
}

console.log(isPerfectNumber(8128));

//Q13
const getFactors = (num) => {
    let mid = Math.sqrt(num)
    let ans=[]
    for (let i = 1; i <= mid; i++){
        if (num % i === 0) {
            ans.push(i)
            ans.push(num / i) 
        }
    }
    return ans
}

console.log(getFactors(48));



//Q14

const getCoins = (num,coins) => {
    let ans = []
    function dfs(n,cur) {
        if (n === 0) {
            ans.push(cur)
            return true
        }
        for (let coin of coins) {
            if (n - coin >= 0) {
                cur.push(coin)
                if(dfs(n - coin, cur))return true
                cur.pop()
            }
        }
    }
    if(dfs(num,[]))return ans[0]
}

console.log(getCoins(48,[25,10,5,2,1]));

//Q15
const getBN = (b, n) => {
    let ans = b
    for (let i = n; i > 1; i--){
        ans=ans*b
    }
    return ans
}

console.log(getBN(2,4));

//Q16
const uniqueCharacters = (str) => {
    let ch = new Set()
    let ans = ""
    for (let c of str) {
        if (ch.has(c)) continue
        else {
            ch.add(c)
            ans += c
        }
    }
    return ans
}
console.log(uniqueCharacters( "thequickbrownfoxjumpsoverthelazydog"));


//Q17
const counterCharacters = (str) => {
    let dic = {}
    for (const c of str) {
        if (c in dic) dic[c]++
        else dic[c]=1
    }
    return dic
}
console.log(counterCharacters("hequickbrownfoxjumpsoverthelazydog"));



//Q18
const binarySearch = (arr,target) => {
    arr.sort((a,b) => {
        return a-b
    })
    let i = 0, j = arr.length - 1
    let mid
    while (i <= j) {
        mid = Math.floor((i + j) / 2)
        if (arr[mid] === target) return mid
        else if (arr[mid] > target) { j = mid - 1 }
        else i=mid+1
    }
    return -1
}
console.log(binarySearch([1, 2, 3, 5, 6], 3));
console.log(binarySearch([1,2,3,5,6],6));
console.log(binarySearch([1,2,3,5,6],10));
//Q19

const largerNumber = (arr, target) => {
    let ans = []
    for (const num of arr) {
        if(num>target)ans.push(num)
    }
    return ans
}

console.log(largerNumber([1,2,3,4,5,6],3));

//Q20
const randomId = (n) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    tmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let id = ""
    for (let i = 0; i < n; i++){
        id+=tmp[getRandomInt(tmp.length)]
    }
    return id
}


console.log(randomId(5));

//Q21
const getCombinations = (arr,k) => {
    let ans = []
    function helper(cur, start) {
        if (cur.length === k) {
            ans.push([...cur])
        }
        for (let i = start; i<arr.length; i++){
            cur.push(arr[i])
            helper(cur, i + 1)
            cur.pop()
        }
    }
    helper([],0)
    return ans
}

console.log(getCombinations([1,2,3],2) );

//Q22
const countNumber = (str, ch) => {
    let count = 0
    for (const c of str) {
        if (ch === c) {
            count++
        }
    }
    return count
}

//Q23
const firstUnique = (str) => {
    let dic = new Set()
    let arr=[]
    for (let ch of str) {
        if (!dic.has(ch)) {
            arr.push(ch)
            dic.add(ch)
        } else {
            let idx = arr.indexOf(ch)
            if (idx !== -1) arr.splice(idx, 1)
        }
    }
    return arr[0]
}

console.log(firstUnique('abacddbec'));

//Q24
const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--){
        for (let j = 1; j <=i; j++){
            if (arr[j] < arr[j - 1]) {
                let tmp = arr[j]
                arr[j] = arr[j - 1]
                arr[j-1]=tmp
            }
        }
    }
    return arr.reverse()
}

console.log(bubbleSort( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//Q25

const longestName = (arr) => {
    let ans = arr[0]
    for (let item of arr) {
        if (item.length > ans.length) {
            ans=item
        }
    }
    return ans
}

console.log(longestName(["Australia", "Germany", "United States of America"]));

//Q26
const longestSubString = (str) => {
    let start = 0;
    let dic = {};
    let ans="";
    for (let i = 0; i < str.length; i++){
        if (str[i] in dic) {
            start=Math.max(dic[str[i]]+1,start);
        }
        dic[str[i]]=i;
        if (i - start + 1 > ans.length) {
            ans=str.slice(start,i+1);
        }
    }
    return ans
}

console.log(longestSubString("abcabcbbbbbb"));

//Q27

const longestPalindrome = (s) => {
    let n = s.length
    let dp = new Array(n).fill(0).map((v, index)=> {
        return new Array(n).fill(0)
    })
    let ans = 0;
    for (let l = 0; l < n; l++){
        for (let i = 0; i < n - l; i++){
            let j=i+l
            if (l <= 1) {
                if (s[i] === s[j]){
                    dp[i][j] = j-i+1
                    ans=Math.max(j-i+1,ans)
                }
            } else {
                if (s[i] === s[j] && dp[i + 1][j - 1]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2
                    ans=Math.max(j-i+1,ans)
                }
            }
        }
    }
    let res = []
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if(dp[i][j]===ans) res.push(s.slice(i,j+1))
        }
    }
    return res
}

console.log(longestPalindrome("banana"));


//Q28

function add(num, Callback)
{
    Callback();  
}

//Q29
function getName(fun) {
    return fun.name
}

function adddddd() {
    console.log(111);
}
console.log(getName(adddddd));
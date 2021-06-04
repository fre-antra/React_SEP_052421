const function1 = (number) => {
    return (
        parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)
    )
}

console.log(function1(12345));

const function2 = (word) => {
    const nospace = word.replace(/\s+/g, '');
    const reverse = nospace.split('').reverse().join('');

    return reverse == nospace;
}

console.log(function2("nurses run"));

const function3 = (word) => {
    list = new Array();
    for (i = 0; i < word.length; i++) {
        for (j = i + 1; j < word.length + 1; j++) {
            list.push(word.slice(i, j));
        }
    }
    return list;
}

console.log(function3("dog"));

const function4 = (word) => {
    return word.split('').sort().join('');
}

console.log(function4("webmaster"));

const function5 = (phrase) => {
    const words = phrase.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}

console.log(function5("the quick brown fox"));

const function6 = (phrase) => {
    const words = phrase.split(' ');
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(function6("Web Development Tutorial"));

const function7 = (phrase) => {
    const words = phrase.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return words.filter(value => vowels.includes(value)).length;
}

console.log(function7('The quick brown fox'));

const function8 = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(function8(7));

const function9 = (arg) => {

    return typeof arg;
}

console.log(function9({ test: '1' }));
console.log(function9(true));

const function10 = (size) => {
    let arr = new Array(size);

    for (let i = 0; i < size; i++) {
        let arr2 = new Array(size);
        for (let j = 0; j < size; j++) {
            if (j === i) {
                arr2[j] = 1;
            }
            else {
                arr2[j] = 0;
            }
        }
        arr[i] = arr2;
    }

    return arr;
}

console.log(function10(3));

const function11 = (arr) => {
    const sorted = arr.sort();

    return arr[1] + ',' + arr[arr.length - 2];
}

console.log(function11([1, 2, 3, 4, 5]));

const function12 = (num) => {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num && sum != 0;
}

console.log(function12(28));

const function13 = (num) => {
    let arr = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(function13(20));

const function14 = (amount, coins) => {
    let arr = [];

    let price = 0;
    while (amount != 0) {
        if (amount - coins[price] >= 0) {
            arr.push(coins[price]);
            amount -= coins[price];
        } else {
            price++;
        }
    }

    return arr;
}

console.log(function14(46, [25, 10, 5, 2, 1]));

const function15 = (b, n) => {

    return Math.pow(b, n)
}

console.log(function15(5, 4));

const function16 = (phrase) => {

    return String.prototype.concat(...new Set(phrase))
}

console.log(function16("thequickbrownfoxjumpsoverthelazydog"));

const function17 = (phrase) => {
    let arr = new Array(26).fill(0);
    for (let i = 0; i < phrase.length; i++) {
        arr[phrase.charCodeAt(i) - 97]++;
    }

    return arr;
}

console.log(function17("thequickbrownfoxjumpsoverthelazydog"));

const function18 = (arr, target) => {
    if (arr.length === 1) {
        if (arr[0] === target) {
            return true;
        } else {
            return false;
        }
    }

    const half = Math.ceil(arr.length / 2);
    const left = function18(arr.slice(0, half), target);
    const right = function18(arr.slice(-half), target);

    return left || right;
}

console.log(function18([1, 2, 3, 4, 5], 2))

const function19 = (arr, target) => {
    let ret = [];

    for (const num of arr) {
        if (num > target) {
            ret.push(num);
        }
    }
    return ret;
}

console.log(function19([1, 2, 3, 4, 5], 2));

const function20 = (length) => {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = ' ';
    const cLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * cLength));
    }

    return result;
}
console.log(function20(7));

const recurse21 = (arr) => {
    if (arr.length === 1) return [arr];
    else {
        subarr = recurse21(arr.slice(1));
        return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
    }
}

const function21 = (arr, size) => {
    return recurse21(arr).filter(a => a.length === size);
}

console.log(function21([1, 2, 3], 2));

const function22 = (phrase, letter) => {
    const lets = phrase.split('');

    let count = 0;
    for (l of lets) {
        if (l === letter) {
            count++;
        }
    }
    return count;
}

console.log(function22("microsoft.com", "o"));

const function23 = (phrase) => {
    const count = function17(phrase);

    let unique = [];
    for (let in count) {
        if (count[let] === 1) {
            unique.push(String.fromCharCode(97 + parseFloat(let)));
        }
    }

    return phrase.split('').filter(value => unique.includes(value))[0];
}

console.log(function23("abacddbecf"));

const function24 = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(function24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

const function25 = (arr) => {
    let ret = "";
    for (country of arr) {
        if (country.length > ret.length) {
            ret = country;
        }
    }

    return ret;
}

console.log(function25(["Australia", "Germany", "United States of America"]));

const function26 = (phrase) => {

    let start = 0, end = 0, set = new Set(), ansLen = 0, string = "";
    while (end < phrase.length) {
        if (!set.has(phrase[end])) {
            set.add(phrase[end]);
            ansLen = Math.max(ansLen, end - start + 1);
            if (ansLen > end - start + 1) {
                ansLen = ansLen;
            } else {
                ansLen = end - start + 1;
                if (string.length < ansLen) {
                    string = phrase.substr(start, ansLen);
                }
            }
            end++;
        } else {
            set.delete(phrase[start]);
            start++;
        }
    }
    return string
};

console.log(function26("absabsdfa"));

const isPalindrom = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (arr[i] !== arr[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
}

const function27 = (phrase) => {
    let len = phrase.length;
    while (len > 0) {
        for (let i = 0; i < phrase.length - len + 1; i++) {
            let str = phrase.slice(i, i + len);
            if (isPalindrom(str)) {
                return str;
            }
        }
        len--;
    }
    return "";
}

console.log(function27("adabbaadc"))

const function28 = (func) => {
    func();
    return "other function"
}

console.log(function28(() => console.log("passing function")));

function function29() {
    return arguments.callee.name;
}

console.log(function29());
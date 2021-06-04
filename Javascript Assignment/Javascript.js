//Q1
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(32243));

//Q2
function isPalindrome(string) {
  let left = 0;
  let right = string.length-1;
  while (left < right) {
    if(string[left] !== string[right]) return false;
    left += 1;
    right -= 1;
  }
  return true
}
console.log(isPalindrome('1221'));
console.log(isPalindrome('123'));

//Q3
function combOfString(string) {
  const result = [];
  const length = string.length;
  for (let i=0; i<length; i++){
    let curr = "";
    for (let j=i; j<length; j++){
      curr = curr+string[j];
      result.push(curr);
    }
  }
  return result;
}
console.log(combOfString("dog"));

//Q4
function sortString(str) {
  return str.split('').sort().join('');
}
console.log(sortString("bac"));

//Q5
function upperCaseString(string) {
  const array = string.split(' ');
  for (let i=0; i<array.length; i++){
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  return array.join(' ');
}
console.log(upperCaseString("work tea"));

//Q6
function longestString(string) {
  const array = string.split(' ');
  let longest = array[0];
  for(let string of array){
    if(string.length > longest.length){
      longest = string;
    }
  }
  return longest;
}
console.log(longestString("Web Development Tutorial"));

//Q7
function countVowel(string) {
  const vowel = ['a','e','i','o','u','A','E','I','O','U'];
  let count = 0; 
  for (let cha of string){
    if (vowel.includes(cha)) count += 1;
  }
  return count;
}
console.log(countVowel("the quick brown fox"));

//Q8
function isPrime(num) {
  for (let i=2; i<num; i++) {
    if (num%i == 0) return false;
  }
  return true;
}
console.log(isPrime(2));
console.log(isPrime(4));

//Q9
function checkType(arg) {
    return typeof arg;
}

//Q10
function identityMatrix(n) {
  matrix = new Array(n);
  console.log(matrix);
  for (let i=0; i<n; i++) {
    matrix[i] = new Array(n);
  }
  console.log(matrix);
  for (let i=0; i<n; i++) {
      for (let j=0; j<n; j++){
        if (i===j) matrix[i][j] = 1;
        else matrix[i][j] = 0;
      }
  }
  return matrix;
}
console.log(identityMatrix(3));

//Q11
function findSecond(arr) {
  if (arr.length < 2) return null;
  arr.sort();
  return [arr[1],arr[arr.length-2]];
}
console.log(findSecond([1,2,3,4,5]));

//Q12
function isPerfect(num) {
  let sum = 0;
  for(let i=1; i<num; i++){
    if (num%i === 0) sum +=i;
  }
  return sum === num;
}
console.log(isPerfect(496));

//Q13
function computeFactors(num) {
  const factor = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  return factor;
};
console.log(computeFactors(32));

//Q14
function amountTocoins(amount, coins) {
  let index = 0;
  const result = [];
  while (amount > 0){
    if (amount >= coins[index]) {
      amount -= coins[index];
      result.push(coins[index]);
    }else{
      index += 1;
    }
  }
  return result;
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

//Q15
function exponent(b, n) {
  return Math.pow(b,n);
};
console.log(exponent(3, 2));

//Q16


















































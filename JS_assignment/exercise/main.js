// 1
const reverseNumber = (num) => {
  let tmp = Math.abs(num).toString().split("");
  let reversed = tmp.reverse().join("");
  return reversed;
};

// console.log(reverseNumber(32243));

// ====================================================
// 2
const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === " ") {
      left++;
      continue;
    }

    if (str[right] === " ") {
      right--;
      continue;
    }

    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};

// console.log(isPalindrome("nurses run"));

// ====================================================
// 3
const strCombinations = (str) => {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      output.push(str.slice(i, j));
    }
  }
  return output;
};

// console.log(strCombinations("dog"));

// ====================================================
// 4

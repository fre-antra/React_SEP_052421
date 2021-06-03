function f1(str) {
  return str.split('').reverse().join('');
}

function f2(str) {
  return str === str.split('').reverse().join('');
}

function f3(str) {
  let result = [];
  if (str.length <= 1) {
    return [str];
  } else {
    for (let i = 0; i < str.length; i++) {
      let c = str[i];
      let newStr = s.slice(0, i) + str.slice(i + 1, s.length);
      let l = f3(newStr);

      for (let j = 0; j < l.length; j++) {
        let tmp = c + l[j];
        result.push(tmp);
      }
    }
  }
  return result;
}

function f4(str) {
  return str.split('').sort().join((''));
}

function f5(str) {
  return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
}

function f6(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0];
}

function f7(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

function f8(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function f9(arg) {
  return typeof arg;
}

function f10(matrix) {

}

function f11(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[1]);
  console.log(arr[arr.length - 2]);
}

function f12(num) {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }
  return temp === num && temp !== 0;
}

function f13(num) {
  let num_factors = [], i;

  for (i = 1; i <= Math.floor(Math.sqrt(num)); i++)
    if (num % i === 0) {
      num_factors.push(i);
      if (num / i !== i)
        num_factors.push(num / i);
    }
  num_factors.sort((x, y) => x - y);
  return num_factors;
}

function f14(amount, coins) {
  let left;
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = (amount - coins[0]);
      return [coins[0]].concat(f14(left, coins));
    } else {
      coins.shift();
      return f14(amount, coins);
    }
  }
}

function f15(b, n) {
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    temp *= b;
  }
  return temp;
}

function f16(str) {
  return [...new Set(str.split(''))].join('')
}

function f17(str) {
  let map = {}
  for (const s of str) {
    if (!map[s]) {
      map[s] = 1;
    } else {
      map[s]++;
    }
  }
  return map;
}

function f18(arr, target) {
  let h = arr.length - 1, l = 0, m = 0;
  while (l <= h) {
    m = l + ((h + l) >> 1);
    if (arr[m] === target) {
      return m;
    }
    if (target > arr[m]) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return false;
}

function f19(arr, num) {
  return arr.filter(x => x > num);
}

function f20(random) {
  let text = '', char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < random; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}

function f21(arr, size) {
  let res = [[]]
  for (let i = 0; i < arr.length; i++) {
    const temp = res.map(subset => {
      const one = subset.concat([]);
      one.push(arr[i]);
      return one;
    })
    res = res.concat(temp);
  }
  return res.filter(x => x.length === size);
}

function f22(str, letter) {
  let res = 0;
  for (const s of str) {
    if (s === letter) {
      res++;
    }
  }
  return res;
}

function f23(str) {
  for (let i = 0; i < str.length; i++) {
    let s = str[i]
    if (str.indexOf(s) === i && str.indexOf(s, i + 1) === -1) {
      return s
    }
  }
  return null;
}

function f24() {
  
}
function f1(str) {
  return str.split('').reverse().join('')
}

function f2(str) {
  return str === str.split('').reverse().join('')
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
  return result
}

function f4(str) {
  return str.split('').sort().join((''))
}

function f5(str) {
  return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
}

function f6(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0]
}

function f7(str) {
  let vowelsCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++
    }
  }
  return vowelsCount
}

function f8(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function f9(arg) {
  return typeof arg
}

function f10(matrix) {

}
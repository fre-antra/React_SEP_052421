/* 
mySome, myEvery, myReduce

mySome: The some() method tests whether "at least one element"in the array passes the 
test implemented by the provided function.

myEvery: The every() method tests whether all elements in the array pass the test 
implemented by the provided function. It returns a Boolean value.

myReduce: The reduce() method executes a reducer function (that you provide) on 
each element of the array, resulting in a single output value.
*/

const test1= [3, 5, 9, 11];
const test2= [3, 2, 9, 11];
/* --some-- */
Array.prototype.mySome = function(callback) {
  for (let ele of this) {
    if (callback(ele)) return true;
  }
  return false;
}

const even = (element) => {
  return element % 2 === 0;
}
console.log(test1.mySome(even))
console.log(test2.mySome(even))

const test3 = [3, 9, 5, 11];
const test4 = [1, 2, 5, 11];
/* --every-- */
Array.prototype.myEvery = function (callback) {
  for (let ele of this) {
    if (!callback(ele)) return false;
  }
  return true;
};

const odd = (element) => {
  return element % 2 !== 0;
};
console.log(test3.myEvery(odd));
console.log(test4.myEvery(odd));


const test5 = [1, 2, 3, 4];
const test6 = [2, 4, 6, 10];
/* --reduce-- */
Array.prototype.myReduce =function(callback, accumulator) {
  for (let ele of this) {
    if (accumulator === undefined) {
      accumulator = ele;
    } else {
      accumulator = callback(accumulator, ele);
    }
  }
  return accumulator;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(test5.myReduce(reducer, 0))
console.log(test6.myReduce(reducer))

/* forEach */
Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
const multipleByTwo = (item) => console.log(item * 2);
console.log([1, 2, 3, 4].myForEach(multipleByTwo));

/* map */

Array.prototype.myMap = function(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}

const multipleByThree = (item) => item * 3;
console.log([1, 2, 3, 4].myMap(multipleByThree));

/*  filter  */
Array.prototype.myFilter = function(callback) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      ans.push(this[i]);
    }
  }
  return ans;
}

const evenNumber = (item) => item % 2 === 0;
console.log([1, 2, 3, 4].myFilter(evenNumber));
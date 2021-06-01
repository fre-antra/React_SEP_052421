/* 
mySome, myEvery, myReduce

mySome: The some() method tests whether "at least one element"in the array passes the 
test implemented by the provided function.

myEvery: The every() method tests whether all elements in the array pass the test 
implemented by the provided function. It returns a Boolean value.

myReduce:   Reduces an array or object to a single value by repetitively calling iterator(accumulator, item) for each item. 
Accumulator should be the return value of the previous iterator call.

*/

const test1= [3, 5, 9, 11];
const test2= [3, 2, 9, 11];

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


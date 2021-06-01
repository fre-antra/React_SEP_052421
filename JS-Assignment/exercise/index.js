/* 
mySome, myEvery, myReduce

mySome: The some() method tests whether "at least one element"in the array passes the test implemented by the provided function.
myEvery: determine whether all of the elements match a truth test.
myReduce:   Reduces an array or object to a single value by repetitively calling iterator(accumulator, item) for each item. 
Accumulator should be the return value of the previous iterator call.

*/

const test1= [3, 5, 9, 11];

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
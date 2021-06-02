const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];

Array.prototype.mySome = function(callback){
  let flag = false;
  for (let i = 0; i < this.length; i++)
  {
    flag |= callback(this[i], this, i);
  }
  return flag;
}

Array.prototype.myEvery = function(callback){
  let flag = true;
  for (let i = 0; i < this.length; i++)
  {
    flag &= callback(this[i], this, i);
  }
  return flag;
}

Array.prototype.myReduce = function(callback, init){
  let acc = init||this[0];
  for (let i = init?0:1; i < this.length; i++)
  {
    acc = callback(acc, this[i], this, i);
  }
  return acc;
}

console.log(arr1.myEvery(item=>item>=1));
console.log(arr1.mySome(item=>item>=5));
console.log(arr2.myReduce((acc,item)=>acc+item+item));
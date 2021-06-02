/*

    Custom myReduce prototype function
    Author: Chirra Reddy Sai Sankeerth Reddy

*/

//Testing reduce and myReduce for multiple array types
const arr = [1,2,3,4,5,6,7,8,9,10];
const initialValue = 0;

const stringArr = ['a','b','c'];
const initStringVal = 'dd';

const mixedArr = ['a', 1, 2, false];

//myReduce function
//Giving init default values if initialvalue is not provided.
Array.prototype.myReduce = function(callbackfn, init=0 || '') {
    var reduceSum = init;
    for (let i=0; i < this.length; i++){
        reduceSum = callbackfn(reduceSum,this[i],i,this);
    }
    return reduceSum;
}

//Regular number array sum using reduce and myReduce
//builtin reduce function cum+cur
const arrReduce = arr.reduce((cum, cur, ind, array) => cum+cur,initialValue);
console.log("Result using regular reduce: "+arrReduce);

//myReduce function
const arrMyReduce = arr.myReduce((cum,cur,ind,array) => cum+cur,initialValue);
console.log("Result using myReduce function: "+arrMyReduce+"\n");


//String array using reduce and myReduce
//builtin reduce function cum+cur+cur
const arrReduceString = stringArr.reduce((cum, cur, ind, array) => cum+cur+cur,initStringVal);
console.log("Result using regular reduce: "+arrReduceString);

//myReduce function
const arrMyReduceString = stringArr.myReduce((cum,cur,ind,array) => cum+cur+cur,initStringVal);
console.log("Result using myReduce function: "+arrMyReduceString+"\n");


//Regular number array sum using reduce and myReduce
//builtin reduce function cum+cur
const mixedArrReduce = mixedArr.reduce((cum,cur) => cum+cur);
console.log("Result using regular reduce: "+mixedArrReduce);

//myReduce function
const mixedArrMyReduce = mixedArr.myReduce((cum,cur) => cum+cur);
console.log("Result using myReduce function: "+mixedArrMyReduce+"\n");



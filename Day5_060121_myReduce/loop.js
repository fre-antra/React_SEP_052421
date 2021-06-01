// const arr = [1,2,3];

// // use `in` for indices
// for (let i in arr) {
//     console.log(i, arr[i]);
// }

// // use `of` for items
// for (let num of arr) {
//     console.log(num);
// }


// const obj = {name: "Jojo", age: 18};

// // use `in` for keys
// for (let key in obj) {
//     console.log(key, obj[key]);
// }
// // cannot use `of` for object


// arr.forEach((num, i, array) => {
//     array[i] = num * 2;
// });
// // map can create a new array
// const newArr = arr.map((num, i, array) => {
//     array[i] = num + 100;
//     return num + 100;
// });
// console.log(newArr.reduce((acc, cur) => acc + " " + cur), "");


// Array.prototype.myForEach = function(cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i], i, this);
//     }
// }
// Array.prototype.myMap = function(cb) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i], i, this));
//     }
//     return arr;
// }
// Array.prototype.myFilter = function(cb) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }
Array.prototype.myReduce = function(cb, val) {
    for (let i = 0; i < this.length; i++) {
        val = cb(val, this[i], i, this);
    }
    return val;
}

const strArr = ['a', 'b', 'c'];
console.log(strArr.reduce((acc, cur, i, arr) => acc + cur + cur, 'dd'));
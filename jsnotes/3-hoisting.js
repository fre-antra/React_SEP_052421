/*
console.log(a); // undefined
var a = 2;
*/

/*
equals to:
var a;
console.log( a );
a = 2;
*/

// 2. function expression wont be hoisting
//    function declaration will be hoisting

/*
foo();
function foo() {
  console.log(a); // undefined
  var a = 2;
}
*/

/*
foo(); // not ReferenceError, but TypeError!
var foo = function bar() {
  console.log("FUNC HOISTING");
};
*/

/*
foo(); // undefined
//bar(); // bar is not defined
var foo = function bar() {
  //console.log(bar); //[Function: bar]
};
foo();
//console.log(foo); //[Function: bar]
//console.log(bar); // bar is not defined
*/

/*
equals to:

var foo;
foo(); 
bar(); 
foo = function() {
var bar = ...self...
// ...
}
*/

// 3. func hoisting is first, then vars
/*
foo2(); // 3 override 
var foo2;
function foo2() {
  console.log(1);
}
foo2 = function () {
  console.log(2);
};
function foo2() { 
  console.log( 3 );
}
*/

/*
equals to :
function foo2() {
  console.log(1);
}
var foo2; // redeclare a symbol will be omitted!!!! [Function: foo2]

foo2();
console.log(foo2);
foo2 = function () {
  console.log(2);
};
*/

//
//
//
//
//
//

//shit code !!!!
//foo3();  TypeError: foo3 is not a function
var a = true;
if (a) {
  function foo3() {
    console.log("a");
  }
} else {
  function foo3() {
    console.log("b");
  }
}

// 1. JS use 64-bits only!

// 2. Infinity : positive infinities
//    -Infinity : negative infinities
//    NaN : not a number,even though it is a value of the number type

// 3. type coercion : automatically implicit conversion
console.log(8 * null); // → 0
console.log("5" - 1); // → 4
console.log("5" + 1); // → 51
console.log("five" * 2); // → NaN
console.log(false == 0); // → true

// not a number cannot be convert to a number only get NaN,
// doing arithmetic operations to a NaN also produces a NaN

console.log(null == undefined); // → true
console.log(null == 0); // → false

// 4. short-circuit evaluation

let X = "test";
console.log(true || X); //X is never evaluated.
console.log(false && X); //X is never evaluated.

// 5. Expressions and Statements
//    A fragment of code that produces a value is called an expression
//    If an expression corresponds to a sentence fragment,
//    a JavaScript statement corresponds to a full sentence.
//    A program is a list of statements.

// 6. binding : variables, does not own the values but bind to them.

// 7. hoisting

console.log(notyetdeclared);
// 'undefined', hoisted notyetdeclared is
// registered but not defined yet

var notyetdeclared = "now it is declared";
// notyetdeclared defined

hoisting();
// registered and defined and hoisted

function hoisting() {
  console.log(notyetdeclared);
  // 'undefined'
  // function is hoisted before than vars

  var notyetdeclared = "declared differently";

  console.log(notyetdeclared);
  // 'declared differently'
}

// class no hoisting

// 7. redeclared in sub scopes works
let a = 1;
function foo() {
  let a = 2;
  console.log(a);
}

foo();

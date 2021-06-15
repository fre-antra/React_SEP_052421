//0. this review
/*
console.log(this);
this.a = 10086;

let a = (function () {
  function p() {
    console.log(this);
  }

  const pp = () => {
    console.log(this);
  };

  return {
    p: p,
    pp: pp,
  };
})();

let b = (() => {
  function p() {
    console.log(this);
  }

  const pp = () => {
    console.log(this);
  };

  const ppp = () => {
    console.log(this, this === module.exports);
  };

  return {
    p: p,
    pp: pp,
    ppp: ppp,
  };
})();

a.p(); // { p: [Function: p], pp: [Function: pp] }
a.pp(); // global object, because this anonymous
// function that assign to a's this at
// this calling is global object

b.p(); // { p: [Function: p], pp: [Function: pp] }
b.pp(); // { a: 10086 }, because outter is still an arrow function,
// the outer of outer is the same scope as the global this
// which is empty{} defaultly

//
// => arrow function does not have this attribute!!!!!
// it has to do the static lhs to jump to a
// larger static scpoe again and again until
// js finds a scope that has this attribute!!!!
//
// that is the reason why arrow in arrow's this is global!!!!


//
//
//
// Addition:

// 1. the global object is the caller for all global scope func and vars!!!!
//    that's why the anonymous func a's caller(which has this) is the global obj

// 2. for module, this equals to the module.exports!!!!!
//    that's why the arrow func b do lhs will find current module.exports
//    context, which is current module's context with this attribute.!!!!

console.log(this, this === module.exports); // { a: 10086 } true
b.ppp(); // { a: 10086 } true
*/

//
//
//
//
//
//
//

// 1. null
console.log(typeof null); //object
// In js, data start with 000xxxxx will be recognized as object
// but null is all 0, so......
// null is not an object but simple primitive type!!!!

//
//
//
//
//

// 2. primitive wrapper object
// a kind of constructor which can return a primitive type data!!!!

// both string type cannot change a char
var strPrimitive = "I am a string";
typeof strPrimitive; // "string"
console.log(strPrimitive instanceof String); // false
strPrimitive[0] = "z";
console.log(strPrimitive); // I am a string

var strObject = new String("I am a string");
typeof strObject; // "object"
console.log(strObject instanceof String); // true

Object.prototype.toString.call(strObject); // [object String] strObject is an obj of String
strObject[0] = "z";
console.log(strObject); // [String: 'I am a string']

//
//
//
//
//

// 3. attribute key always is string
/*
var myObject = {};
myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";
console.log(myObject["true"]); // "foo"
console.log(myObject["3"]); // "bar"
console.log(myObject["[object Object]"]); // "baz"
*/

// also support calculation

/*
var prefix = "foo";
var myObject = {
  [prefix + "bar"]: "hello",
  [prefix + "baz"]: "world",
};
myObject["foobar"]; // hello
myObject["foobaz"]; // world
*/

//
//
//
//
//
//

// 4. difference between belonging and containing
/*
function foo() {
  console.log(this);
}

var myObject2 = {
  someFoo: foo,
};
var someFoo = foo;

foo(); // global obj
someFoo(); // global obj
myObject2.someFoo(); // myObject2, only copy the func without context
*/

//
//
//
//
//

// 4. array is also an object
var myArray = ["foo", 42, "bar"];
console.log((myArray.baz = "baz")); // return the rvalue for chain assign
console.log(myArray.length); // 3
console.log(myArray.baz); // "baz"

//
//
//
//
//
//

// 5. object(includes array) default copy as reference
let cpyobj1 = {
  a: 1,
};

let cpyarr1 = [];

let cpyobj2 = {
  a: 2,
  b: cpyobj1,
  c: cpyarr1,
};

cpyobj1.a = 2;
console.log(cpyobj2.b); //{ a: 2 }

cpyarr1.push(cpyobj2);
console.log(cpyobj2.c); //[ { a: 2, b: { a: 2 }, c: [Circular] } ]

//
//
//
//
//
//

// 6. deep copy obj
// crucial problem!!! 1. cpyobj2.c will recursively copy it self

//
//
//

// 7. literately copy
// crucial problem!!! 1. only can copy JSON-safe data!!
// date and time may different so we cannot copy it as string

/*
var newObj = JSON.parse(JSON.stringify(someObj));
*/

//
//
//
//
//
//
//
//

// 8. attributes descriptor
// writable
// enumerable
// configurable
var myObject = {
  a: 2,
};
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
//{ value: 2, writable: true, enumerable: true, configurable: true }

Object.defineProperty(myObject, "b", {
  value: 20,
  writable: true,
  configurable: false,
  enumerable: false,
});
// normally we donot use defineProperty
// unless we want to modify PropertyDescriptor

/*
//
//
//
//
// 1.writable

myObject.b = 3; // un-writable, TypeError in "use strict"
//
//
//
//
*/

/*
//
//
//
//
// 2.configurable
Object.defineProperty(myObject, "b", {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true,
}); 
// un-configurable, TypeError Cannot redefine property: b
// change configurable to false cannot redo
// 
//
//
//
//
but these two situations is exceptions

Object.defineProperty(myObject, "b", {
  value: 6,
  writable: true,
  configurable: false,
  enumerable: true,
});

console.log(myObject.b); // 6, un-configurable but value changable

Object.defineProperty(myObject, "b", {
  value: 6,
  writable: false,
  configurable: false,
  enumerable: true,
});

console.log(myObject.b); // 6, un-configurable but writable can be change to false
// but change writable from false to true is not allowed
//
//
//
//
delete myObject.b; // cannot delete un-configurable
console.log(myObject.b); // 20
//
//
//
//
*/

//
//
//
//
/*
// 3.Enumerable
for (k in myObject) {
  console.log(k);
}
// only a no b, because b is un-Enumerable
*/

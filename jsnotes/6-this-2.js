// 1. soft bind
// provide flexibily to enable this override but also
// bind context to a default object instead of global/window/undefined

// [].slice.call( arguments, 1 );
// arguments does not has slice function

// prototype generate after define ctor
// after new, obj.__proto__ is assigned to ctor.prototype
// the ctor of new obj depends on the ctor of __proto__,
// which is the same object as ctor.prototype
// ctor = ctor.prototype.ctor
// Thus we can change ctor.prototype to change the ctor.

// return a capsulate function
// which runs invoke the apply

if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    //console.log(this); // func.bind, so this is the function who want to be re-bound
    var fn = this;
    var curried = [].slice.call(arguments, 1);
    // store all arguments for softBind(obj, args)
    var bound = function () {
      //console.log("this is bound");
      return fn.apply(
        !this ||
          (typeof window !== "undefined" && this === window) ||
          (typeof global !== "undefined" && this === global)
          ? obj
          : this,
        // if this is default bind, we use obj replace it
        // if this is implicit and explicit bind, we allow to use special this context
        curried.concat.apply(curried, arguments)
        // concat preset args and passed in args
      );
    };

    bound.prototype = Object.create(fn.prototype);
    // bound is extended from an object of fn
    // we change bound.prototype to change the __proto__ from bound to fn
    // then the new method create obj from fn instead of bound!!!
    return bound;
  };
}

/*

// first we test the prototype re-assign

// On calling the constructor function with ‘new’ operator,
// the following actions are taken:

// --A new empty object is created.

// --The new object’s internal ‘Prototype’ property (__proto__)
//   is set the same as the prototype of the constructing function.

// --The ‘this’ variable is made to point to the newly created object.
//   It binds the property which is declared with ‘this’ keyword to
//   the new object.

// --A newly created object is returned when the constructor
//   function returns a non-primitive value (custom JavaScript object).
//   If the constructor function returns a primitive value,
//   it will be ignored. At the end of the function,
//   ‘this’ is returned if there is no return statement in the function body.

function foo() {
  console.log(this);
}
var obj = {
  a: 2,
};
var bars = foo.softBind(obj);
var bar = foo.bind(obj);
var barsobj = new bars();
// this : foo {}

var barobj = new bar();
// this : foo {}

*/

//
//
//
//
//

/*
// Then we test the softBind vs bind

function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var obj3 = {
  a: 3,
};
var bar = foo.bind(obj);
bar(); // 2
bar.call(obj3); // 2
// cannot re-bind for this hard bind
var baz = bar.bind(obj3);
baz(); // 2

var bars = foo.softBind(obj);
bars(); // 2
bars.call(obj3); // 3
var bazs = bars.softBind(obj3);
bazs(); // 3
*/

//
//
//
//
//

/*

// Last we test the prototype with bind

function foon(something) {
  this.an = something;
}

var objn1 = {};
var barn1 = foo.bind(objn1);
var barn2 = foo.softBind(objn1);
barn1.prototype.newprop = "new";//Cannot set property 'newprop' of undefined
barn2.prototype.newprop = "new";//works

// bind does not assign prototype for barn1
// but our softBind does

// bound functions don't have a .prototype property because they don't need it. 
// When you call a bound function with new, 
// it calls the original function as a constructor, 
// using the original's .prototype object as the prototype of the new instance.

// In fact, since ECMAScript 6 many functions 
// don't have a .prototype property with an object, 
// because they are not constructors - they cannot be 
// called with new so they don't need it. Among those are

// --arrow functions (() => {…})
// --methods (method() { … } in object literals and classes)
// --builtin non-constructor functions (like Math.sin)

*/

//
//
//
//
//
//
//
//
//

// 2. arrow func =>
//    this == lexical scope
//    (statically refer to the external scope's runtime context)

function foo() {
  setTimeout(() => {
    // lexical extend from foo()
    console.log(this.a);
  }, 100);
}

var obj = {
  a: 2,
};

foo.call(obj); // 2

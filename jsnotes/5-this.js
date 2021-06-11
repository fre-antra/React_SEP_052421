// 0. review myModules - moduleManager
// singleton-IIFE (Immediately Invoked Function Expression)
// return a function objects
// store a modules array
// -- define()
// ---- get required modules through requires names
// ---- apply the implement func to return the module
// -get()
var myModules = (function moduleManager() {
  let modules = {};

  function define(name, requires, impl) {
    //console.log(this); // myModules
    //console.log(impl); // impl
    for (let i = 0; i < requires.length; i++) {
      requires[i] = modules[requires[i]];
    }
    modules[name] = impl.apply(impl, requires);
  }

  function get(name) {
    return modules[name];
  }

  return {
    define: define,
    get: get,
  };
})();

/*
myModules.define("", [], function () {
  console.log(this); // impl
});
*/

myModules.define("m1", [], function () {
  function hello(who) {
    return "Let me introduce: " + who;
  }

  return {
    hello: hello,
  };
});

myModules.define("m2", ["m1"], function (m1) {
  var hungry = "hippo";
  function awesome() {
    console.log(m1.hello(hungry).toUpperCase());
  }
  return {
    awesome: awesome,
  };
});

var m1 = myModules.get("m1");
var m2 = myModules.get("m2");
console.log(m1.hello("hippo")); // Let me introduce: hippo
m2.awesome(); // LET ME INTRODUCE: HIPPO

//
//
//
//
//

// 1. why this?
//    implicitly switch the context(attributes)!!!

//
//
//

//2. this scope

/*
function foo() {
  foo.a = 0;
  console.log(this);
}

const foo2 = () => {
  foo2.b = 0;
  console.log(this);
};

function foo3() {
  console.log(this);
}
*/

//console.log(this); // {}!!!
//foo(); //global obj
//foo2(); // {}, even not foo2!!!
//foo3.call(foo3); // [Function: foo3], bind this to itself

/*
function foo() {
  var a = 2;
  // console.log(this); // global obj
  this.bar();
}
function bar() {
  //console.log(arguments.callee.caller); //[Function]
  console.log(this.a);
}
//foo(); //this.bar is not a function
bar();
*/

// global obj does not have bar()!!!

//
//
//
//
//
//

// 3. this bind
//    normal func : bind at invoking
//    => func : bind at definition

// case 1

/*
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); // undefined node env did not bind a to global scope
*/

// case 2

/*
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
obj.foo(); // 2, obj is our context!!
*/

// case 3

/*
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
var bar = obj.foo; // alias
var a = "oops, global"; // a is not bound to global
obj.foo(); // 2, obj is our context!!
bar(); // undefined, only copy the function body without invoking context
*/

// case 4

/*
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  fn(); // obj.foo alias, but lose obj context!!!
}
var obj = {
  a: 2,
  foo: foo,
};
var a = "oops, global"; // a is not bound to global
doFoo(obj.foo); // undefined, only copy the function body without invoking context
*/

// case 5

/*
function cb() {
  console.log(this);
}

function doFoo(fn) {
  console.log(this); // obj
  fn(); // obj.foo alias, but lose obj context!!!
  cb(); // global obj
}
var obj = {
  a: 2,
  doFoo: doFoo,
};

obj.doFoo(function () {
  console.log(this); // global obj
});

obj.doFoo(cb); // global obj
*/

// case 6

/*
function cb() {
  console.log(this);
}

function cb2() {
  cb();
}

var obj = {
  cb: cb,
  cb2: cb2,
};

//cb(); // global obj
//cb2(); // global obj

obj.cb(); // obj
//obj.cb2(); // global obj
*/

//
//
//
//
//

//
//4. explicit bind
//   call apply bind
//   for primetive (bool number str) it will be bound to object form
//   (new String、new Boolean new Number)

// use encapsulate callback func to explicit bind
// the real callback func to its context!!!

//
//
//
//
//

//5. new bind
// ctor not exist!!! only do constructive invoke!!!
// 1. construct a new object(context)
// 2. link to prototype
// 3. bind funcs this to our new obj
// 4. return the obj

/*
function foo() {
  this.a = 2;
  let b = 3;
}
var bar = new foo();
console.log(bar.a); // 2, this was changed to bar when do new bind;
console.log(bar.b); // undefined, b is privately bind to function foo()
*/

//6. new > explicit > implicit(context) > default(bind to global or undefined in strict)
// bind(null/undefined) equals to default bind

/*
function foo(something) {
  this.a = something;
}
var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2
var baz = new bar(3);
console.log(obj1.a); // 2
console.log(baz.a); // 3
*/

//
// null as placeholder
/*
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
// expand array
foo.apply(null, [2, 3]); // a:2, b:3
// preset atguments
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3
*/

//
//
//
// better option use "null" object
/*
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
var ø = Object.create(null);
foo.apply(ø, [2, 3]); // a:2, b:3
var bar = foo.bind(ø, 2);
bar(3); // a:2, b:3
*/

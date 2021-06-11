// 1. Scope
//    lhs and rhs search from bottom scope to top scope
//    lhs first, then rhs
//    rhs failed: reference Error
//    lhs failed: js will create a global variable at most top scope when lhs failed
//    we can disable the autoglobal creation by using strict mode!

var a = 2;
// 1. declare a variable at compiling before execution.
// 2. lhs a
// 3. assign 2 to a

// how to break scope?
// 1. dynamic eval code: eval()
// 2. with
// never use shit features!
// 1. unoptimized, 2. confuesed

// 3. closure

// only copy the function body
const symbolLOG = console.log;
symbolLOG("TEST SYMBOL COPY");
symbolLOG(symbolLOG.toString()); //[Function: log] function () { [native code] }

function LOG(data) {
  return console.log(data);
}
LOG("TEST CLOSURE");
LOG(LOG.toString()); //[Function: LOG]

// 4. hidden encapsulation
function doSomething(a) {
  this.tmp = 0;
  function doSomethingElse(a) {
    return a - 1;
  }
  var b;
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}
doSomething(2); // 15

LOG(doSomething.doSomethingElse); //undefined

function doSomething2() {
  this.tmp2 = 0;
  console.log(this);
}

//doSomething2(); //include both tmp:0 and tmp2: 0;
let doSomething2obj = new doSomething2();
LOG(doSomething2.tmp2); //undefined
LOG(doSomething2obj); // doSomething2 { tmp2: 0 }

// anything in function body cannot
// be accessed out of function scope
// but we can use keyword this and new to create an object scope to access.

//
//
//
//
// 5. IIFE

var a = 2;

(function foo() {
  var a = 3;
  console.log(a); // 3
})();

console.log(a); // 2

// if function is the first word, it is a declaration
// if not (include '(' ), is an expression

//(function foo(){ .. }) foo symbol can only be acessed in { .. }!

// expression can omit symbol name, but declaration cannot!!
// that is how anonymous functions work.
/*
setTimeout(function () {
  console.log("I waited 1 second!");
}, 1000);
*/

// how this type anonymous function recursive?
// use arguments.callee
(function (b) {
  if (b) {
    LOG("recursive continue");
    arguments.callee(false);
  } else LOG("recursive end!");
})(true);

//
//
//
//
//

undefined = true; // shit code!!!!
(function IIFE(undefined) {
  var a;
  if (a === undefined) {
    console.log("Undefined is safe here!");
  }
})();

//
//
//
//
//

// 6. block scope

/*for (var i = 0; i < 10; i++) { 
// shit code, var will contaminate i to the whole outter function scope
  //console.log( i ); shit code, i should only be used for iteration
}*/

function process(data) {
  LOG(data);
}

//
//
//

// explicit claim a block to make sure useless data(someReallyBigData)
// can be destroied at proper time when the click callback
// won't relate to the unused someReallyBigData
// because someReallyBigData is a local data in this block
/*{
  let someReallyBigData = { a: 1 };
  process(someReallyBigData);
}
var btn = document.getElementById("my_button");
btn.addEventListener(
  "click",
  function click(evt) {
    console.log("button clicked");
  }
);*/

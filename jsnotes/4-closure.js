function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}
var baz = foo();
baz(); // 2

// what is closure?
// closure prevent the inner scope from destroying
// which means extending the life circle!!
// basically is callback func

for (var i = 1; i <= 5; i++) {
  (function (j) {
    // i passed by value and captured by j
    setTimeout(function timer() {
      console.log(j); // onlt do rhs when it was invoked
    }, j * 1000);
  })(i);
}

// let can hoist a block scope to a closure
// let also creates a block scope for every iteration
// when timer was called, it do rhs in different scopes
// because it has different closures
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

//
//
//
//
//
//

// 2. module
function CoolModule() {
  //encapsulate function
  var something = "cool";
  var another = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(" ! "));
  }
  return {
    // return module object
    doSomething: doSomething,
    doAnother: doAnother,
  };
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

//
//
//
//

// singleton module
var foo2 = (function CoolModule() {
  var something = "cool2";
  var another = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(" ! "));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
})();
foo2.doSomething(); // cool2
foo2.doAnother(); // 1 ! 2 ! 3

//
//
//
//
//

// 3. module manager
var MyModules = (function Manager() {
  var modules = {};
  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]; //module obj
    }
    modules[name] = impl.apply(impl, deps); //callee obj, arguments
  }
  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get,
  };
})();

MyModules.define("bar", [], function () {
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello,
  };
});
MyModules.define("foo", ["bar"], function (bar) {
  var hungry = "hippo";
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome: awesome,
  };
});
var bar = MyModules.get("bar");
var foo = MyModules.get("foo");
console.log(bar.hello("hippo")); // Let me introduce: hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO

// 4. import module export
// all of them work with closure!!!

// 5. this shit
var obj = {
  id: "awesome",
  cool: function coolFn() {
    console.log(this.id);
  },
};
var id = "not awesome";
obj.cool(); // cool
setTimeout(obj.cool, 100); // undefined, this became timeout obj!!!!!
// because we only pass the obj.cool function body to setTimeout,
// the timeout obj will only call this copy but not obj.cool

// using => can fix this problem
// but recommand bind()!!!
var obj2 = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(
        function timer() {
          this.count++; // this is safe now because bound to obj2
          console.log("more awesome");
        }.bind(this),
        100
      ); // look, bind()!
    }
  },
};
obj2.cool(); // more awesome

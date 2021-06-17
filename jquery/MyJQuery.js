//put DOM manipulation at end

//class var will not be hoisted crossing the func blocks

//console.log(test); // test is not defined

class MyJQuery {
  constructor(selector) {
    this.element = document.querySelector(selector);
    // use querySelectorAll for multi elements

    this.basic = {
      style: {},
    };

    let stylelist = window.getComputedStyle(this.element);
    for (let key in stylelist) {
      this.basic.style[key] = stylelist[key];
    }
  }

  html(newhtml) {
    this.element.innerHTML = newhtml;
    //console.log(test); // test is not defined
  }

  hide() {
    var test = 10;
    this.element.style.originalDisplay = this.element.style.display;
    this.element.style.display = "none";
    //visibility : hidden -> hide and occupy the block space
  }
  show() {
    this.element.style.display = this.element.style.originalDisplay;
  }
  on(event, callback) {
    let eventName;
    switch (event) {
      case "click":
        eventName = "click";
    }
    this.element.addEventListener(eventName, callback);
    // on equals addEventListener, no need switch
  }
}

function $$(selector) {
  return new MyJQuery(selector);
}

$$.ajax = (settings) => {
  let url = settings.url;
  let method = settings.method || "GET";
  let success = settings.success || function () {};
  let async = true;
  let headers = ["X-Requested-With", "XMLHttpRequest"];

  let xhr = new XMLHttpRequest();
  xhr.open(method, url, async);
  xhr.setRequestHeader(...headers);
  xhr.send();
  xhr.onload = function () {
    success(xhr.response);
  };
};

console.log($$);

$$("button.btn1").html("test");
$$("#msg-box").hide();
$$("#btn-container").on("click", () => {
  $$("#msg-box").show();
});

$$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  success: function (result) {
    console.log(result);
  },
});

/*
console.log(document.querySelectorAll("button"));
// nodelist type without map;
document.querySelectorAll("button").map((ele) => {
  console.log(ele);
}); // document.querySelectorAll(...).map is not a function

Array.prototype.map.call(document.querySelectorAll("button"), (ele) => {
  console.log(ele);
});
// but we can do it here
*/

/*
map()

let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

*/

//console.log(document.querySelector("button").style);
// uniterable because no-inline style
// use computed style instead

// console.log(window.getComputedStyle(document.querySelector("button")));
// current working style

// js change css through inline style, highest priority
// inline > internal > external

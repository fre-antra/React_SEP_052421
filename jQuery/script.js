// DOM Traversal and Manipulation

//$("button.continue").html("Next Step...");

// myQuery class implementation
class myQuery {
  constructor(selector) {
    this.element = selector ? document.querySelector(selector) : null;
  }
  html(innerHtml) {
    this.element.innerHTML = innerHtml;
  }
  on(action, cb) {
    this.element.addEventListener(action, cb);
  }
  hide() {
    this.element.style.visibility = "hidden";
  }
  show() {
    this.element.style.visibility = "visible";
  }
  toggle() {
    if (this.element.style.visibility == "hidden") {
      this.element.style.visibility = "visible";
    } else {
      this.element.style.visibility = "hidden";
    }
  }
}

// $$ function implementation
function $$(selector) {
  return new myQuery(selector);
}

$$("button.continue").html("Next Step...");

// Event Handling
// var hiddenBox = $("#banner-message");
// hiddenBox.hide();
// $("#button-container button").on("click", function (event) {
//   hiddenBox.show();
// });

// $$ event handling
var hiddenBox = $$("#banner-message");
hiddenBox.hide();
$$("#button-container button").on("click", function (event) {
  hiddenBox.toggle();
});

// Ajax
$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  success: function (result) {
    console.log(result);
    $(".ajax-text").html(result.title);
  },
});

// console.log($);
// console.log($$.ajax());

// ajax(obj) {
//     fetch(obj.url)
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }
// $$.ajax({
//   url: "https://jsonplaceholder.typicode.com/todos/1",
// });

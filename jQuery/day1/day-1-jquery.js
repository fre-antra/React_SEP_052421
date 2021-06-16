//jQuery is a fast, small, and feature-rich JavaScript library.

//simulate some jQuery
// console.log($)
class MyQuery {
  constructor(selector) {
    this.element = document.querySelector(selector);
    // this.initDisplay = getComputedStyle(this.element).display;
  }
  
  html(htmlString) {
    this.element.innerHTML = htmlString;
  }
  //simulate the jQuery basic .hide() without params for displaying the matched elements.
  hide() {
    this.initDisplay = getComputedStyle(this.element).display;
    console.log(this.initDisplay);
    // this.initDisplay = this.play.display;
    this.element.style.display = "none";
  }
  //simulate the jQuery basic .show() without params for displaying the matched elements.

  show() {
    console.log(this.initDisplay);
    // this.element.style.display = this.initDisplay;
    this.element.style.display = this.initDisplay;
  }

  //simulate the jQuery basic .on() without params for displaying the matched elements.
  on(e, handler) {
    this.element.addEventListener(e, handler);
  }

}

function $$(selector) {
  return new MyQuery(selector)
}

var clickBox = $$("span.box");
clickBox.hide();
// $$("span.box").show();
$$("button.btn-hide").html("hide");
$$("button.btn-show").html("show");
$$("button.btn-show").on("click", function(event){
  clickBox.show();
});

$$("button.btn-hide").on("click", (event) => {
  clickBox.hide();
});

/* AJAX */
$$.ajax = ({url, success}) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => success(data));
}

//$.ajax({
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     success: function (result) {
//       console.log(result);
//     }
// });
$$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  success: function (result) {
      console.log(result);
    }
});
//success to fetch data: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
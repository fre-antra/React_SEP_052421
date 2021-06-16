//jQuery is a fast, small, and feature-rich JavaScript library.

//simulate some jQuery
class MyQuery {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  html(htmlString) {
    this.element.innerHTML = htmlString;
  }
  //simulate the jQuery basic .hide() without params for displaying the matched elements.
  hide() {
    this.element.style.display = "none";
  }
  //simulate the jQuery basic .show() without params for displaying the matched elements.

  show() {
    this.element.style.display = "block";
  }

  //simulate the jQuery basic .on() without params for displaying the matched elements.
  on(e, handler) {
    this.element.addEventListener(e, handler);
  }

}

function $$(selector) {
  return new MyQuery(selector)
}

$$("button.btn-show").html("show");
$$("button.btn-hide").html("hide");
$$("button.btn-show").on("click", (event)=>{
  $$("div.box").show();
});
$$("button.btn-hide").on("click", (event) => {
  $$("div.box").hide();
});

//$.ajax({
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     success: function (result) {
//       console.log(result);
//     }
// });

/* AJAX */
$$.ajax = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

$$.ajax("https://jsonplaceholder.typicode.com/todos/1");
//success to fetch data: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
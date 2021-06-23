//jQuery is a fast, small, and feature-rich JavaScript library.

//simulate some jQuery
// console.log($)
class MyQuery {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.elementsArr = []
    // this.elements.forEach(ele =>
      // this.elementsArr.push(getComputedStyle(ele).display)
      // console.log(getComputedStyle(ele).display)
    // );
    console.log(this.elementsArr);
    // this.initDisplay = getComputedStyle(this.element).display;
  }
  
  html(htmlString) {
    // this.element.innerHTML = htmlString;
    this.elements.forEach((ele) => {
      ele.innerHTML = htmlString;
    });
  }
  //simulate the jQuery basic .hide() without params for displaying the matched elements.
  hide() {
    // this.initDisplay = getComputedStyle(this.element).display;
    console.log(this.initDisplay);
    this.elements.forEach(
      (ele, index) => {
        // this.elementsArr[index] = getComputedStyle(ele).display;
        this.elementsArr[index] ='';
        this.elementsArr[index] = ele.style;
        console.log(this.elementsArr);
        ele.style.display = 'none'
      }
    );
    // this.element.style.display = "none";
  }
  //simulate the jQuery basic .show() without params for displaying the matched elements.

  show() {
    console.log(this.elementsArr);
    // this.element.style.display = this.initDisplay;
    this.elements.forEach((ele, index) => {
      console.log(this.elementsArr[index]);
      ele.style.display = this.elementsArr[index];
    });

  }

  //simulate the jQuery basic .on() without params for displaying the matched elements.
  on(e, handler) {
    // this.element.addEventListener(e, handler);
    this.elements.forEach((ele, index) => {
      ele.addEventListener(e, handler);
    });    
  }

}

function $$(selector) {
  return new MyQuery(selector)
}

var clickBox = $$(".box");
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
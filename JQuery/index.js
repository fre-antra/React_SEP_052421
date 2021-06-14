// // facade pattern

// // let obj = $$('button.continue1');
// // let obj2 = $$('button.continue2');
// // console.log(obj.html === obj2.html);

// // function foo(innerHtml) {
// //   element.innerHTML = innerHtml;
// // }
class MyQuery {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }
  html(innerHTML) {
    this.element.innerHTML = innerHTML;
  }
  hide() {
    this.element.style.display = "none";
  }
  show() {
    this.element.style.display = "block";
  }
  on(event, cb) {
    this.element.addEventListener(event, cb);
  }
}

const ajax = (obj) => {
  const { url, success } = obj;
  let data;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      success(data);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};

function $$(selector) {
  return new MyQuery(selector);
}

// console.log('hello');
$$("button.continue1").html("Next Step1...");
$$("button.continue2").html("Next Step2...");

// let a = $$('button.continue1').html;
// let b = $$('button.continue2').html;

var hiddenBox = $$("#banner-message");
hiddenBox.hide();
$$("#button-container button").on("click", function (event) {
  hiddenBox.show();
});
$$("#button-container2 button").on("click", function (event) {
  hiddenBox.hide();
});

// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/todos/1",
//   success: function (result) {
//     console.log(result);
//   },
// });

ajax({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  success: function (result) {
    console.log(result);
  },
});

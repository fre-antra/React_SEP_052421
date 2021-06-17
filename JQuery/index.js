// // facade pattern

// // let obj = $$('button.continue1');
// // let obj2 = $$('button.continue2');
// // console.log(obj.html === obj2.html);

// // function foo(innerHtml) {
// //   element.innerHTML = innerHtml;
// // }

class MyQuery {
  constructor(selector) {
    if (selector === document || selector === window) {
      this.elements = [selector];
    } else {
      this.elements = document.querySelectorAll(selector);
      this.elementsOrignalDisplay = [];
      this.elements.forEach((ele) =>
        this.elementsOrignalDisplay.push(ele.style.display)
      );
    }
  }
  html(innerHTML) {
    this.elements.forEach((ele) => {
      ele.innerHTML = innerHTML;
    });
  }
  hide() {
    this.elements.forEach((ele, index) => {
      this.elementsOrignalDisplay[index] = ele.style.display;
      ele.style.display = 'none';
    });

    // this.elements.forEach((ele) => {
    //   ele.style.display = ;
    // });
    // this.element.style.visibility = 'hidden';
  }
  show() {
    this.elements.forEach((ele, index) => {
      ele.style.display = this.elementsOrignalDisplay[index];
    });
  }
  on(event, cb) {
    this.elements.forEach((ele, index) => {
      ele.addEventListener(event, cb);
    });
  }
}
function $$(selector) {
  return new MyQuery(selector);
}
$$(document).on('click', () => {
  alert('test');
});

// console.log('hello');
$$('button.continue1').html('Next Step1...');

// let a = $$('button.continue1').html;
// let b = $$('button.continue2').html;

var hiddenBox = $$('#banner-message');

hiddenBox.hide();
$$('#button-container button').on('click', function (event) {
  hiddenBox.show();
});

$$.ajax = function ({ url, success }) {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      success(data);
    });
};

$$.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  success: function (result) {
    console.log(result);
  },
});
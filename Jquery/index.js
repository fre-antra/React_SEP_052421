// // facade pattern

// // let obj = $$('button.continue1');
// // let obj2 = $$('button.continue2');
// // console.log(obj.html === obj2.html);

// // function foo(innerHtml) {
// //   element.innerHTML = innerHtml;
// // }

class MyQuery {
  constructor(selector) {
    this.element = document.querySelector(selector)
  }
  html(innerHTML) {
    this.element.innerHTML = innerHTML
  }
  hide() {
    this.element.style.display = 'none'
  }
  show() {
    this.element.style.display = 'block'
  }
  on(action, callBack) {
    this.element.addEventListener(action, callBack)
  }
}

const $$ = function (selector) {
  return new MyQuery(selector)
}

$$.ajax = function (object) {
  fetch(object.url)
    .then(response => response.json())
    .then(json => {
      object.success(json)
    })
}

$$('button.continue1').html('Next Step1...')
$$('button.continue2').html('Next Step2...')
var hiddenBox = $$('#banner-message')
hiddenBox.hide()
$$('#button-container button').on('click', function (event) {
  hiddenBox.show()
})

$$.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  success: function (result) {
    console.log('result', result)
  },
})

// let a = $$('button.continue1').html;
// let b = $$('button.continue2').html;
// var hiddenBox = $('#banner-message')
// hiddenBox.hide()
// $('#button-container button').on('click', function (event) {
//   hiddenBox.show()
// })

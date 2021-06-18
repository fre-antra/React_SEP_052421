// // facade pattern

// // let obj = $$('button.continue1');
// // let obj2 = $$('button.continue2');
// // console.log(obj.html === obj2.html);

// // function foo(innerHtml) {
// //   element.innerHTML = innerHtml;
// // // }
// <<<<<<< HEAD
// let MyQuery = class {
//     constructor(selector) {
//         this.element = document.querySelector(selector);
//     }
//     html(innerHTML) {
//         this.element.innerHTML = innerHTML;
//     }
//     hide() {
//         this.element.style.display = "none";
//     }
//     show() {
//         this.element.style.display = "block";
//     }
//     on(event, cb) {
//         this.element.addEventListener(event, cb);
//     }
//     ajax({ url, success }) {
//         fetch(url).then(success());
//     }
// };
// =======

// class MyQuery {
//   constructor(selector) {
//     if (selector === document || selector === window) {
//       this.elements = [selector];
//     } else {
//       this.elements = document.querySelectorAll(selector);
//       this.elementsOrignalDisplay = [];
//       this.elements.forEach((ele) =>
//         this.elementsOrignalDisplay.push(ele.style.display)
//       );
//     }
//   }
//   html(innerHTML) {
//     this.elements.forEach((ele) => {
//       ele.innerHTML = innerHTML;
//     });
//   }
//   hide() {
//     this.elements.forEach((ele, index) => {
//       this.elementsOrignalDisplay[index] = ele.style.display;
//       ele.style.display = 'none';
//     });

//     // this.elements.forEach((ele) => {
//     //   ele.style.display = ;
//     // });
//     // this.element.style.visibility = 'hidden';
//   }
//   show() {
//     this.elements.forEach((ele, index) => {
//       ele.style.display = this.elementsOrignalDisplay[index];
//     });
//   }
//   on(event, cb) {
//     this.elements.forEach((ele, index) => {
//       ele.addEventListener(event, cb);
//     });
//   }
// }
// >>>>>>> 15a6e7d603631a0d082854f1e23953645efcc88a
// function $$(selector) {
//     return new MyQuery(selector);
// }
// $$(document).on('click', () => {
//   alert('test');
// });

// // console.log('hello');
// <<<<<<< HEAD
// $$("button.continue1").html("Next Step1...");
// $$("button.continue2").html("Next Step2...");
// =======
// $$('button.continue1').html('Next Step1...');
// >>>>>>> 15a6e7d603631a0d082854f1e23953645efcc88a

// // let a = $$('button.continue1').html;
// // let b = $$('button.continue2').html;

// <<<<<<< HEAD
// var hiddenBox = $("#banner-message");
// hiddenBox.hide();
// $("#button-container button").on("click", function (event) {
//     hiddenBox.show();
// });

// // $$.ajax({
// //   url: 'https://jsonplaceholder.typicode.com/todos/1',
// //   success: function (result) {
// //     console.log(result);
// //   },
// // })
// let test = () => {
//     let name = "yasir";
//     for (let i = 0; i < name.length; i++) {}
// };

// function test2() {
//     let name = "yasir";
//     for (let i = 0; i < name.length; i++) {}
// }
// =======
// var hiddenBox = $$('#banner-message');

// hiddenBox.hide();
// $$('#button-container button').on('click', function (event) {
//   hiddenBox.show();
// });

// $$.ajax = function ({ url, success }) {
//   fetch(url)
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       success(data);
//     });
// };

// $$.ajax({
//   url: 'https://jsonplaceholder.typicode.com/todos/1',
//   success: function (result) {
//     console.log(result);
//   },
// });
// >>>>>>> 15a6e7d603631a0d082854f1e23953645efcc88a

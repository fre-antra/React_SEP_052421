// // facade pattern

// // let obj = $$('button.continue1');
// // let obj2 = $$('button.continue2');
// // console.log(obj.html === obj2.html);

// // function foo(innerHtml) {
// //   element.innerHTML = innerHtml;
// // }
let MyQuery = class {
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
    ajax({ url, success }) {
        fetch(url).then(success());
    }
};
function $$(selector) {
    return new MyQuery(selector);
}

// console.log('hello');
$$("button.continue1").html("Next Step1...");
$$("button.continue2").html("Next Step2...");

// let a = $$('button.continue1').html;
// let b = $$('button.continue2').html;

var hiddenBox = $("#banner-message");
hiddenBox.hide();
$("#button-container button").on("click", function (event) {
    hiddenBox.show();
});

// $$.ajax({
//   url: 'https://jsonplaceholder.typicode.com/todos/1',
//   success: function (result) {
//     console.log(result);
//   },
// })
let test = () => {
    let name = "yasir";
    for (let i = 0; i < name.length; i++) {}
};

function test2() {
    let name = "yasir";
    for (let i = 0; i < name.length; i++) {}
}

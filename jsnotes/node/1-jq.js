console.log($);

$$("button.continue").html("test");

class MyJq {}

function $$(selector) {
  /*return {
    html: (html) => {
      document.querySelector(selector).innerHTML = html;
    },
    hide: () => {},
    show: () => {},
    on: () => {},
    ajax: () => {},
  };*/
}

$("button").on("click", function (event) {
  alert("Hello! I am an alert box!!");
});

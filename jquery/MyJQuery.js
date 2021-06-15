//put DOM manipulation at end

class MyJQuery {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.basic = {
      style: {},
    };

    let stylelist = window.getComputedStyle(this.element);
    for (let key in stylelist) {
      this.basic.style[key] = stylelist[key];
    }
  }

  html(newhtml) {
    this.element.innerHTML = newhtml;
  }

  hide() {
    this.element.style.originalDisplay = this.element.style.display;
    this.element.style.display = "none";
  }
  show() {
    this.element.style.display = this.element.style.originalDisplay;
    console.log(this.element.style.display);
  }
  on(event, callback) {
    let eventName;
    switch (event) {
      case "click":
        eventName = "click";
    }
    this.element.addEventListener(eventName, callback);
  }
}

function $$(selector) {
  return new MyJQuery(selector);
}

$$.ajax = (settings) => {
  let url = settings.url;
  let method = settings.method || "GET";
  let success = settings.success || function () {};
  let async = true;
  let headers = ["X-Requested-With", "XMLHttpRequest"];

  let xhr = new XMLHttpRequest();
  xhr.open(method, url, async);
  xhr.setRequestHeader(...headers);
  xhr.send();
  xhr.onload = function () {
    success(xhr.response);
  };
};

console.log($$);

$$("button.btn1").html("test");
$$("#msg-box").hide();
$$("#btn-container").on("click", () => {
  $$("#msg-box").show();
});

$$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  success: function (result) {
    console.log(result);
  },
});

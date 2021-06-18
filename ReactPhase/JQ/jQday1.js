// function $$(selector){
//     const getEle = document.querySelector(selector)
//     console.log(getEle);
//     return {
//         html: (content)=>{
//             getEle.innerHTML = content
//         },
//     }
// }


// $$('button.continue').html('GOOD');
// $('button.continue').html('GOOD with JQ');

// // new obejct for both & new method in obj
// let obj = $$('button.continue'), obj2 = $$('button.continue2') 

// // 如果有100个obj 就有100 method 所以很不效率， 所以要用class method
// console.log(obj.html === obj2.html);




//  format version
class Myquery {
    constructor(selector){
        // 'this' is instance of Myquery
        this.getEle = document.querySelector(selector) 
        // querySelector only select the first match element
        // use querySelectorAll for select all elements
    }

    html(content){
        // 注意这里的 getEle scope 会有问题， 所以要在 class里定义 或者 用this
        this.getEle.innerHTML = content
    }

    on(event, func) {
        this.getEle.addEventListener(event, func)
    }

    show() {
        // the block may not the initial display style
        this.getEle.style.display = "block"
        // therefore, we need get the initial display style
        this.getEle.style.display = this.originalDisplay
    }

    hide() {
        // 也可以放在constructor 里，但是其他当改了这个，有可能还会保留原来的 value
        this.originalDisplay = this.getEle.style.display

        this.getEle.style.display = "none"
        this.getEle.style.visibility ="hidden" // === opacity: 0  会预留space
    }

    ajax(requestInfo) {

        const request = new XMLHttpRequest()

        request.onreadystatechange = function() {
            if(this.readyState == 4 & this.status == 200){
                // console.log(request.responseText);
                let data = JSON.parse(this.responseText);
                requestInfo.success(data)
            }
        }

        request.open("GET", requestInfo.url, true)

        request.send()
    }
}

// clrd, MERN stack
function $$(selector){
    return new Myquery(selector)
}



//  ----------------- AJAX ----------------
// In JavaScript, functions are first-class objects, because they can have properties 
// and methods just like any other object. What distinguishes them from other objects 
// is that functions can be called. In brief, they are Function objects.
// Summary:  function in JS is function object
// $ 是function 但还是可以用 . 

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    success: function (result) {
      console.log(result);
    }
});


// source: https://zhuanlan.zhihu.com/p/22564745
// XMLHttpRequest properties: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
function ajax(requestInfo) {

    const request = new XMLHttpRequest()

    request.onreadystatechange = function() {
        if(this.readyState == 4 & this.status == 200){
            let data = JSON.parse(this.responseText);
            requestInfo.success(data)
        }
    }

    request.open("GET", requestInfo.url, true)

    request.send()
}


ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    success: function (result) {
      console.log('Function result: ', result);
    }
  });


  
// Why it is not working??
$$.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    success: function (result) {
      console.log('Object property: ', result);
    }
  });
// $ === jQuery(), Return a collection of matched elements either found in the DOM based on passed argument(s) 
//                              or created by passing an HTML string.
// Calling the jQuery() method with no arguments returns an empty jQuery set (with a .length property of 0). Similarly, 
// if an argument of null, undefined, an empty array ([]), or an empty string ("") is passed, the set contains no elements.
// source:https://api.jquery.com/jQuery/

// So to solve this, I need create a return for no arguments
// answer
$$('.showAJAX').ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    success: function (result) {
      console.log('Object property: ', result);
    }
  });
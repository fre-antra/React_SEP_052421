class Myquery {
    constructor(selector){
        //$(document) || $(window) 会选中整个窗口
        if(selector === document || selector === window){
            this.getEle = [selector]; //用[]是因为后面用的都是forEach
        }else{
            // 'this' is instance of Myquery
            this.getEle = document.querySelector(selector) 
            // querySelector only select the first match element
            // use querySelectorAll for select all elements


            // 用这个的话后面都得改
            this.getEle = document.querySelectorAll(selector) 
        }
        
    }

    html(content){
        // need iterate array for updata

        // map / forEach, map return new array which also cost more time
        // forEach / for loop, forEach cannot break
        // some / forEach, similar but some can break the iteration
        // this.getEle.innerHTML = content
        this.getEle.forEach ((ele) => {
            ele = content
        })

        console.log(typeof this.getEle); // getEle is NodeList which array-like structure
        // source: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
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

    
}

// clrd, MERN stack
function $$(selector){
    return new Myquery(selector)
}


$$.myajax = function(requestInfo) {

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

$$.ajax = function(requestInfo) {
    fetch(url)
    .then(data => {return data.json()})
    .then(data => {success(data)})
}
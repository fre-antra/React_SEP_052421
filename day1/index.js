// var element = document.getElementById("title");
// console.log(element);

function foo(){
    console.log(this);
}

foo();

// var fs = require("fs");
// fs.readFile("note.md", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })
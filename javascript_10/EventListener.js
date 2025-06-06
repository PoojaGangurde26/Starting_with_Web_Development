// let btns = document.querySelectorAll("button");
// for (btn of btns) {
// btn.addEventListener("click", sayhello);
// btn.addEventListener("click", Sayname);
// btn.addEventListener("dblclick", function () {
//     console.log("uhh double clicked");
// })


// }

// function sayhello() {
//     console.log("hello!");
// }
// btn.onclick = sayhello;

// function Sayname() {
//     console.log("Pooja Gangurde!");
// }
// btn.onclick = Sayname;




//event Listener for elements

// let para = document.querySelector('p');
// para.addEventListener("click", function () {
//     console.log("para was clicked");
// });


// let Box = document.querySelector(".box");
// Box.addEventListener("mouseenter", function () {
//     console.log("mouse inside div");
// });



//This in the Event listener

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let para = document.querySelector("p");


// btn.addEventListener("click", function () {
//     // console.log(this);
//     // console.log(this.innerText);
//     // this.style.backgroundColor = "red";

// })


function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "red";

}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);


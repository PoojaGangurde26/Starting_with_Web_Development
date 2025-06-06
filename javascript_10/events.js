//DOM Events
//1)onclick

// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
// }


// function sayhello() {
//     console.log("hello!");
// }
// btn.onclick = sayhello;

let btn = document.querySelectorAll('button');
for (btns of btn) {
    btns.onclick = sayhello;
    btns.onmouseenter = function () {
        console.log("uhh enterd a button");
    };

}

function sayhello() {
    console.log("hello!");
}
btn.onclick = sayhello;


let btn = document.querySelector('button');
let h3 = document.querySelector('h3');
let div = document.querySelector('div');
btn.addEventListener("click", function () {
    let randomcolor = getrandomcolor();
    h3.innerText = randomcolor;
    div.style.backgroundColor = randomcolor;



    console.log("Color Updated");

})

function getrandomcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`
    return color;
}
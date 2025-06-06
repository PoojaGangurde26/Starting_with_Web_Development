//Qs2.Create a button on the page using JavaScript. 
// Add an event listener to the button that changes the button’s color to green when it is clicked


let btn = document.createElement("button");
btn.innerText = "Click Me!"
document.querySelector('body').append(btn);
btn.addEventListener("click", function () {
    btn.style.backgroundColor = "red";
})
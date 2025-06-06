// let input = document.querySelector('input');
// input.addEventListener("keydown", function () {
//     console.log("Key was Pressed");
// })

// input.addEventListener("keyup", function (event) {
//     console.log(event)
//     console.log(event.code)
//     console.log(event.key)
//     console.log("Key was Uped");
// })



let input = document.querySelector('input');
input.addEventListener("keydown", function (event) {
    console.log("code=", event.code);

    if (event.code == "Arrowup") {
        console.log("character moves forworde");
    } else if (event.code == "Arrowdown") {
        console.log("character moves backword");
    }
    else if (event.code == "Arrowleft") {
        console.log("character moves left");
    }
    else if (event.code == "ArrowRight") {
        console.log("character moves right");
    }

})
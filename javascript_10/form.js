// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     console.dir(form);
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     // console.log("form submitted");
//     // let user = document.querySelector("#user");
//     // let pw = document.querySelector("#pass")
//     // console.log(user);
//     // console.dir(user);
//     // console.log(user.innerText);
//     // console.log(user.value);


//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hii, ${user.value},your passord is to ${pass.value}`);
// });


//change event


// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// })
// let user = document.querySelector("#user");
// user.addEventListener("change", function () {
//     console.log("input change");
//     console.log("final value=", this.value);
// })



//input events

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
})
let user = document.querySelector("#user");
user.addEventListener("input", function () {
    console.log("input change");
    console.log("final value=", this.value);
})

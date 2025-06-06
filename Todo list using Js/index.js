let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;


    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";
    deletebtn.classList.add("delete");
    item.appendChild(deletebtn);

    ul.appendChild(item);
    inp.value = "";
})


ul.addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();

    }
});

// let deletebtns = document.querySelectorAll(".delete");

// for (delbtn of deletebtns) {
//     delbtn.addEventListener("click", function () {
//         let para = this.parentElement;
//         console.log(para);
//         para.remove();
//     })
// }

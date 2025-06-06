let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "purple", "green", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
    // console.log("Game started");

    if (started == false) {
        console.log("Game is started");
        started = true;
        levelup();
    }
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);

}



function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250);

}


function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //rondom button choose

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randombtn);


}


function checkAns(idx) {
    // console.log("current level:", level);
    // let idx = level - 1;
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
        console.log("same value");
    } else {
        h2.innerHTML = `Game Over!  Your Score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150)
        reset();

    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor)
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
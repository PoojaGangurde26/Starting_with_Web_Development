//Q3)  add the following atrribute the elemnt
//change the placeholder value of the input to username
//change the id button to btn

// let btn = document.createElement('button');
// let input = document.createElement('input');
// btn.innerText = "Click Mee!";
// document.querySelector('body').append(input);
// document.querySelector('body').append(btn);
// btn.setAttribute('id', 'btn');
// input.setAttribute('placeholder', 'username');


//Access the button using the queryselector and button id.
// change the button background color to blue and text color to white

// btn.classList.add("btnStyle");

// Qs4.Create an h1 element on the page and setits text to “DOMPractice” underlined.Change it scolor to purple

let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
document.querySelector('body').append(h1);
h1.style.backgroundColor = "red";
h1.style.textDecoration = "underline";


//Q5) Qs5.Create a p tag on the page and set its text to “Apna  CollegeDelta Practice

let para = document.createElement('p');
para.innerText = "Apana College Delta Practice";
document.querySelector('body').append(para);

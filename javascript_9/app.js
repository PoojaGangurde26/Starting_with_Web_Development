//1)selecting an element- getelementById();

// document.getElementById("mainImg")

//<img src=​"spiderman_img.png" id=​"mainImg">

// let mainObj=document.getElementById("mainImg")
// mainObj

// <img src=​"spiderman_img.png" id=​"mainImg">

// console.dir(mainImg)

// img#mainImg

// mainobj.src
// 'http://127.0.0.1:5500/javascript_9/spiderman_img.png'



//1)selecting an element- getelementByClassname();
// document.getElementsByClassName("oldImg")
// HTMLCollection(3) [img.oldimg, img.oldimg, img.oldimg]0: img.oldimg1: img.oldimg2: img.oldimglength: 3[[Prototype]]: HTMLCollection

// let obj=document.getElementsByClassName("oldImg")
// undefined

// console.dir(obj)
// HTMLCollection(3)0: img.oldimg1: img.oldimg2: img.oldimglength: 3[[Prototype]]: HTMLCollection
// undefined

// ocument.getElementsByClassName("oldImg")[0]
// <img src=​"creation_1.png" class=​"oldImg">


// let smallImg = document.getElementsByClassName("oldimg");
// for (let i = 0; i < smallImg.length; i++) {
//     // console.dir(smallImg[i]);
//     console.dir(smallImg[i].src)
// }



// let smallImg = document.getElementsByClassName("oldimg");
// for (let i = 0; i < smallImg.length; i++) {
//     smallImg[i].src = "spiderman_img.png";
//     console.log(`value of images no. ${i} is changed.`);

// }


//1)selecting an element- getelementByTagName();


// document.getElementsByTagName("p")
// HTMLCollection(2) [p, p#description, description: p#description]0: p1: p#descriptiondescription: p#descriptionlength: 2[[Prototype]]: HTMLCollection

// document.getElementsByTagName("p")[0]
// <p>​…​</p>

// document.getElementsByTagName("p")[1].innerText="Poojagangurde"
// 'Poojagangurde'




//Query selector

// console.dir(document.querySelector('h1'));


// console.dir(document.querySelector('#description'));

// console.dir(document.querySelector('.oldImg'));

// console.dir(document.querySelectorAll('h1'));
// console.dir(document.querySelectorAll('p'));

// console.dir(document.querySelector('div a'));
// console.dir(document.querySelectorAll('div a'));




//Manipulation Of DOM

//Properties and Method

// let para = document.querySelector('p');
// console.dir(para);

// console.dir(para.innerText);
// console.dir(para.innerHTML);

// console.dir(para.textContent);


// heding.innerHTML="<u>Spider Man</u>"

// let heding=document.querySelector('h1')
// undefined
// heding
// <h1>​Spider Man​</h1>

// heding.innerHTML=`<u>${heding.innerText}</u>`;
// '<u>Spider Man</u>'


//Atribute Manipulations

// let img = document.querySelector('img');
// console.dir(img);
// console.dir(img.getAttribute('id'));
// console.dir(img.setAttribute('id', "Pooja"));



// let img = document.querySelector('h1')
// console.dir(img);
// img.style;


let col = document.querySelectorAll(".box , a");
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "yellow";
// }


// for (co of col) {
//     co.style.color = "green";
// }





//Using classList'

// let img = document.querySelector('img');
// console.dir(img);
// console.dir(img.classList);
// console.dir(img.classList.add("pooja"));


// let hd = document.querySelector('h1');
// console.dir(hd);
// console.log(hd.classList.add("green"));
// console.dir(hd.classList.contains("pooja"));
// console.dir(hd.classList.toggle("green"));
// console.dir(hd.classList.toggle("underline"));
// let Box = document.querySelectorAll(".box");




//Navigation

// let H4 = document.querySelector('h4');
// console.dir(H4.parentElement);
// console.dir(H4.children);
// console.dir(H4.childElementCount);
// console.dir(H4.previousElementSibling);


// let img=document.querySelector('img');
// undefined

// img.previousElementSibling;
// <h1>​Spider Man​</h1>

// img.previousElementSibling.style
// CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// img.previousElementSibling.style.color="green";
// 'green'





//Adding element in the Document
//1appendChild & createElemnt
let newpara = document.createElement('p');
console.dir(newpara);
newpara.innerText = "Hi am  Pooja Gangurde";

let body = document.querySelector('body');
console.log(body.appendChild(newpara));




let Box = document.querySelector(".box");
console.dir(Box.appendChild(newpara));


let btn = document.createElement('button');
console.dir(btn);
btn.innerText = "submit";

console.dir(Box.appendChild(btn));


//append()

console.log(newpara.append("How are you! I am fine"));
console.dir(newpara.append(btn));

//prepend
console.dir(Box.prepend(newpara))

console.dir()

//insertAdjecent(where, element)

let p = document.querySelector('p');
console.dir(p.insertAdjacentElement('beforebegin', btn));

console.dir(p.insertAdjacentElement('afterbegin', btn));

console.dir(p.insertAdjacentElement('beforeend', btn));

console.dir(p.insertAdjacentElement('afterend', btn));



//removeing elemnt
//1)removeChild(elemnt)
//2)remove(elemnt)

console.dir(body.removeChild(btn));
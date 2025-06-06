// let arr = [1, 2, 3];
// arr.sayhello = () => {
//     console.log("hello!,i am arr");
// }


//Factory Functions
// function PersonMaker(name, age) {
//     const person = {
//         name: "pooja",
//         age: 22,
//         talk() {
//             console.log(`Hi my name is ${this.name}`);
//         }
//     }
//     return person;
// }



//New operator (Constructor)

// function Person(name, age) {

//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`hello my name is ${this.name}`);
// }
// let p1 = new Person("pooja", 22);
// let p2 = new Person("maya", 21);


//Class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`hello my name is ${this.name} and my age is ${this.age}`);
//     }
// }
// let p1 = new Person("pooja", 22);


// Inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
}
class Student extends Person {
    constructor(name, age, mark) {
        super(name, age);
        this.mark = mark;
    }

}
class Teacher extends Person {
    constructor(name, age, mark) {
        super(name, age);
        this.mark = mark;
    }
}
let p1 = new Teacher("poja", 55, 90);

//write a function called mergeObject that accept two object and return the new object which cantain
//all the keys and values of the first object and second object



const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });

const result = mergeObject({ name: "pooja", age: 22 }, { name: "Kalyani", age: 21 });
console.log(result);


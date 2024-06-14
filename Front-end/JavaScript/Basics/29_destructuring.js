// Destructuring is Storing values of array into multiple variables

let arr = ["Azim1", "Azim2", "Azim3", "Azim3"];
let [one, two] = arr;
console.log(one, two); // >> Azim1 Azim2

// Destructuring in objects
let obj = {
    name: "Azim",
    age: 20
};

let { name } = obj;
console.log(name); // >> Azim

let { name: nam, id = 10 } = obj;
console.log(nam, id); // >> Azim
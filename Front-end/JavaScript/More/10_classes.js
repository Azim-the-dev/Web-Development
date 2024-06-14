class Person {
    constructor(name, age) {
        this.name = name; // This mense line no 11 `azim`;
        this.age = age;
    }
    talk() { // >> This is now prototype
        return `Hi, my name is ${this.name}`;
    }
}

let azim = new Person("Azim", 20);
console.log(azim.name);
console.log(azim.talk());
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        return `Hi, my name is ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}

let p1 = new Person("Azim", 20);
console.log(p1);

let s1 = new Student("Azim", 20, 90);
console.log(s1);
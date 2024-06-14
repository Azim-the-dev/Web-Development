// Avoid using factory functions because they do not leverage prototypal inheritance, which can lead to inefficient memory usage and lack of method sharing.

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        }
    };
    return person;
}

const adam = PersonMaker("Adam", 25);
const eve = PersonMaker("Eve", 25);
adam.talk(); // Outputs: Hi, my name is Adam
eve.talk(); // Outputs: Hi, my name is Eve
// Allows a function to take an indefinite number of arguments and bundle them in an array

function num(...args) {
    for (em of args) {
        console.log(">>>", em);
    }
}

num(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
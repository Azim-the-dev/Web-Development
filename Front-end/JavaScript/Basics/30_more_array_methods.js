let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// foreEach
arr.forEach((el) => {
    console.log(el); // Print all indivusally
});

// map
let newArr = arr.map((el) => {
    return el * 2;
});
console.log(newArr); // >> [2, 4, 6, 8, 10, 12, 14, 16, 18, 0]

// filter
let arr2 = [1, 1, 2, 2];
let newArr2 = arr2.filter((el) => {
    return el == 2;
    // if return true then that element stored in new arr else mnot.
});
console.log(newArr2); // >> [ 2, 2 ]

// every
let arr3 = [2, 2, 2, 2];
let bool = arr3.every((el) => {
    return el % 2 == 0;
    // if every time return true then `bool = true` else false
});
console.log(bool); // >> true 

// reduce
let newArr4 = arr.reduce((res, el) => {
    return res + el;
});
console.log(newArr4); // >> 45
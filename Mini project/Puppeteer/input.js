const readline = require("readline");
let prompt = "";

let read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("What is your name: ", (answer) => {
  prompt = answer;
  read.close();
});

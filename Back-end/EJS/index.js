const express = require("express");
// no need to require EJS Express automatically require EJS
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log("Listening...");
});

app.get("/", (req, res) => {
    let randNum = Math.floor(Math.random() * 10);
    // res.render("home.ejs", { num: randNum });
    res.render("home.ejs", { randNum });
});
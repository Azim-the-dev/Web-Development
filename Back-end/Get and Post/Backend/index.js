const express = require("express");
const app = express();
const port = 8080;

// These line are imp else express can't read POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    res.send("GET Response!");
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("POST Response!");
});

app.listen(port, () => {
    console.log("...");
});
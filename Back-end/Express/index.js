const express = require("express");
const app = express();
const port = 8080;

// listening
app.listen(port, () => {
    console.log(`listening for poat ${port}`);
});



// request
// app.use((req, res) => {
//     console.log("request recived");

//     // response
//     res.send(`<h1 align="center">Sk Azim</h1>`);
// });



// routing
// app.get("/", (req, res) => {
//     res.send(`<h1>Home page</h1>`);
// });

// app.get("/azim", (req, res) => {
//     res.send(`<h1>Azim page</h1>`);
// });

// app.get("/about", (req, res) => {
//     res.send(`<h1>About page</h1>`);
// });

// app.get("*", (req, res) => {
//     res.send(`<h1>404 page not found</h1>`);
// });

// // Post request
// app.post("/", (req, res) => {
//     res.send(`You sent a post request`);
// });



// Path Parameters
// app.get("/", (req, res) => {
//     res.send(`Home page`);
// });

// app.get("/:username/:id", (req, res) => {
//     let { username, id } = req.params;
//     res.send(`Welcome @${username}!`);
// });



// Query Strings
app.get("/", (req, res) => {
    res.send(`Home page`);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("No search query");
    }
    res.send(`These are the results for: ${q}`);
});
<h1 align="center">EXPRESS</h1>
<br/>

![](https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA)

## Listening & Sending response

```js
const express = require("express");
const app = express();
const port = 8080;

// listening
app.listen(port, () => {
    console.log(`listening for poat ${port}`);
});

// request
app.use((req, res) => {
    console.log("request recived");

    // Sending a Response //

    // Plane Text response
    res.send("Hello World!");

    // >> HTML response
    res.send("<h1>Sk Azim</h1>");

    // JS object response
    // Express automatally converts JS Object to Json file 
    res.send({
        name: "Azim",
        age: 20
    });
});
```

## Routing

it is process of selecting a path for traffic in a network or between or across multiple networks.

Example:

```js 
// routing
app.get("/", (req, res) => {
    res.send(`<h1>Home page</h1>`);
});

app.get("/azim", (req, res) => {
    res.send(`<h1>Azim page</h1>`);
});

app.get("/about", (req, res) => {
    res.send(`<h1>About page</h1>`);
});

app.get("*", (req, res) => {
    res.send(`<h1>404 page not found</h1>`);
});

// Post request
app.post("/", (req, res) => {
    res.send(`You sent a post request`);
});
```

## Path Parameters

Example:

```js
// Path Parameters
app.get("/", (req, res) => {
    res.send(`Home page`);
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`Welcome @${username}!`);
});
```

Output:

If i enter `http://localhost:8080/azim/78` 
* O/p
  
  ```js
  Welcome @azim!
  ```

## Query Strings

Example:

```js
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
```

Output:

If i enter `http://localhost:8080/search?q=azim` 
* O/p
  ```js
  These are the results for: azim
  ```

## Get & Post Requests

### GET

Used to GET some response

Data sent in query strings (limited, string data & visible in URL)

### POST

Used to POST something (for Createl Writel Update)

Data sent via request body (any type of data)

Example:

```js
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
```
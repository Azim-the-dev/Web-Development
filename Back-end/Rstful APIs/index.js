let express = require('express');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
let path = require('path');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [];

app.get('/', (req, res) => {
    res.redirect('/posts');
});

app.get('/posts', (req, res) => {
    res.render("index", { posts });
});

app.get('/posts/new', (req, res) => {
    res.render("new");
});

app.post('/post', (req, res) => {
    let { username, content } = req.body;
    let date = new Date();
    let id = uuidv4();
    posts.push({ id, username, content, date });
    res.redirect("/posts");
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("view", { post });
});

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit", { post });
});

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.get('*', (req, res) => {
    res.send('<h1 align="center">Are you mad</h1>');
});

app.listen(port, () => {
    console.log(`Server >> http://localhost:${port}/`);
});

// Back-end is too tuf
import express from "express";
import mysql from "mysql2/promise";
import methodOverride from 'method-override';
const app = express();
const port = 8080;

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "azim_app",
    password: "7786",
});

app.get("/", async (req, res) => {
    let query = "SELECT count(*) FROM user";
    try {
        const [results] = await connection.query(query);

        let count = results[0]['count(*)']; //
        res.render('index', { count }); // showing users count from database
    } catch (err) {
        res.send(err);
    }
    // connection.end(); // Don't end
});

app.post("/", (req, res) => {
    res.redirect("/user");
});

app.get("/user", async (req, res) => {

    let query = "SELECT * FROM user";
    try {
        const [results] = await connection.query(query);

        res.render("user", { results });
    } catch (err) {
        res.send(err);
    }
});


// Edit rout
app.get('/user/:id/edit', async (req, res) => {
    let { id } = req.params;

    let query = `SELECT * FROM user WHERE id="${id}"`;
    try {
        const [results] = await connection.query(query);

        let user = results[0];
        res.render("edit", { user });
    } catch (err) {
        res.send(err);
    }
});

// Update (DB) rout
app.patch('/user/:id', async (req, res) => {
    let { id } = req.params;
    let { username: fromUsername, password: fromPassword } = req.body;

    let query = `SELECT * FROM user WHERE id="${id}"`;
    try {
        const [results] = await connection.query(query);
        let user = results[0];
        if (user.password != fromPassword) {
            res.send("Wrong password!");
        } else {
            let query2 = `UPDATE user SET name = "${fromUsername}" WHERE id="${id}"`;
            console.log(fromUsername, id);
            try {
                const [results] = await connection.query(query2);

                res.redirect('/user');
            } catch (err) {
                res.send(err);
            }
        }
    } catch (err) {
        res.send(err);
    }
});

// DElete rout
app.get('/user/:id/delete', async (req, res) => {
    let { id } = req.params;

    let query = `SELECT * FROM user WHERE id="${id}"`;
    try {
        const [results] = await connection.query(query);

        let user = results[0];
        res.render("delete", { user });
    } catch (err) {
        res.send(err);
    }
});

// Update (DB) rout
app.delete('/user/:id', async (req, res) => {
    let { id } = req.params;
    let { username: fromUsername, password: fromPassword } = req.body;

    let query = `SELECT * FROM user WHERE id="${id}"`;
    try {
        const [results] = await connection.query(query);
        let user = results[0];
        if (user.password != fromPassword) {
            res.send("Wrong password!");
        } else {
            let query2 = `DELETE FROM user WHERE id="${id}"`;
            console.log(fromUsername, id);
            try {
                const [results] = await connection.query(query2);

                res.redirect('/user');
            } catch (err) {
                res.send(err);
            }
        }
    } catch (err) {
        res.send(err);
    }
});

app.listen(port);

// This is a Example express with SQL
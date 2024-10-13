import mysql from "mysql2/promise";

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "azim_app",
  password: "7786",
});

let query = "INSERT INTO user (id, name, email, password) VALUES ?";
let user = [
  [8, "Axim", "axim@tech.com", "0233"],
  [9, "Alam", "alam@tech.com", "1723"],
  [10, "Aziz", "aziz@tech.com", "1233"]
];

// A simple SELECT query
try {
  const [results, fields] = await connection.query(query, [user]);

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err);
}
connection.end();

// Example of SQL with Node JS
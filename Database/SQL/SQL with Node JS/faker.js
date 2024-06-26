import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";

function randomUser() {
  return [
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];
}

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "azim_app",
  password: "7786",
});

let query = "INSERT INTO user (name, email, password) VALUES ?";
let user = [];

for (let i = 0; i <= 100; i++) {
  user.push(randomUser());
}

try {
  const [results, fields] = await connection.query(query, [user]);

  console.log(results);
  console.log(fields);
} catch (err) {
  console.log(err);
}
connection.end();

// inserting fake user data to database.
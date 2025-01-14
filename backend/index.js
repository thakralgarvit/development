const express = require('express');
const app = express();
const path = require("path");
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const { connect } = require('http2');

const connection = mysql.createConnection( {
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "@veena100"
});

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // so that our server run smoothly no matter where we start it from.
app.use(express.static(path.join(__dirname, "/public"))); // so that our server run smoothly no matter where we start it from.

try {
  connection.query("SHOW TABLES", (err, results) => {
    if (err) throw err;
    console.log(results);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let randuser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }


  
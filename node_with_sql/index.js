const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "@veena100"
});

let randdata = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for(let i = 0; i < 100; i++) {
//     data.push(randdata());
// }



app.get("/", (req,res) => {
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

app.get("/user", (req, res) => {
    let q = "SELECT * FROM user";
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("show.ejs", { users });
        })
    } catch (err) {
        console.log("error found in /user");
        res.send(err);
    }
});

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        })
    } catch (err) {
        console.log("error found in /user");
        res.send(err);
    }
    
});

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { username: newuser, password: newpass } = req.body; 
    let q = `SELECT * FROM user WHERE id= "${id}"`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (newpass != user.password) {
                res.send("error password does not match");
            } else {
                let q2 = `UPDATE user SET username="${newuser}" WHERE id="${user.id}"`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("error in updating");
    }
});

app.listen("8080", () => {
    console.log("server is listening to 8080");
});


// try {
    //     connection.query(q, [data], (err, result) => {
        //         if (err) throw err;
        //         console.log(result);
//     });
// } catch (err) {
    //     console.log(err);
    // }
    // connection.end();
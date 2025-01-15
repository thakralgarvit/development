const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const path = require("path");
const methodoverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

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

app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});
app.get("/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
    let { username, email, password } = req.body;
    let id = faker.string.uuid();
    let q = `INSERT INTO user (id, username, email, password) VALUES ("${id}", "${username}", "${email}", "${password}")`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log("user added");
            res.redirect("/user");
        });
    } catch (err) {
        res.send("something went wroung in new user;");
    }
});

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("delete.ejs", { user });
        });
    } catch (err) {
        res.send("error while deleting");
    }
});

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];

            if(user.password != password) {
                res.send("wrong password");
            } else {
                let q2 = `DELETE FROM user WHERE id='${id}'`;
                connection.query(q2,  (err,  result) => {
                    if (err) throw err;
                    else {
                        console.log(result);
                        console.log("account deleted");
                        res.redirect("/user");
                    }
                });
            }
        });
    } catch (err) {
        console.log("error while deleting");
    }
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
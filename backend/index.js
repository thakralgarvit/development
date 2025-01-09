const express = require('express');
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // so that our server run smoothly no matter where we start it from.

app.listen(port, () => {
    console.log("app is listening");
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    if(data) {
        res.render("insta.ejs", {data});
    } else {
        res.render("error.ejs");
    }
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let dice = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { num: dice});
});

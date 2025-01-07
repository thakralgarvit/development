const express = require('express');
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log("app is listening");
});

app.get("/", (req, res) => {
    console.log(req);
    let code = "<h1>hey my name is garvit</h1>"
    res.send(code);
});
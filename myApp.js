require('dotenv').config()
require('body-parser');
const bodyParser = require('body-parser');
let express = require('express');
let app = express();

bodyParser.urlencoded({extended:false})

// midleware to set design 
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

var message = 'Hello json';
app.get("/json", (req, res, next) => {
    console.log(req.method, req.path, "-", req.ip.trim());
    next();
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ time: req.time });
})

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word });
})


app.get("/name", function (req, res) {
    const { first: firstName, last: lastName } = req.query;
    res.json({ name: `${firstName} ${lastName}` });
});




















module.exports = app;

require('dotenv').config()
let express = require('express');
let app = express();



// app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));


app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json",(req,res)=>{
    const response=process.env.MESSAGE_STYLE == "uppercase"?"Hello Json".toUpperCase():"Hello Json";
    res.json({"message": response})
})



































 module.exports = app;

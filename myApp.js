require('dotenv').config()
let express = require('express');
let app = express();



// app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));


app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json",(req,res)=>{
    console.log(process.env.MESSAGE_STYLE)
    const response=process.env.MESSAGE_STYLE == "uppercase"?"brown fox jumps over the lazy".toUpperCase():"Hello Wasdfasdfasdorld";
    res.json({"message": response})
})



































 module.exports = app;

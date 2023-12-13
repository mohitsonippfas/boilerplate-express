let express = require('express');
let app = express();



// app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));


app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json",(req,res)=>{
    if (process.env.VAR_NAME === "allCaps") {
        response = "Hello World".toUpperCase();
      } else {
        response = "Hello World";
      }
    res.json({"message": response})
})



































 module.exports = app;

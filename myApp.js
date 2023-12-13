require('dotenv').config()
let express = require('express');
let app = express();



// midleware to set design 
app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", (req, res) => {
  let response;
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "Hello Json".toUpperCase() });
    // response = "Hello Json".toUpperCase();
  } else {
    // response = "Hello Json";
    res.json({ "message": "Hello Json" });
  }
  // res.json({ "message": response,"MESSAGE_STYLE":process.env.MESSAGE_STYLE,"response":response });
});





































 module.exports = app;

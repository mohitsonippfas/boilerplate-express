require('dotenv').config()
let express = require('express');
let app = express();



// midleware to set design 
app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

var message= 'Hello json';
app.get("/json", (req, res) => {
  if ( process.env.MESSAGE_STYLE === "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message });
  }
});





































 module.exports = app;

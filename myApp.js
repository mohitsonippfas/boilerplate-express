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
    response = "Hello Json".toUpperCase();
    console,log("MESSAGE_STYLE",process.env.MESSAGE_STYLE," response",response)
  } else {
    response = "Hello Json";
    console,log("MESSAGE_STYLE",process.env.MESSAGE_STYLE," response",response)
  }
  res.json({ "message": response });
});





































 module.exports = app;

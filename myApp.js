require('dotenv').config();
let express = require('express');
let app = express();

const note = {
  "message":"Hello json"
};

// midleware to set design 
app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

// app.get("/json", (req, res) => {
//   let response;
//   if (process.env.MESSAGE_STYLE == "uppercase") {
//     response = "Hello Json".toUpperCase();
//   } else {
//     response = "Hello Json";
//   }
//   res.json(process.env.MESSAGE_STYLE)
//   res.json({ "message": response });
// });

app.get('/json', (rq, rs) => {

  if(process.env.MESSAGE_STYLE == 'uppercase'){

    note.message = note.message.toUpperCase();
    
  };

  rs.json(note);
  
});



































 module.exports = app;

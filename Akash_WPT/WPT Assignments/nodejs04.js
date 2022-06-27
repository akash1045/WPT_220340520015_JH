const express = require("express");
const app = express();

app.use(express.static("cp"));



app.get("/addItem", (req, res) => {
  console.log("name is :"+req.query.name+" " );
  res.send("name is :"+req.query.name+" "+req.query.lastname);
});

app.get("/updateItem", (req, res) => {
  res.send("update item needs to be done.");
});

app.listen(909, function () {
  console.log("Listening to server 909");
});



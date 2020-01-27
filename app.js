const express = require('express');
const app = express();

let links = []

app.get("/", (req, res) => {
  res.send("Hello World");
});
        
app.get("/get", (req, res) => {
  res.send(links);
});

app.post("/add", (req, res) => {
  links.append(req.body.link);
});

app.listen(3000)

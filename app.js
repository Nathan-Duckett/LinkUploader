const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let links = []

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/get/:index", (req, res) => {
  let index = req.params.index;
  let link = links[index];
  res.send(link);
});

app.get("/go/:index", (req, res) => {
  let index = req.params.index;
  let link = links[index];
  res.redirect(link);
});

app.get("/get", (req, res) => {
  res.send(links);
});

app.get("/clear", (req, res) => {
  links = []
  res.send("Cleared List");
});

app.get("/remove/:index", (req, res) => {
  let index = req.params.index;
  links.splice(index, 1);
  res.send("Removed link at index " + index);
});

app.post("/add", (req, res) => {
  links.push(req.body.link);
  res.send("success");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

app.listen(3000)

// load components and assign them to a variable
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const createError = require('http-errors');

// assign static middleware to enable express to use static files in folder "public"
app.use("/static", express.static("public"));

// set up pug as a template engine
app.set("view engine", "pug");

// add routes
app.use("/", routes);
// json
app.use(express.json());
// error handler

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// run app on port 3000. Confirm with message, if app is running on server
app.listen(3000, () => {
  console.log("app runs on localhost:3000");
});
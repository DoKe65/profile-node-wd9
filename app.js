// load components and assign them to a variable
const express = require("express");
const app = express();
const createError = require('http-errors');
// assign routes/index.js to routes, to make the path accessible
const routes = require("./routes/index");

// assign static middleware to enable express to use static files in folder "public"
app.use("/static", express.static("public"));

// set up pug as a template engine
app.set("view engine", "pug");

// add routes
app.use("/", routes);

// enable express json handler
app.use(express.json());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  if(err.status === 404) {
    res.locals.message = "This page doesn't exist. Please return to Home.";
    res.render("page-not-found", {err});
  } else if (res.status(err.status || 500)) {
    res.locals.message = err.message;
    res.render("error", {err});
  }
});

// run app on port 3000. Confirm with message, if app is running on server
app.listen(3000, () => {
  console.log("app runs on localhost:3000");
});
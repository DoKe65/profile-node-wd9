// assign functions and components to variables
const express = require("express");
const router = express.Router();
const {projects} = require("../data.json");

// Get home page
router.get("/", (req, res, next) => {
  // Pass project data to 'index' template
  res.render('index', {projects});
});

router.get("/about", (req, res, next) => {
  // render about page
  res.render("about");
});

// Get chosen project and render it on project page
router.get("/project/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({id}) => id === +projectId);

  // if project doesn't exist, pass 404-error to error handler in app.js
  if (project) {
    res.render("project", {project});
  } else {
    res.status = 404;
    return next();
  }
});

module.exports = router;
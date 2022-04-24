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

// Get project page
router.get("/project/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({id}) => id === +projectId);

  if (project) {
    res.render("project", {project});
  } else {
    res.status = 404;
    return next();
  }
});

module.exports = router;
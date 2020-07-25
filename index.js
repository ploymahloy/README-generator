var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Title:"
  },
  {
    type: "input",
    name: "description",
    message: "Description:"
  },
  {
    type: "input",
    name: "table-of-contents",
    message: "Table of Contents:"
  },
  {
    type: "input",
    name: "installation",
    message: "Installation:"
  },
  {
    type: "input",
    name: "usage",
    message: "Usage:"
  },
  {
    type: "input",
    name: "license",
    message: "License:"
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing:"
  },
  {
    type: "input",
    name: "tests",
    message: "Tests:"
  },
  {
    type: "input",
    name: "questions",
    message: "Questions:"
  },
]).then(function(data) {

  var filename = data.name.toLowerCase().split(' ').join('') + ".md";

  fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
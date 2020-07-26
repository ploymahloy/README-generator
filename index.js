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
    name: "tableofcontents",
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
])

.then(function(data) {

  const docMDN =
  `
  # ${data.title}
  ## ${data.description}
  ## ${data.tableofcontents}
  ## ${data.installation}
  ## ${data.usage}
  ## ${data.license}
  ## ${data.contributing}
  ## ${data.tests}
  ## ${data.questions}
  `


  fs.writeFile("README.md", docMDN, function(err) { 
    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
const { BadgeFactory } = require("gh-badges");
var fs = require("fs");
var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "shortDescription",
      message: "Give a short description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What is needed to get your project running?",
    },
    {
      type: "input", 
      name: "versionNo",
      message: "What is the version number of your project?"
    }
  ])
  .then(({ name, projectName, shortDescription, installation, versionNo }) => {
    const readMeGenHTML = `
# ${projectName}
![version](https://img.shields.io/badge/version-${versionNo}-blue)

made by ${name}

> ${shortDescription} 

{{description}}

### Installation
To install and use this application, ${installation}
    
`;

    console.log(readMeGenHTML);
    fs.writeFile("README.md", readMeGenHTML, (err) => {
      if (err) console.error(err);
      else console.log("File Written!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

/*
  ,
    {
        type: 'input',
        name: "usage",
        message: "How do you use the project?"
    },
    {
        type: 'input',
        name: "licence",
        message: "What licenses does your project have?"
    },
    {
        type: 'input',
        name: "contributing",
        message: "how are people able to contribute?"
    },
    {
        type: 'input',
        name: "tests",
        message: "what tests?"
    },
    {
        type: 'input',
        name: "questions",
        message: "questions?"
    }
    */

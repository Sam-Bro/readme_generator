const { BadgeFactory } = require("gh-badges");
var fs = require("fs");
var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
      default: "README generator"
    },
    {
      type: "input",
      name: "versionNo",
      message: "What is the version number of your project?",
      default: "1.0"
    },
    {
      type: "input",
      name: "shortDescription",
      message: "Give a short description of your project?",
      default: "dynamically generate a readme from a users input"
    },
    /* description */
    {
      type: "input",
      name: "description",
      message: "Describe your project",
    },
    {
      type: "input",
      name: "whyBuild",
      message: "This project was built because?",
    },
    {
      type: "input",
      name: "problemSolved",
      message: "What problem does it solve?",
    },
    {
      type: "input",
      name: "whatLearnt",
      message: "What did you learn?",
    },
    /*end description */
    {
      type: "input",
      name: "installation",
      message: "What is needed to get your project running?",
      Default: "No installation required"
    },
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
        message: "how are people able to contribute?",
        default: "contributions are not currently open to public."
    },
    {
        type: 'input',
        name: "tests",
        message: "what tests are available for the project?",
        default: "No tests available"
    },
    {
      type: 'input',
      name: 'github',
      message: 'what is the github url for the project?'
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      default: "Samuel Broughton"
    },
  ])
  .then(({ name, projectName, shortDescription, installation, versionNo, description, whyBuild, problemSolved, whatLearnt, usage, licence, contributing, tests, github  }) => {
    const readMeGenHTML = `
# ${projectName}
![version](https://img.shields.io/badge/version-${versionNo}-blue)

> ${shortDescription} 

${description}. This project was built because ${whyBuild}. The ${projectName} helps solve the problem of ${problemSolved}. In the duration of this project, I learned ${whatLearnt}.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributing](#Contributing)
- [Tests](#tests)
- [Questions](#questions)


### Installation
To install and use this application, ${installation}

## usage
To use the application, ${usage}

## licence
project licences: 
 ${licence}

## contributing
${contributing}

## tests
${tests}

## questions
  - github Repository: ${github}
  - github: https://sam-bro.github.io/
  - Created by ${name}
    
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

    */

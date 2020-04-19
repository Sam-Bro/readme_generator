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
      message: "What is the version number of your project?",
    },
  ])
  .then(({ name, projectName, shortDescription, installation, versionNo }) => {
    const readMeGenHTML = `
# ${projectName}
![version](https://img.shields.io/badge/version-${versionNo}-blue)

made by ${name}

> ${shortDescription} 

a command-line application that dynamically generates a README.md from a user's input, the application will be invoked with the command "node index.js". The user will be prompted for their name, project description and other information pertaining to the project the README is for.

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
To use the application, open terminal in the folder containing the index.js file. enter "node index.js" into the terminal and answer the prompts, once all of the prompts have been answered a README.md file will be created in the same file as index.js.

## licence
No licences 

## contributing
contributions are not currently open to public.
Contact repository owner with any inquiries regarding contributions.
    
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

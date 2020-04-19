var fs = require ('fs');
var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: 'input',
        name: "projectName",
        message: "What is the name of your project?"
    },
    {
        type: 'input',
        name: "name",
        message: "What is your name?"
    },
    {
        type: 'input',
        name: "shortDescription",
        message: "Give a short description of your project?"
    },
    {
        type: 'input',
        name: "installation",
        message: "What is needed to get your project running?"
    }
  ])
  .then(({name, projectName, shortDescription, installation }) => {
    const installInp = "no";
    const readMeGenHTML = `
# ${projectName}

made by ${name}

> ${shortDescription} 

{{description}}

### Installation
    
## Badges
- build status
- issues (waffle.io maybe)
- devDependencies
- npm package
- coverage
- slack
- downloads
- gitter chat
- license
- etc.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![Github Issues](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/issues.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/issues) [![Pending Pull-Requests](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/pulls.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/pulls) [![Gem Version](http://img.shields.io/gem/v/badgerbadgerbadger.svg?style=flat-square)](https://rubygems.org/gems/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Badges](http://img.shields.io/:badges-9/9-ff6799.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger)

- For more on these wonderful ~~badgers~~ badges, refer to <a href="http://badges.github.io/badgerbadgerbadger/" target="_blank">"badgerbadgerbadger"</a>.
`;

if (installInp === "yes"){
  `To install and use this application, ${installation}`
} else {
  `No installation required`
};
console.log(readMeGenHTML);
fs.writeFile("README.md", readMeGenHTML, (err) => {
    if (err) console.error(err);
    else console.log("File Written!");
    });
  })
  .catch(error => {
    if(error.isTtyError) {
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
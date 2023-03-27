// TODO: Include packages needed for this application
// In NodeJS, require() is a built-in function to include external modules that exist in separate files.
// inquirer is a node.js modulee that provides an easy way to capture user input in the command line interface
// fs is short for file system and it is a node.js module for interacting with the file system on a users computer.
// The generateMarkdown.js file was written by me to generate the markdown for the readme file. 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter an email address:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions:',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide guidelines for how others can contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions for running tests:',
    },
    {
        // The list type is used so that the user can select from the predetermined choices
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['Apache License 2.0', 'Do What The F*ck You Want To Public License', 'MIT License', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'No License']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // The writeFile method in Node.js needs to use a callback function as the third argument.
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('Data written to file')
    })


}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
          console.log(data)
          writeToFile("README.md", data)  

        }
        )
}

// Function call to initialize app
init();
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-name',
        message: 'Enter a name for your project:',
    },
    {
        type: 'input',
        name: 'project-description',
        message: 'Please describe your project:',
    },
    {
        type: 'input',
        name: 'project-github',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'project-email',
        message: 'Please enter an email address:',
    },
    {
        type: 'input',
        name: 'project-installation',
        message: 'Please provide installation instructions:',
    },
    {
        type: 'input',
        name: 'project-usage',
        message: 'Please provide usage instructions:',
    },
    {
        type: 'input',
        name: 'project-contributions',
        message: 'Please provide guidelines for how others can contribute:',
    },
    {
        type: 'input',
        name: 'project-tests',
        message: 'Please provide instructions for running tests:',
    },
    {
        // The list type is used so that the user can select from the predetermined choices
        type: 'list',
        name: 'project-license',
        message: 'Select a license for your project:',
        choices: ['Apache License 2.0', 'Do What The F*ck You Want To Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
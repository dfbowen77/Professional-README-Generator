// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log("Testing renderLicenseBadge function")
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log("Testing generateMarkdown function")
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
If you have questions you can contact me via:
* Email: ${data.email}
* GitHub: [${data.github}](https://github.com/${data.github}) 

## License
${data.license}


`;
}

module.exports = generateMarkdown;
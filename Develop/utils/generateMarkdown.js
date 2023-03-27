// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // switch is used instead of if/else. Switch also performs different actions based on different conditions, except it can be slightly less confusing than many if/else statements.
    switch(license){
        // The license badges were created using the shields.io website.
        // It allows for the use of stock and customized shields
        case "Apache License 2.0":
        licenseBadge = "https://img.shields.io/badge/license-Apache--2.0-blue"
        break; 

        case "Do What The F*ck You Want To Public License": 
        licenseBadge = "https://img.shields.io/badge/license-Do%20What%20The%20F*ck%20You%20Want%20To-red"
        break; 

        case "MIT License":
        licenseBadge = "https://shields.io/badge/license-MIT-green"
        break; 

        case "Mozilla Public License 2.0":
        licenseBadge = "https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-success"
        break; 

        case "Open Software License 3.0":
            licenseBadge = "https://img.shields.io/badge/license-Open%20Software%20License%203.0-orange"
        break; 

        case "No License":
            licenseBadge = ""
        break; 
    }
    return(licenseBadge)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
        case "Apache License 2.0":
            licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
        break; 

        case "Do What The F*ck You Want To Public License": 
            licenseLink = "http://www.wtfpl.net/txt/copying/"
        break; 

        case "MIT License":
            licenseLink = "https://mit-license.org/"
        break; 

        case "Mozilla Public License 2.0":
            licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/"
        break; 

        case "Open Software License 3.0":
            licenseLink = "https://opensource.org/license/osl-3-0-php/"
        break; 

        case "No License":
            licenseLink = ""
        break; 
    }
    return(licenseLink)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

        // template literals are demarcated by the back ticks. They are used to concatenate text and define strings.
        licenseSection = `For more information about the ${license} visit the following link: ${licenseLink}`
        licenseBadgeSection = `![Github License](${licenseBadge})`
        switch(license){
            case "No License":
                licenseSection = ""
                licenseBadgeSection = ""
            break;
        }
    }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    renderLicenseBadge(license)
    renderLicenseLink(license)
    renderLicenseSection(license)

    // Template literals are used to generate the markdown... One of the reasons is that Template literals allows multiline strings.
    // The square brackets in the markdown are used to create link text (e.g. [Installation] is clickable link text that then allows the user to select the #installation section of the document)
    return `# ${data.title}
${licenseBadgeSection}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
If you have questions you can contact me via:
* Email: ${data.email}
* GitHub: [${data.github}](https://github.com/${data.github}) 




`;
}

// According to tutorials teacher: The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module. 
module.exports = generateMarkdown;
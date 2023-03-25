// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log("Testing renderLicenseBadge function")
    console.log(license)
    switch(license){
        // The license badges were created using the shields.io website.
        // It allows for the use of stock and customized shields
        case "Apache License 2.0":
        licenseBadge = "https://img.shields.io/badge/license-Apache--2.0-blue"
        break; 

        case "Do What The F*ck You Want To Public License": 
        licenseBadge = "https://img.shields.io/badge/license-Do%20What%20The%20F*ck%20You%20Want%20To-red"
        break; 

        case "MIT":
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
    console.log("Testing renderLicenseBadge function")
    console.log(license)
    switch(license){
        // The license badges were created using the shields.io website.
        // It allows for the use of stock and customized shields
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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log("Testing generateMarkdown function")
    license = data.license
    renderLicenseBadge(license)
    renderLicenseLink(license)
    renderLicenseSection(license)

  return `# ${data.title}
![Github License](${licenseBadge})

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
For more information about the ${data.license} visit the following link: ${licenseLink}

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

module.exports = generateMarkdown;
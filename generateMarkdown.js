function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\nThis project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact [${data.username}](https://github.com/${data.username}) directly at ${data.email}.

---

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Features


## How to Contribute

${data.contributing}

## Tests

${data.tests}
`;
}

module.exports = generateMarkdown;

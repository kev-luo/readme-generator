function template(data) {
return `
# ${data.repoName}
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
![GitHub top language](https://img.shields.io/github/languages/top/${data.githubUserName}/${data.repoName})

## Description
${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
    ${data.dependencies}

## Usage
${data.usage}

## License
Licensed under the [${data.license}](https://opensource.org/licenses/${data.license}) License.

## Contributing
${data.contributing}

## Tests
    ${data.tests}


## Questions
![github profile pic](https://github.com/${data.githubUserName}.png?size=100)
* [${data.email}](${data.email})
`;
} 

module.exports = template;
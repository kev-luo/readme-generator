function template(data) {
return `
# ${data.repoName}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
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
Licensed under the [MIT](https://github.com/microsoft/vscode/blob/master/LICENSE.txt) License.

## Contributing
${data.contributing}

## Tests
    ${data.tests}


## Questions
* [Github](https://github.com/${data.githubUserName}/)
* [${data.email}](${data.email})
`;
} 

module.exports = template;
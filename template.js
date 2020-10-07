const template = `
# {{title}}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub top language](https://img.shields.io/github/languages/top/{{githubUserName}}/{{repoName}})

## Description

## Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Installation

## Usage

## License
Licensed under the [MIT](https://github.com/microsoft/vscode/blob/master/LICENSE.txt) License.

## Contributing

## Tests

## Questions
* [Github](https://github.com/{{githubUserName}}/)
* [{{email}}]({{email}})
`;

module.exports = template;
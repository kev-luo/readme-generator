const fs = require('fs');
const template = require('./template');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'githubUserName'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the repository name?',
        name: 'repoName'
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What kind of license should your project have?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing'
    }
]

const createReadMe = () => {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile('readme.md',template(response), (err) => {
            if (err) throw err;
            console.log('yeet');
        })
    })
}

createReadMe();

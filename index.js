const fs = require('fs');
const mustache = require('mustache');
const template = require('./template');
const inquirer = require('inquirer');

const createReadMe = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What would you like to title your ReadMe?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'githubUserName'
        },
        {
            type: 'input',
            message: 'What is the repository name?',
            name: 'repoName'
        },
        {
            type: 'input',
            message: 'What is the best email for others to reach you at?',
            name: 'email'
        }
    ]).then((response) => {

        let finalForm = mustache.render(template,response);

        fs.writeFile('readmeGood.md',finalForm, (err) => {
            if (err) throw err;
            console.log('yeet');
        })
    })
}

createReadMe();

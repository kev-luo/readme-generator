const fs = require('fs');
const mustache = require('mustache');
const inquirer = require('inquirer');

let template = '{{name}} is {{age}} years old';
let person = {
    name: "John",
    age: 25
};

let finalForm = mustache.render(template,person);

fs.writeFile('readmeGood.md',finalForm, (err) => {
    if (err) throw err;
    console.log('yeet');
})
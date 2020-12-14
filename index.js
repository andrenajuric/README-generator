// require 'inquirer' package & fs module
const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'editor',
        message: 'Please provide a description of your project:',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'What is the user story?',
        name: 'story',
    },
    {
        type: 'editor',
        message: 'What is the acceptance criteria?',
        name: 'criteria',
    },
    {
        type: 'checkbox',
        message: 'Select open-source license:',
        choices: ['MIT', 'Apache 2.0', 'BSD'],
        name: 'license',
    },
    {
        type: 'editor',
        message: 'Please provide installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide directions to contact you for questions:',
        name: 'ifQuestions',
    },
    {
        type: 'input',
        message: 'What is a good email address to contact you?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            const generateMarkdown = require('./utils/generateMarkdown.js');

            const content = generateMarkdown(response);

        })
}

// function call to initialize program
init();

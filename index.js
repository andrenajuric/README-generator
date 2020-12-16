// require 'inquirer' package & fs module
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description',
    },
    {
        type: 'editor',
        message: 'Please provide installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username: ',
        name: 'github'
    },
    {
        type: 'editor',
        message: 'How to use the program?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Are there any images you would like to include?',
        name: 'screenshot',
    },
    {
        type: 'input',
        message: 'Please provide a link to to your live demo: ',
        name: 'demo',
        default: 'N/A',
    },
    {
        type: 'list',
        message: 'Please select a license from the following list: ',
        choices: [
            'MIT',
            'Apache 2.0',
            'BSD-3-Clause',
            'BSD-2-Clause',
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please enter your full name for the license: ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter the year for the license: ',
        name: 'year',
        default: '2020',
    },
    {
        type: 'input',
        message: 'Contribution: ',
        name: 'contribution',
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
    }
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Success!');
        // console.log(fs.readFile('README.md', 'utf8'));
    })
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            console.log('Your README file is being generated...');

            console.log(response);

            let data = response;

            writeToFile('README.md', generateMarkdown(data));

        })
}

// function call to initialize program
init();
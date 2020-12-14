const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
        },
        {
            type: 'password',
            message: 'What is your password?',
            name: 'password',
        }
    ])

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

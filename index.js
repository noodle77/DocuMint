// Packages needed for this application
const mdGen = require('./utils/mdGen.js');
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user inputs
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the application?'
    },
    {
        type: 'input',
        name: 'description',
        message: "Write a description of the application's purpose and functionality."
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Outline the installation process for the application (if applicable).'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide intructions on how to use the application.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List any collaborators with a link to their GitHub.'
    },
    {
        type: 'input',
        name: 'testing',
        message: "Include any tests you've written for the project."
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick the license from the list (if applicable). Otherwise, pick the empty string.'
    },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Success! README has been generated.")
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const answerGen = mdGen(answers);
            writeToFile('README.md', answerGen);
        })
        .catch((error) => {
            console.error(error);
        });
};

// Function call to initialize app
init();
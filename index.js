const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const {writeFile,generateMarkdown} = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [

    {
        type: 'Input' ,
        name: 'name',
        message: 'what is your GitHub username?'
    },
    {
        type:'input',
        name: 'email',
        message:'What is your email address?'
    },
    {
        type: 'input',
        name:'title',
        message:'what is your project`s name?'
    },
    {
        type: 'input',
        name:'descroption',
        message:'Please write a short description of your project?'
    },
    { 
        type: 'checkbox',
        name: 'license',
        message: ' What kind if license should your project have? (Check all that apply)',
        choices: ['MIT', 'GNU GPLv3', 'CC0-1.0,CC-BY-4.0,CC-BY-SA-4.0 ', 'Apache', 'Mozilla']
      },
      {
        type: 'input',
        name:'install',
        message:'What command should be run to install dependencies?',
        default:'npm i'
    },
    {
        type: 'input',
        name:'test',
        message:'What command should be run to run test?',
        default:'npm test'
    },
    {
        type: 'input',
        name:'howTO',
        message:'What does the user needs to know about using the repo?',
    },
    {
        type: 'input',
        name:'contributing',
        message:'What does the user needs to know about contributing to the repo?',
    },
   

];


// function to initialize program
function init() {
inquirer.prompt(questions)
.then((inquirerResponses) => {
    console.log('Generating README...');
    writeFile(generateMarkdown({...inquirerResponses}));
})

}

// function call to initialize program
init();

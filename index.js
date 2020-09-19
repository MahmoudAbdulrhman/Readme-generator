const fs = require('fs');
const inquirer = require('inquirer');
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
        name:'project',
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
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'ISC']
      },

];
inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

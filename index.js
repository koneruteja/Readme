const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./src/generate-readme.js');

//Prompts for Generator// 

const promptUser = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the Name of your Project? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else{
              console.log('Please enter your Project Title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the Project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else{
              console.log('Please enter your Project description!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation requirements (Required)',
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else{
                console.log('Please enter the installation requirements!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information (Required)',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else{
                console.log('Please enter the usage information!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter the contribution guidelines (Required)',
            validate: contributionInput => {
              if (contributionInput) {
                return true;
              } else{
                console.log('Please enter the contribution guidelines!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions (Required)',
            validate: testInput => {
              if (testInput) {
                return true;
              } else{
                console.log('Please enter the test instructions!');
                return false;
              }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a License (Required)',
            choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0', 'MIT License',
             'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else{
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your Email Address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else{
                console.log('Please enter your email address!');
                return false;
              }
            }
        },
    ])
}

//Prompting User using fs.write// 

promptUser()
    .then(readmeData => {
        const markdown = generateREADME(readmeData);
        fs.writeFile('./dist/README.md', markdown, err => {
            if (err) throw new Error(err);
      
            console.log('README created!')
        });
    })
    .catch(err => {
        console.log(err);
    });

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require("fs");
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const promptManager = teamData => {
    teamData = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Manager name? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Manager ID (Required)',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter the Manager ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Manager Email (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the Manager email!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'This role is the Manager',
            choices: ['Manager']
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number (Required)',
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'teamAdd',
            message: 'Would you like to add a new employee?',
            choices: ['Engineer', 'Intern', 'Finish Building Team']
        },
    ])
    .then(employeeData => {
        teamData.push(employeeData);
        if (employeeData.teamAdd === 'Engineer') {
            return promptEngineer(teamData);
        } 
        else if (employeeData.teamAdd === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
};

const promptEngineer = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineer name? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Engineer ID (Required)',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineer ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Engineer Email (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineer email!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'This role is the Engineer',
            choices: ['Engineer']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the github link (Required)',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter the github link!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'teamAdd',
            message: 'Would you like to add a new employee?',
            choices: ['Engineer', 'Intern', 'Finish Building Team']
        },
    ])
    .then(employeeData => {
        teamData.push(employeeData);
        if (employeeData.teamAdd === 'Engineer') {
            return promptEngineer(teamData);
        } 
        else if (employeeData.teamAdd === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
};

const promptIntern = teamData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Intern name? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Intern ID (Required)',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter the Intern ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Intern Email (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the Intern email!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'This role is the Intern',
            choices: ['Intern']
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school name (Required)',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the school name!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'teamAdd',
            message: 'Would you like to add a new employee?',
            choices: ['Engineer', 'Intern', 'Finish Building Team']
        },
    ])
    .then(employeeData => {
        teamData.push(employeeData);
        if (employeeData.teamAdd === 'Engineer') {
            return promptEngineer(teamData);
        } 
        else if (employeeData.teamAdd === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
};

promptManager()
    .then(teamData => {
        console.log(teamData)
        return teamData;
    })
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
    })
    .then(copyFileResponse => {
    console.log(copyFileResponse);
    })
    .catch(err => {
    console.log(err);
    });
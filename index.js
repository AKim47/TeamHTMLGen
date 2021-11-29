const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');

const promptManager = () => {
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
            message: 'Enter the Manager Email',
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
            name: 'team',
            message: 'Would you like to add a new employee?',
            choices: ['none', 'apache-2.0', 'isc', 'mit', 'gpl-3.0']
        },
    ]);
};
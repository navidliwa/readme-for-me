const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    "What would you like your project to be called?",
    "What would you like the descritpion to be?",
    "How can users install/use your project?",
    "Provide detailed steps for usage.",
    "Please list any credits.",
    "Choose which license you have used for your project.",
    "Choose the relevant badge for your project.",
    "Please list out your projects features.",
    "How can others contribute to your project?",
    "Provide any relevant tests that can be performed.",
    "How can other developers reach out to you for questions about this project?",
    "Please provide your GitHub username.",
    "Please provide your email."
];

const badgeList = [
    "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",
    "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)",
    "![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)",
];

const licenseList = [
    "Apache 2.0",
    "CC0-1.0",
    "GPL v3",
    "MIT",
    "Open Font-1.1",
    "Zlib",
];

function writeToFile(fileName, data) {
    inquirer.registerPrompt('list-input', require('inquirer-list-input'));
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[4],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[5],
            choices: licenseList.map((license, index) => ({
                name: license,
                value: index,
            })),
        },
        {
            type: 'input',
            name: 'badges',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'features',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[8],
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[9],
        },
        {
            type: 'input',
            name: 'questions',
            message: questions[10],
        },
        {
            type: 'input',
            name: 'username',
            message: questions[11],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[12],
        }
    ])
    
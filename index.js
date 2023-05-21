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
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const roleInput = [
  {
    type: "list",
    name: "jobPosition",
    message: "What is your role at the company?",
    choices: ["Engineer", "Intern"],
  },
];

const managerInput = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your Company ID Number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your Office Number?",
  },
];
const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your employees name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employees company ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your employees email address?",
  },
];
const engineerInput = [
  {
    type: "input",
    name: "name",
    message: "What is your employees name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employees company ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your employees email address?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your employees gitHub username?",
  },
  {
    type: "list",
    choices: ["Yes", "No"],
    name: "restart",
    message: "Do you wish to add another employee?",
  },
];
const internPrompt = [
  {
    type: "input",
    name: "name",
    message: "What is your employees name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employees company ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your employees email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What School did they attend?",
  },
  {
    type: "list",
    choices: ["Yes", "No"],
    name: "restart",
    message: "Do you wish to add another employee?",
  },
];

const nextEmployee = {
  type: "list",
  choices: ["Yes", "No"],
  name: "restart",
  message: "Do you wish to add another employee?",
};

module.exports = {
  roleInput,
  managerInput,
  engineerInput,
  internPrompt,
  nextEmployee,
};

const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "employees.html");

//Renderer
const render = require("./lib/htmlRenderer");
const questions = require("./lib/questions");

//Check for all of the input questions
const {
  roleInput,
  employeeQuestions,
  nextEmployee,
  managerInput,
  engineerInput,
  internPrompt,
} = require("./lib/questions");

let employees = [];

let totalEmployees = 0;

//Manager function
function managerPrompt() {
  inquirer.prompt(managerInput).then((answers) => {
    //create a new manager
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);
    rolePrompt(totalEmployees);
  });
}

//Employee Poisition Picker
function rolePrompt() {
  inquirer.prompt(roleInput).then((answers) => {
    employeePrompts(answers.jobPosition);
  });
}


//Employee questions
function employeePrompts(role) {
  inquirer
    .prompt(role === "Engineer" ? engineerInput : internPrompt)
    .then((answers) => {
      totalEmployees += 1;
      if (role === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHub
        );
        employees.push(engineer);
      } else if (role === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
      }
      if (answers.restart === "Yes" && totalEmployees <= 4) {
        rolePrompt(totalEmployees);

      } else if (answers.restart === "Yes" && totalEmployees >= 5) {
        console.log("Maximum Employees exceeded");
        console.log("employeeStorage", employees);
        console.log("totalEmployees", totalEmployees);
        fs.writeFileSync(outputPath, render(employees));
      } else {
        //End the questions, render the HTML
        console.log("Thank you for inputting employee info");
        console.log("employeeStorage", employees);
        console.log("totalEmployees", totalEmployees);
        fs.writeFileSync(outputPath, render(employees));
      }
    });
}

//Call the prompts
managerPrompt();
module.exports = employees;
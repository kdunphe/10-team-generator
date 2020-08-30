const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");
let employees = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


// array of questions for employees
const employeeQuestions = [{
    type: "input",
    name: "Name",
    message: "Enter the employees name.",
  
  },
  {
    type: "input",
    name: "ID",
    message: "Enter the employees ID.",
  },
  {
    type: "input",
    name: "Email",
    message: "Enter the employees email address.",
  }];

  const managerQuestions = [
  {
    type: "input",
    name: "OfficeNumber",
    message: "Enter the managers office number.",
  }];

  const engineerQuestions = [
    {
      type: "input",
      name: "GitHubUsername",
      message: "Enter the engineers GitHub username.",
    }];

  const internQuestions = [
    {
      type: "input",
      name: "School",
      message: "Enter the interns school.",
    }];

  const roleQuestions = [
    {
      type: "list",
      name: "Role",
      message: "Select the employees role.",
      choices: [
          "Manager",
          "Engineer",
          "Intern",
      ]
    }];


// Source: https://www.npmjs.com/package/inquirer
// Source: https://jestjs.io/docs/en/getting-started.html



  
  
  // function to initialize program
  // Source: https://www.npmjs.com/package/inquirer
//   function init() {
//     return inquirer
//       .prompt(questions)
//       .then(answers => {
//         console.log(answers);
//         // Format responses in markdown
//         let markdown = formatText(answers);
//         // Call a function and return a string with markdown text
//         fs.writeFile('ReadMe-Demo.md', markdown, function (err) {
//           if (err) throw err;
//           console.log("Done! Successfully created ReadMe-Demo.md");
//         });
//       })
  
//       .catch(err => {
//         console.log(err)
//       });
//   }
  
  
//   // function call to initialize program
//   init();














// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

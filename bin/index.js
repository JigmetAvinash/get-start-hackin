#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const inquirer = require('inquirer');

// Function to run the CLI logic
async function runCLI() {
  try {
    // Prompt the user for inputs
    const { template, projectName } = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'What type of project do you want the starter files for?',
        choices: ['Basic HTML Website', 'NextJS Project', 'React App', 'Python App (without env)'],
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter the name of your project:',
        default: 'myproject',
      },
    ]);

    // Define paths for source templates and destination project
    const tempDir = path.join(__dirname, 'templates'); // Adjusted for the same directory
    const source = path.join(tempDir, template.toLowerCase().replace(/\s/g, '-'));
    const destination = path.join(process.cwd(), projectName);

    // Check if the template folder exists
    if (!fs.existsSync(source)) {
      console.error(`Template "${template}" not found. Please check your templates directory.`);
      return;
    }

    // Copy files from the template directory to the destination
    copyFolderSync(source, destination);
    console.log(`🎉 Project files created at: ${destination}`);

    // Prompt user for git and dependency initialization
    const { runCommands } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'runCommands',
        message: 'Do you want to initialize git and install dependencies?',
        default: false,
      },
    ]);

    // Execute commands if user agrees
    if (runCommands) {
      try {
        process.chdir(destination); // Change to the project directory
        execSync('git init', { stdio: 'inherit' });
        execSync('npm install', { stdio: 'inherit' });
        console.log('✅ Project setup complete!');
      } catch (err) {
        console.error('❌ Error running commands:', err.message);
      }
    }
  } catch (err) {
    console.error('❌ An error occurred:', err.message);
  }
}

// Function to copy a folder and its contents
function copyFolderSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Run the CLI
(async () => {
  await runCLI();
})();

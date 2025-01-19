#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import inquirer from 'inquirer';

// Function to run the CLI logic
async function runCLI() {
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

  const tempDir = path.join(path.resolve(), 'templates'); // ES modules use `path.resolve()`
  const source = path.join(tempDir, template.toLowerCase().replace(/\s/g, '-'));
  const destination = path.join(process.cwd(), projectName);

  if (!fs.existsSync(source)) {
    console.error(`Template "${template}" not found.`);
    return;
  }

  copyFolderSync(source, destination);
  console.log(`🎉 Project files created at: ${destination}`);

  const { runCommands } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'runCommands',
      message: 'Do you want to initialize git and install dependencies?',
      default: false,
    },
  ]);

  if (runCommands) {
    try {
      process.chdir(destination);
      execSync('git init', { stdio: 'inherit' });
      execSync('npm install', { stdio: 'inherit' });
      console.log('✅ Project setup complete!');
    } catch (err) {
      console.error('❌ Error running commands:', err.message);
    }
  }
}

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

(async () => {
  await runCLI();
})();

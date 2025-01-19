#!/usr/bin/env node


const fs = require('fs');
const path = require('path');
const { execSync, exec } = require('child_process');
const inquirer = require('inquirer');
const { inherits } = require('util');

const tempDir = path.join(__dirname, '../templates')

async function runCLI() {
    //What user wants to create

    const { template, projectName } = await inquirer.createPromptModule([
        {
            type: 'list',
            name: 'template',
            meessage: 'What type of project do you want the starter files for?', 
            choices: ['Basic HTML Website', 'NextJS Project', 'React App', 'Python App (without env)']  //TODO: Add more options
        }, 
        {
            type: 'input',
            name: 'projectName', 
            message: 'Enter the name of your project : ',
            default: 'myproject'
        }
    
    ])
}

//Getting the temp files

const source  = path.join(tempDir, template.toLowerCase().replace(/\s/g, '-'));
const destination = path.join(process.cwd(), projectName);

if (!fs.existsSync(source)) {
    console.error(`Template ${template} not found. (Contact the developer Avinash at Github JigmetAvinash/get-start-hackin)`)
}


const { runCommands } = await inquirer.createPromptModule([
    {
        type: 'confirm',
        name: 'runCommands',
        message: 'Do you want to initialize git and install dependencies?',
        default: false
    }
])

if (runCommands) {
    try {
             process.chdir(destination);
            execSync('git init', { stdio: 'inherit' });
            execSync('npm install', { stdio: 'inherit' });
            console.log('Project setup complete!');
    } catch (err) {
        console.error('Error running commands : ', err.message)
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

//Incase the template is for nextjs or react

if (template === 'NextJS Project' ){
    console.log('Running the nextjs project initialization command')
    execSync(`npx create-next-app@latest ${projectName}`, {stdio: 'inherit'})
    console.log("NextJS Project completed successfully!");
    return
} else if (template === 'React App'){
    console.log('Running the react-app init command')
    execSync(`npx create-react-app ${projectName}`,  {stdio : 'inherit'});
    console.log('Create React App successfully done !')
};


runCLI();
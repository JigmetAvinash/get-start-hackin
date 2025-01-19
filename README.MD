

# 🚀 Get Start Hackin'!

![Banner](https://cloud-4igvnsnrp-hack-club-bot.vercel.app/0image.png "Get Start Hackin' : CLI TOOL")

- **🔖 Latest Version**: v1.0.3
- **📈 Uptime Status**: Coming Soon  
- **📦 Check it out on [npmjs.org](https://www.npmjs.com/package/get-start-hackin)**

---

## 💡 What is *Get Start Hackin'*?

Get Start Hackin' is a **CLI (Command Line Interface)** tool designed for developers (or hackers like you!) to kickstart projects with boilerplate files.  
Whether you're working on a **Basic HTML website**, a **React app**, or a **Next.js project**, this tool saves you time by generating the necessary files and folder structure for you.  

---

### ✨ Features ✨
✅ Offers a variety of projects to choose from for every skill level.  
✅ Inbuilt integration for advanced projects like **Next.js** and **React**.  
✅ 🛡️ Privacy in mind: Fully open-source, with no data tracking or server calls.  
✅ Actively maintained and constantly updated with new templates.  
✅ Super easy to use with just a few commands.  

---

### 🚧 Limitations
⚠️ Currently has a small selection of templates, but don't worry—we're working hard to expand them! Expect new templates by the **end of February**.  

---

## 🎉 Getting Started with *Get Start Hackin'*

### Prerequisites
- **Node.js** (v12 or higher recommended)  
- **npm** or **yarn** installed on your machine.

### 📥 Installation

#### Install the Package Globally:
```bash
npm install -g get-start-hackin
```

#### Use Directly with NPX (Recommended):
```bash
npx get-start-hackin
```

---

## 📚 How to Use *Get Start Hackin'*

### Step 1: Run the CLI
After installation, simply run the following command:  
```bash
npx get-start-hackin
```

### Step 2: Select a Project
You’ll be prompted to choose the type of project you want to create.  
Options include:  
- 🖼️ **Basic HTML Website**  
- ⚛️ **React App**  
- 🔥 **Next.js Project**  
- 🐍 **Python App (without env)**  

### Step 3: Provide a Project Name
Give your project a name. If you don’t, a default name like `myproject` will be used.  

### Step 4: Project Generation
Based on your selection, the tool will:  
1. Generate the required boilerplate files and folder structure.
2. Optionally initialize Git and install dependencies (you’ll be asked).  

---

## 🔍 Example Usage
Here’s a sample session:  

```bash
$ npx get-start-hackin
? What type of project do you want the starter files for? (Use arrow keys)
  ➤ Basic HTML Website
    React App
    Next.js Project
    Python App (without env)
? Enter the name of your project: my-awesome-project
? Do you want to initialize git and install dependencies? (Y/n) Y
```

Your project folder will now look something like this (for a Basic HTML Website):  
```
my-awesome-project/
├── README.md
├── index.html
├── style.css
├── main.js
├── src/
├── public/
```

For **Next.js** or **React**, respective frameworks will set up the project for you.

---

## 🛠️ Commands in Detail

### Initialize Git and Install Dependencies
The CLI provides an optional step to:  
- **Initialize a Git repository**:  
   ```bash
   git init
   ```  
- **Install dependencies**:  
   ```bash
   npm install
   ```

### Directory Customization
All generated templates can be customized by editing the corresponding files in the `templates/` directory in the repository.

---

## 🙌 Contributing

Want to add new templates or suggest features? Contributions are welcome! Here's how you can contribute:  
1. Fork the repository.  
2. Add or improve templates in the `templates/` folder.  
3. Submit a pull request!  

---

## 🧑‍💻 Developer Notes
- **CLI Commands** are implemented using `commander.js` and `inquirer.js`.  
- File generation uses Node.js's `fs` and `path` modules.  

---

## 📢 Stay Updated
- Follow updates on **[GitHub](https://github.com/JigmetAvinash/get-start-hackin)**.  
- Report issues or bugs on the **[Issues page](https://github.com/JigmetAvinash/get-start-hackin/issues)**.

---

## 🏁 Roadmap
🚀 **February 2025**:  
- Add new templates, including **Express.js**, **Vue.js**, and more.  
- Support for custom user-defined templates.  

🌟 **Future Goals**:  
- Integrate database configurations for full-stack setups.  
- Add unit testing and CI/CD configurations.

---

## ⚖️ License
This project is licensed under the **MIT License**.  

---

**💻 Start coding faster with *Get Start Hackin'*! Your projects deserve a solid start.**  


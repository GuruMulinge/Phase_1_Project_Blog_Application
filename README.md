# Phase_1_Project_Blog_Application
# 1. PROJECT DESCRIPTION 
The project is a blog application that allows users to create,read,update ans delete blog posts.

# 2. Project Requirements
- Visual Studio Code
- A modern web browser e.g Brave, Mozilla Firefox,  Google Chrome, Microsoft Edge, Vivaldi or Opera Mini.
- Javascript enabled browser.
- Json-Server


# 3. Project Setup
Clone repository
````bash
git clone
````

Open the project in the terminal.
````bash
cd
````

Start the Json Server.
````
json-server src/resource/db.json --watch
````

If you don't have a json-server installed, install it as depicted below;

Using npm 
````bash
npm install json-server
````
using yarn
````bash
yarn add json-server
````
You can also install json-server globally as follows;

Using npm
````bash
npm install -g json-server
````
Using yarn
````bash
yarn global add json-server
````
Run the json-server

Using npm
````bash
npm json server src/resources/db.json --watch
````
Using yarn
````bash
yarn json-server src/resources/db.json --watch
````


### Opening the challenges in VSCode
````bash
code .
````

### Project Structure
The Project structure is as follows
````markdown
src 
    ├── css
    │   └── style.css
    ├── index.html
    ├── js
    │   └── script.js
    └── resources
        └── db.json
````
The src directory contains the project files needed to run the project.
The css folder contains the project's stylesheets file, ``style.css``.
The js directory contains the project's Javascript file, ``script.js``.
The resources folder contains the projects database, ``db.json``.

## 4. Running the project.
Open the ``index.html`` file in the src directory using your default or preferred browser.

# 5. Key Application Functionalities.
- **Reading posted blog posts**
The blog post titles are listed in the left section of the webpage.
Clicking any of the blog post's title will load the post and display it on the posts' display section that is the right section of the webpage.

- **Adding a new blog post**
Next to the 'Blog Posts' title is the ``Add Post`` button. By clicking it, the add a new blog post form will be displayed with four fields of entry where a user can add a new blog post's details and contents.



   


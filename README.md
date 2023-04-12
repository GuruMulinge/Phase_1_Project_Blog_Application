# Phase_1_Project_Blog_Application
# 1. PROJECT DESCRIPTION 
The project is a blog application that allows users to create and read blog posts. 
They can also give feedback by liking or disliking the posts they have read.

# 2. Project Requirements
- Visual Studio Code
- A modern web browser e.g Brave, Mozilla Firefox,  Google Chrome, Microsoft Edge, Vivaldi or Opera Mini.
- Javascript enabled browser.
- Json-Server


# 3. Project Setup
Clone repository
````bash
git clone git@github.com:GuruMulinge/Phase_1_Project_Blog_Application.git
````

Open the project in the terminal.
````bash
cd Phase_1_Project_Blog_Application
````

Start the Json Server.
````
json-server src/resources/db.json --watch
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

### Running the project.
Open the ``index.html`` file in the src directory using your default or preferred browser.


# 4. Key Application Functionalities.
- **Reading posted blog posts**
The blog post titles are listed in the left section of the webpage.
Clicking any of the blog post's title will load the post and display it on the posts' display section that is the right section of the webpage.

- **Adding a new blog post**
Next to the 'Blog Posts' title is the ``Add Post`` button. By clicking it, the add a new blog post form will be displayed with four fields of entry where a user can add a new blog post's details and contents.

- *N/B* <br>In the case that user clicks the ``Add Post`` button and has no intention of doing that,the same ``Add Post`` button is also used to return to the list of published Blog Posts in the webpage.


- **Liking a Post**
A user may like a post and can give feedback by clicking the thumbs up button.
This will increase irreversibly the number of post likes;

- **Disliking a Post**
A user may like a post and can give feedback by clicking the thumbs down button.
This will increase irreversibly the number of post dislikes;




# 5. Author
The project is authored by <a href="https://github.com/GuruMulinge/" target="_blank">Anthony Mulinge</a>

Anthony is a software engineering student at <a href="https://moringaschool.com/" target="_blank">Moringa School</a>. He is currently studying Full Stack Engineering Course.

# 6. License
The project is licensed under the <a href="https://opensource.org/licenses/MIT/" target="_blank">MIT license</a>.

   


# Turing FEE Mentoring IdeaBox Exercise
Exercise based off Turing's IdeaBox CRUD project. Template created by Ryan Workman for mentoring developers learning basic JavaScript and jQuery principals and practices.

If you would like to add or make changes to this project, please see CONTRIBUTING.md for the process of making a pull request.

---

### Installation
- Clone down this repo and `cd idea_box_mentoring`
- Running the example IdeaBox locally
  - Run `npm install` and `npm run build`
  - Open a browser and go to `http://localhost:2020`
- Creating a template to code your own IdeaBox
  - Inside the `./idea_box_mentoring` directory, run `./build` from the terminal
    - This will create a directory called `idea_box_exercise` and create and install all necessary files and NPM libraries to run the project.
  - Run `cd ../idea_box_exercise` to move into the directory and run `npm run build`
  - Open a browser and go to `http://localhost:2020` to ensure everything was installed and running as intended

### Helpful NPM Commands
Webpack is transpiling and bundling all necessary JS files for Express to serve up locally. `index.html` and all files in `./src/css` are copied to the `./dist` directory which is being served by Express. With that in mind, the goal of this exercise is to write out all of the logic and DOM manipulation needed for IdeaBox in `./src/javascripts/main.js`. Other than adding styling to `./src/css/master.css` and, if needed, adding more css file links to `index.html`, no other files should be touched. The following commands will build out everything with the above stipulations assumed.
- `npm run build`
  - Bundle JS files into `./dist/bundle.js` and launches the server using port 2020
  - Webpack will continue to watch for changes to any JS files in the `./src/javascripts/` directory and will rebuild when a change is detected. _NOTE: Changes to index.html and any CSS files will not be detected and must be rebuilt manually._
- `npm run copy`
  - Copies `index.html` and all files in `./src/css/` to `./dist/` and launches the server using port 2020
- `npm run start`
  - Simply just launches the server on port 2020

### Reporting Issues
If you run into a bug or failing process, open a new [issue](https://github.com/rdavid1099/idea_box_mentoring/issues) in the Issues tab.

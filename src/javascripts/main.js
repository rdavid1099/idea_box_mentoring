const $ = require('jquery');

let scope = {
  username: 'Guest',
  idea_num: 0
}

$(document).ready(() => {
  $('#headline').html(
    '<h1>IdeaBox</h1>' +
    '<h4>IdeaBox template built by Ryan Workman</h4>' +
    '<div>' +
      '<p>Build out your code in the given files in ./src/.<br>' +
      'Be sure to follow conventions and store all your CSS files in ./src/css/ and JS files in ./src/javascripts/.<br>' +
      'For this simple application, you shouldn\'t have to install any additional npm modules, but if you wish, just run `npm install <package name>` and be sure to require it in ./src/javascripts/main.js</p>' +
      '<p>To launch the local server, run `npm run build`. This will build the project and launch it on port 2020. Open a browser and go to http://localhost:2020</p>' +
      '<p>Good luck and remember to have fun with it...<br>- Ryan<br>Github: <a href="https://github.com/rdavid1099" target="_blank">@rdavid1099</a></p>' +
    '</div>'
  )
})

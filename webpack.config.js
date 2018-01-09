var path  = require('path'),
    glob  = require('glob'),
    shell = require('webpack-shell-plugin');

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

function getAllJSFiles() {
  var result   = [],
      rawFiles = glob.sync("./src/javascripts/*.js");
  for (var i = 0; i < rawFiles.length; i++) { result.push(rawFiles[i].replace("/src", "").replace(/\.[^/.]+$/, "")) }
  return result;
}

module.exports = {
  context: CLIENT_DIR,
  entry: getAllJSFiles(),
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new shell({
      onBuildStart: ['echo "Starting build"'],
      onBuildEnd: ['npm run copy']
    })
  ],
  watch: true
}

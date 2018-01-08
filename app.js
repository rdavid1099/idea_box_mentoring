var express = require('express');
var http = require('http');
var app = express();
var port = 2020;

app.use(express.static('lib/'));

app.get('/', function(req,res){
  res.send('/index.html');
});

app.listen(port, function(){
  console.log('IdeaBox application starting up on http://localhost:' + port);
});

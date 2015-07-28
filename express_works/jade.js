// Create an Express.js app with a home page rendered by Jade template engine.
// The homepage should respond to /home.
// The view should show the current date using to DateString.

var express = require('express');
var app = express();
var portNumber = process.argv[2];
var jadeFile = process.argv[3];

app.set('view engine', 'jade');

app.get('/home', function (request, response) {
  response.render(jadeFile, { date: new Date().toDateString() });
});

app.listen(portNumber);
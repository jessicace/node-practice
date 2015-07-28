// Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

var express = require('express');
var app = express();
var portNumber = process.argv[2];

app.get('/home', function (request, response) {
  response.end('Hello World!');
});

app.listen(portNumber);
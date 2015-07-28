// Apply static middleware to serve index.html file without any routes.


var express = require('express');
var app = express();
var portNumber = process.argv[2];
var pathName = process.argv[3];

app.use(express.static(pathName || path.join(__dirname, 'public')));

app.listen(portNumber);
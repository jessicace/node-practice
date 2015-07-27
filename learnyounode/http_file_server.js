// Write an HTTP server that serves the same text file for each request it receives.
// Your server should listen on the port provided by the first argument to your program.
// You will be provided with the location of the file to serve as the second command-line argument.
// You must use the fs.createReadStream() method to stream the file contents to the response.

var http = require('http');
var fs = require('fs');

var portNumber = Number(process.argv[2]);
var filePath = process.argv[3];

// Alternative solution:
var server =
  http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(filePath).pipe(response);
  });


// My solution:
// var server =
//   http.createServer(function (request, response) {
//    var readable = fs.createReadStream(filePath);
//    readable.pipe(response);
//  });

server.listen(portNumber);

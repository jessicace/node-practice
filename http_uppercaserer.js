// Write an HTTP server that receives only POST requests.
// Convert incoming POST body characters to uppercase, and return it to the client.
// Your server should listen on the port provided by the first argument to your program.

var http = require('http');
var portNumber = Number(process.argv[2]);

var server =
  http.createServer(function (request, response) {
    if (request.method != 'POST') {
      return response.end('Only POST is accepted.');
    }
    request.setEncoding('utf8');
    request.on("data", function(data) {
      response.write(data.toUpperCase());
    });
    request.on("end", function() {
      response.end();
    });
  });

server.listen(portNumber);
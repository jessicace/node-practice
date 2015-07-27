// Look at a user's badge count and JavaScript points from a web browser.
// Perform profile look ups and serve our template via HTTP.

// 1. Create a web server
var http = require('http');
http.createServer(function (request, response) {
  homeRoute(request, response);
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000');

// 2. Handle HTTP route GET / and POST / e.g. Home
function homeRoute(request, response) {
  // show search
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write("Header\n");
  response.write("Search\n");
  response.end("Footer\n");
  // response.end('Goodbye World!\n');
}
// 3. Handle HTTP route GET /:username e.g. jessicace

// 4. Function that handles the reading of files and merge in value
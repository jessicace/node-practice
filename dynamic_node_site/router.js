//  Handle HTTP route GET / and POST / e.g. Home
function home(request, response) {
  if (request.url === "/") {
    // show search
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
}

// Handle HTTP route GET /:username e.g. jessicace
function user(request, response) {
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Header\n');
    response.write(username + '\n');
    response.end('Footer\n');
  }
}

module.exports.home = home;
module.exports.user = user;
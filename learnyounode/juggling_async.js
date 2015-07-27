// Collect the complete content of three URLs and print it to the console.
// Print one line per URL.
// Print out them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http');

var urls = [];
for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

var strings = {};
var count = 0;

function http_request (url, index) {
  http.get(url, function (response) {
    response.setEncoding('utf8');
    var completeString = "";
    response.on("data", function(data) {
      completeString += data;
    });
    response.on("end", function() {
      strings[index] = completeString;
      count++;
      if (count == urls.length) {
        for (var i = 0; i < count; i++) {
          console.log(strings[i]);
        }
      }
    });
  });
}

for (url in urls) {
  http_request(urls[url], url);
}

// Collect the complete content of three URLs and print it to the console.
// Print one line per URL.
// Print out them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http');

var urls = [];
for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

var strings = [];

function http_request (url, index) {
  http.get(url, function (response) {
    response.setEncoding('utf8');
    var completeString = "";
    response.on("data", function(data) {
      completeString += data;
    });
    response.on("end", function() {
      strings[index] = completeString;
      if (urls.length == strings.length && strings[0]) {
        for(string in strings) {
          console.log(strings[string]);
        }
      }
    });
  });
}

for (url in urls) {
  http_request(urls[url], url);
}

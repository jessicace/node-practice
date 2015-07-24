// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument.
// Collect all data from the server, then write two lines to the console.
// The first line you write should be an integer representing the number of characters received from the server.
// The second line should contain the complete String of characters sent by the server.

var http = require('http');

// My solution
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  var completeString = "";
  response.on("data", function(data) {
    completeString += data;
  });
  response.on("end", function() {
    console.log(completeString.length);
    console.log(completeString);
  });
});


// Alternative using bl
// var http = require('http')
// var bl = require('bl')
//    
// http.get(process.argv[2], function (response) {
//  response.pipe(bl(function (err, data) {
//                  if (err) {
//                    return console.error(err);
//                  }
//                  data = data.toString();
//                  console.log(data.length);
//                  console.log(data);
//                }));  
// });
//
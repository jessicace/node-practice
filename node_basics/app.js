var http = require('http');
var username = 'jessicace';

// Print the data.
function printMessage(username, badgeCount, points) {
 console.log(username + " has " + badgeCount + " total badges and " + points + " points in JavaScript.");
}

// Print out error messages.
function printError(error) {
  console.error(error.message);
}


// Connect to the API URL.
var request =
  http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";
    // Read the data from the response.
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function() {
      var profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript);
    });
    // Parse the data.
  });

request.on("error", printError(error));
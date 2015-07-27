var http = require('http');


// Print the data.
function printMessage(username, badgeCount, points) {
 console.log(username + " has " + badgeCount + " total badges and " + points + " points in JavaScript.");
}

// Print out error messages.
function printError(error) {
  console.error(error.message);
}

function get(username) {
// Connect to the API URL.
var request =
  http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
    var body = "";
    // Read the data from the response.
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          // Parse the data
          var profile = JSON.parse(body);
          // Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          // Parse Error
          printError(error);
        }
      } else {
        // Status Code Error
        printError({
          message: "There was an error getting the profile for " + username + ". (" +
            http.STATUS_CODES[response.statusCode] + ")"
        });
      }
    });
  });
  // Connection Error
  request.on("error", printError);
}

module.exports.get = get;
// Create a program that prints a list of files in a given directory, filtered by the extension of the files.
// You will be provided a directory name as the first argument to your program, and a file extension to filter by as the second argument.

// Modules
var fs = require('fs');
var path = require('path');

// Variables
var directory = process.argv[2];
var extension = "." + process.argv[3];

// Better solution
fs.readdir(directory, function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) == extension) {
      console.log(file);
    }
  });
});

// My solution
fs.readdir(directory, function (err, list) {
  var matchedFiles = list.filter(function (err, file) {                  
    return path.extname(list[file]) == extension;
  });
  for (index in matchedFiles) {
    console.log(matchedFiles[index]);
  }
});

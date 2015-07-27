// Create a program that prints a list of files in a given directory, filtered by the extension of the files.
// The first argument is the directory name.
// The second argument is the extension filter.
// Print the list of files (one file per line) to the console.
// You must use asynchronous I/O.

// You must write a module file to do most of the work.
// The module must export a single function that takes three arguments:
//// 1. the directory name
//// 2. the filename extension string
//// 3. a callback function

// The callback function must be called using the idiomatic node(err, data) convention.

// Modules
var readFilter = require('./read_filter_module');
var directory = process.argv[2];
var extension = process.argv[3];

// Better solution
readFilter(directory, extension, function(err, list) {
  if (err) {
    return console.error("There was an error: ", err);
  }
  list.forEach(function (file) {
    console.log(file);
  });
});


// My solution
function callback(err, data) {
  for(item in data) {
    console.log(data[item]);
  }
}

readFilter(directory, extension, callback);

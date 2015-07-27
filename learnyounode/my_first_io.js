// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines
// it contains to the console (stdout), similar to running cat file | wc -l.

var fs = require('fs');

var numberOfLines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
console.log(numberOfLines);
// Modules
var fs = require('fs');
var path = require('path');

// Better solution
module.exports = function (directory, fileExtension, callback) {
  fs.readdir(directory, function (err, list) {
    if (err) {
      return callback(err);
    }
    list = list.filter(function (file) {
             return path.extname(file) === '.' + fileExtension;
           });
    callback(null, list);
  });
}

// My solution

module.exports = function (directoryName, fileExtension, callback) {
  fileExtension = '.' + fileExtension;
  var files = [];
  fs.readdir(directoryName, function(err, list) {
    if (err) {
      return callback(err);
    }
    list.forEach(function (file) {
      if (path.extname(file) == fileExtension) {
        files.push(file);
      }
    });
    callback(null, files);
  });
}

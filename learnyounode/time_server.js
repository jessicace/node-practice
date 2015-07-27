// Write a TCP time server.
// Your server should listen to TCP connections on the port provided by the first argument to your program.
// For each connection, you must write the current date & 24 hour time in the format:
// YYYY-MM-DD hh:mm
// followed by a newline character. 

var net = require('net');


// Much better solution:
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}
    
function now () {
  var d = new Date()
  return d.getFullYear() + '-'
       + zeroFill(d.getMonth() + 1) + '-'
       + zeroFill(d.getDate()) + ' '
       + zeroFill(d.getHours()) + ':'
       + zeroFill(d.getMinutes())
}
    
var server = net.createServer(function (socket) {
               socket.end(now() + '\n')
             })
    
server.listen(Number(process.argv[2]))


// My solution:
var portNumber = process.argv[2];
var date = new Date();

var server =
  net.createServer(function (socket) {
    socket.setEncoding("utf8");
    var year = findYear();
    var month = findMonth();
    var day = findDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var data = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
    socket.end(data, function() {
      console.log(data);
    });
  });

server.listen(portNumber);

function findYear() {
  return date.getFullYear().toString();
}

function findMonth() {
  var month = date.getMonth() + 1;
  month = month.toString();
  month = appendZero(month);
  return month;
}

function findDate() {
  var day = date.getDate().toString();
  day = appendZero(day);
  return day;
}

function appendZero(string) {
  if (string.length == 1) {
    return '0' + string;
  }
  return string;
}

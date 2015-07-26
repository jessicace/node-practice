// Write an HTTP server that serves JSON data when it receives a GET request to the path 'api/parsetime'.
// Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
// For example:
// /api/parsetime?iso=2013-08-10T12:10:15.474Z
// The JSON response should contain only 'hour', 'minute' and 'second' properties.
// For example:
// {
//   "hour": 14,
//   "minute": 23,
//   "second": 15
// }
// Add a second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds under the property 'unixtime'. For example:
// { "unixtime": 12343254354 }
// Your server should listen on the port provided by the first argument to your program.

var http = require('http');
var url = require('url');
var portNumber = Number(process.argv[2]);

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

var server =
  http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var requestURL = url.parse(request.url, true);
    // console.log(requestURL);
    var time = requestURL.query.iso.split('T');
    if (requestURL.pathname == '/api/parsetime') {
      var units = time[1].split(/\D+/);
      var toReturn = {
        "hour": eval(units[0] + 12),
        "minute": eval(zeroFill(units[1])),
        "second": eval(zeroFill(units[2]))
      }
      response.write(JSON.stringify(toReturn));
      request.on("end", function() {
        // console.log("Triggered");
      });
    } else if (requestURL.pathname == '/api/unixtime') {
      // console.log(requestURL);
      var dateElements = time[0].split(/\D+/);
      var timeElements = time[1].split(/\D+/);
      var date = new Date(dateElements[0],
                          eval(dateElements[1] - 1),
                          dateElements[2],
                          eval(timeElements[0] + 12),
                          timeElements[1],
                          timeElements[2],
                          timeElements[3]);
      console.log(date);
      var toReturn = {
        "unixtime": date.getTime()
      }
      response.write(JSON.stringify(toReturn));
    }
    response.end();
  });

server.listen(portNumber);


// Provided solution:

var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server =
  http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result
    
    if (/^\/api\/parsetime/.test(req.url))
      result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
      result = unixtime(time)
    
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
    }
  })
server.listen(Number(process.argv[2]))
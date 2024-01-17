var http = require('http');

http.createServer(function (req, res) {
  res.write("BFLxMusic2.0 - I'm up baby!");
  res.end();
}).listen(8080);

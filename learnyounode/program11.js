var net = require('net');
var fs = require('fs');

var filename = process.argv[3];

var http = require('http')  
var server = http.createServer(function (req, res) {
    var readStream = fs.createReadStream(filename);

  readStream.on('open', function () {
    readStream.pipe(res);
  });

  readStream.on('error', function(err) {
    res.end(err);
  });
});
server.listen(Number(process.argv[2]));
var net = require('net');
var fs = require('fs');
var map = require('through2-map');
var http = require('http');

var server = http.createServer(function (req, res) {
    //console.log(req.method);
    if (req.method === 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data.toString().toUpperCase();
            //console.log("Partial body: " + body);
        });
        req.on('end', function () {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(body);
        });
        
     }
    
});
server.listen(Number(process.argv[2]));
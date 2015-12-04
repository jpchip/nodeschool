var net = require('net');
var fs = require('fs');
var map = require('through2-map');
var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    //console.log(req.method);
    if (req.method === 'GET') {
        var body = {};
        var urlObj = url.parse(req.url, true);
        
        if (urlObj.pathname === '/api/parsetime') {
            var d = new Date(urlObj.query.iso);
            body = {
                hour: d.getHours(),  
                minute: d.getMinutes(),  
                second: d.getSeconds() 
            };
            //console.log(body);
        }
        if (urlObj.pathname === '/api/unixtime') {
            var d = new Date();
            body = {
                unixtime : d.getTime()
            };
            //console.log(body);
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(body));
        
     }
    
});
server.listen(Number(process.argv[2]));
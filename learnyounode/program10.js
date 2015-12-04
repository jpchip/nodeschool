var net = require('net');

function pad(n){return n<10 ? '0'+n : n}

var server = net.createServer(function (socket) {  
    var d = new Date();
    var strDate = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + d.getHours() + ':' + d.getMinutes() + '\n';
    //"2013-07-06 17:42" 
    socket.end(strDate); 
})  
server.listen(Number(process.argv[2])); 
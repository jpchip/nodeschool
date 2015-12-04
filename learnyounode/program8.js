var http = require('http');

http.get(process.argv[2], function(response) {
    var size = 0, content = "";
    response.on("data", function (data) {
        var str = data.toString();
            size += str.length;
            content += str;
        });
    
    response.on("end", function () {
        console.log(size);
        console.log(content);
    }); 
});
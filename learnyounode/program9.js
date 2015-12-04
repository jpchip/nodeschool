var http = require('http');
var args = process.argv;

http.get(args[2], function(response) {
    var size = 0, content = "";
    response.on("data", function (data) {
        var str = data.toString();
            size += str.length;
            content += str;
        });
    
    response.on("end", function () {
        console.log(content);
        http.get(args[3], function(response) {
        var size = 0, content = "";
        response.on("data", function (data) {
            var str = data.toString();
                size += str.length;
                content += str;
            });
        
        response.on("end", function () {
            console.log(content);
            http.get(args[4], function(response) {
          var size = 0, content = "";
          response.on("data", function (data) {
              var str = data.toString();
                  size += str.length;
                  content += str;
              });
          
          response.on("end", function () {
              console.log(content);
          }); 
      });
        }); 
    })
    }); 
});
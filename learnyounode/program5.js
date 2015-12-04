var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
   list.forEach(function(val, index) {
        var split = val.split('.');
        if(split[1] === process.argv[3]) {
            console.log(val);
        }
    }); 
});

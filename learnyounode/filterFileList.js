var fs = require('fs');

module.exports = function (dir, ext, cb) {
    
    fs.readdir(dir, function(err, list) {
      if (err) {
         return cb(err);
      }
       
      var results = [];
       list.forEach(function(val, index) {
            var split = val.split('.');
            if(split[1] === ext) {
                results.push(val);
            }
        });
       cb(err, results);
    });
} 



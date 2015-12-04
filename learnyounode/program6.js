var filterFileList = require('./filterFileList');
filterFileList(process.argv[2], process.argv[3], function(err, data) {
    if (data) {
        data.forEach(function(val) {
            console.log(val);    
        });
    }
    });
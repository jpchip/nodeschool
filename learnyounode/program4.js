var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    var str = data.toString();
    var strs = str.split('\n');
    console.log(strs.length - 1);
});

var fs = require('fs');

fs.rename('WrittenFile.txt','RenamedFile.txt',function(err){
    if (err) throw err;
    console.log("File Renamed");
});
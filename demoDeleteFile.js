var fs = require('fs');

fs.unlink('WrittenFile1.txt',function(err){
    if(err) throw err;
    console.log('File Deleted');
});


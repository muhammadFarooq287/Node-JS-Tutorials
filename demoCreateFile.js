/* AppendFile Method
var fs=require('fs');

fs.appendFile('AppendedFile.txt',"File created by Append Method",function(err){
    if (err) throw err;
    console.log('Saved');
});*/

/* Open Method
var fs=require('fs');

fs.open('OpenedFile.txt','w',function(err,file){
    if (err) throw err;
    console.log('Saved');
});*/

/*writeFile Method*/
var fs=require('fs');

fs.writeFile('WrittenFile.txt',"File created by Append Method",function(err){
    if (err) throw err;
    console.log('Saved');
});
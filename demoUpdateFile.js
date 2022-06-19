/* AppendFile Method
var fs=require('fs');

fs.appendFile('AppendedFile.txt',"File created by Append Method",function(err){
    if (err) throw err;
    console.log('Updated');
});*/

/*writeFile Method*/
var fs=require('fs');

fs.writeFile('WrittenFile.txt',"File created by Append Method",function(err){
    if (err) throw err;
    console.log('Replaced');
});
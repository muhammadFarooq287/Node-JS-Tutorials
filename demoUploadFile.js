//var http = require('http');
var formidable = require('formidable');
var express = require('express');
//var fs = require('fs');

/*http.createServer(function ( req, res){
    if (req.url == './fileUploaded'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err, fields, files){
            var oldpath = files.fileToUpload.filepath;
            var newpath = 'D:/OneDrive/Documents/Node JS/' + files.fileToUpload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
            res.write('File Uploaded');
            res.end();
        });
    } else{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<form action="fileUploaded" method= "post" enctype= "multipart/form-data"> ' );
        res.write('< input type="file" name="fileToUpload"> <br> ');
        res.write('input type="submit" ');
        res.write('</form>');
        return res.end();
    }

}).listen(8000);
*/
var app = express();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/FileUploader.html');
});

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.sendFile(__dirname + '/FileUploader.html');
});

app.listen(3000);

var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');

http.createServer(function(req,res){
    var p= url.parse(req.url, true);
    var filename = "." + p.pathname;

    fs.readFile(filename, function(err,data){
        if (err){
            res.writeHead(404, {'Content-Type':'text/html'});
            res.end("404 Not Found");
        }
        res.writeHead( 200,{'Content-Type':'text/html'});
        res.write(data);
        res.write(uc.upperCase("Content List"))
        return res.end();
    });
}).listen(8000);
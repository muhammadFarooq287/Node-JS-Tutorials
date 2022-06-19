var url = require('url');
var  adress='https://www.w3schools.com/nodejs/nodejs_url.asp';
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var p = url.parse(adr,true);

console.log(p.host);
console.log(p.hostname);
console.log(p.pathname);
console.log(p.search);

var pdata= p.query;
console.log(pdata.month);

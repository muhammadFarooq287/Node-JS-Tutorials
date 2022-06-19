/*
var fs = require('fs');
var rs = fs.createReadStream('./AppendedFile.txt');

rs.on('open',function(){
    console.log("The File is Open");
});
*/

var events =require('events');
var evenEmitter = new events.EventEmitter();

//Event Handler
var NewEventHandler= function(){
    console.log("Emergency");
}

evenEmitter.on('1122',NewEventHandler);

evenEmitter.emit('1122');
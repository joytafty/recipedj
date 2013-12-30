// var http = require('http');
// var port = process.env.PORT || 5000;
// http.createServer(function(req, res) {
// 	res.writeHead(200);
// 	res.write("Welcome to recipeDJ WebApp");
// 	res.end(); 
// }).listen(port);
// console.log('Listening on ' + port);

var express = require("express");
var logfmt = require("logfmt");
var app = express.createServer();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');	
});
app.get('/test', function(req,res){
	res.sendfile(__dirname + '/test.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
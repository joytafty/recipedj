// var http = require('http');
// var port = process.env.PORT || 5000;
// http.createServer(function(req, res) {
// 	res.writeHead(200);
// 	res.write("Welcome to recipeDJ WebApp");
// 	res.end(); 
// }).listen(port);
// console.log('Listening on ' + port);

var express = require('express'),
 logfmt = require('logfmt'),
 url = require('url'),
 path = require('path');
 
var fs = require('fs');
var http = require('http');

// function handleStaticPages(pathName, res) {
// 	var ext = path.extname(pathName);
// 	switch(ext) {
// 		case '.css':
// 			res.writeHead(200, {'Content-Type' : 'text/css'});
// 			fs.readFile('.' + pathName, 'utf8', function(err, fd){
// 				res.end(fd);
// 			});
// 			console.log('Routed for CSS ' + pathName + ' Successfully\n');
// 		break;
// 		case '.js';		
// 			res.writeHead(200, {'Content-Type':, 'text/javascript'});
// 			fs.readFile('./' + pathName, 'utf8', function(err, fd){
// 				res.end(fd);
// 			});
// 			console.log('Routed for Javascript ' + pathName + ' Successfully\n');
// 		break;
// 	}

// }

// function start(route, handle) {
// 	function onRequest(req, res) {
// 		var postData = "";
// 		var pathName = url.par(req.url).pathname;
// 		console.log('Request for ' + pathName + ' received.');

// 		req.addListener('data', function(data) {
// 			postData += data;
// 			console.log('Received POST data chunk ' + postData + '.');
// 		});

// 		req.addListener('end', function(data){
// 			var pathext = path.extname(pathName);
// 			if (pathext === '.js' || pathext === '.css') {
// 				handleStaticPages(pathName, res);
// 			} else {
// 				console.log('---> Routing only view pages');
// 				route(handle, pathName, res, postData);
// 			}
// 		});
// 	}
// 	http.createServer(onRequest).listen(4000);
// 	console.log('Listening on port 4000');
// }

// exports.start = start;
// Create app
var app = express();
http.createServer(app);

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/static'));
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');		
});
app.get('/test', function(req,res){
	console.log(__dirname);
	res.sendfile(__dirname + '/templates/test.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
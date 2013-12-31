
var express = require('express'),
 logfmt = require('logfmt'),
 url = require('url'),
 path = require('path');
 
var fs = require('fs');
var http = require('http');

// Create app
var app = express();
http.createServer(app);

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/static'));
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');		
});

// *** hard-coded static paths
app.get('/static/css/style.css', function(req,res) {
	res.sendfile(__dirname + '/static/css/style.css');
});
app.get('/static/css/slick.grid.css', function(req,res) {
	res.sendfile(__dirname + '/static/css/slick.grid.css');
});
// app.get('/static/js/food-table.js', function(req,res) {
// 	res.sendfile(__dirname + '/static/js/food-table.js');
// });
app.get('/static/js/filter.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/filter.js');
})

app.get('/test', function(req,res){
	console.log(__dirname);
	res.sendfile(__dirname + '/templates/test.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

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
app.get('/static/js/filter.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/filter.js');
});
app.get('/static/js/food-table.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/food-table.js');
});
app.get('/static/js/parallel.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/parallel.js');
});
app.get('/static/js/parallel-coordinates.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/parallel-coordinates.js');
});
app.get('/static/js/parallel-coordinates-veggie.j', function(req,res) {
	res.sendfile(__dirname + '/static/js/parallel-coordinates-veggie.js');
});
app.get('/static/js/grid.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/grid.js');
});
app.get('/static/js/d3/d3.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/d3/d3.js');
});
app.get('/static/js/d3/d3.csv.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/d3/d3.csv.js');
});
app.get('/static/js/d3/d3.layout.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/d3/d3.layout.js');
});
app.get('/static/js/jquery-ui-1.8.16.custom.min.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/jquery-ui-1.8.16.custom.min.js');
});
app.get('/static/js/pie.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/pie.js');
});
app.get('/static/js/slickgrid/slick.core.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/slickgrid/slick.core.js');
});
app.get('/static/js/slickgrid/slick.grid.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/slickgrid/slick.grid.js');
});
app.get('/static/js/slickgrid/slick.pager.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/slickgrid/slick.pager.js');
});
app.get('/static/js/slickgrid/slick.dataview.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/slickgrid/slick.dataview.js');
});
app.get('/static/js/slickgrid/jquery.event.drag-2.0.min.js', function(req,res) {
	res.sendfile(__dirname + '/static/js/slickgrid/jquery.event.drag-2.0.min.js');
});


app.get('/test', function(req,res){
	console.log(__dirname);
	res.sendfile(__dirname + '/templates/test.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
// Transpiles our ES6 down to ES5
require('babel-core/register');
require('babel-register')({
        "presets": ["react","es2015"]
});
// We are running express 
var express = require('express');
var app = express();

//Our redux app that we render on our first load of the homepage
var handleRender = require('./server.js')

//This tells our app to use the public folder to serve static files. We will bundle our JS, CSS and images here
app.use(express.static('public'));

// This is our homepage route. When a user hits this we will kick off the apps load
app.use('/',function(req,res){
	handleRender(req, res);
});

// Once our app is running we will listen to port 8080
var PORT = 8080;
app.listen(PORT,function(){
	console.log('Listening on port:' + PORT);
})
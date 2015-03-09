var express = require('express'),
    app = express(),
    pages = require(__dirname + '/controllers/pages');

// configuration settings 
app.use(express.static(__dirname + '/public'));

// mount routes
app.get('/', function (req, res) { res.redirect('/home') });
app.get('/home', pages.home);

module.exports = app;
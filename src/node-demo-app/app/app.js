var express = require('express'),
    ejsLocals = require('ejs-locals'),
    app = express(),
    pages = require(__dirname + '/controllers/pages'),
    quotes = require(__dirname + '/controllers/quotes'),
    bodyParser = require('body-parser');

// configuration settings 
app.engine('ejs', ejsLocals);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({ extended: false }));

// set view locals
app.use(function (req, res, next) {
    app.locals.route = req.url;
    next()
});

// mount routes
app.get('/', function (req, res) { res.redirect('/home') });
app.get('/home', pages.home);
app.get('/about', pages.about);
app.post('/quote', quotes.quotePush);
app.get('/quote/:id', quotes.quote);

module.exports = app;
var express = require('express'),
    ejsLocals = require('ejs-locals'),
    app = express(),
    config = require(__dirname + '/config.js'),
    pages = require(__dirname + config.path.pages),
    quotes = require(__dirname + config.path.quotes),
    account = require(__dirname + config.path.account),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

// configuration settings 
app.engine('ejs', ejsLocals);
app.set('views', __dirname + config.path.views);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + config.path.public));
app.use(bodyParser.urlencoded(config.bodyParser));
app.use(cookieParser());
app.use(config.sessionObj);

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
app.delete('/quote/:id', quotes.quoteDelete);
app.get('/account/profile', account.profile);
app.get('/account/login', account.login);
app.get('/account/countViews', account.countViews);


module.exports = app;
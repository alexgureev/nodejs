var express = require('express'),
    app = express(),
    config = require(__dirname + '/config.js'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override');

// configuration settings
app.set('views', __dirname + config.path.views);
app.set('view engine', 'jade');
app.use(express.static(__dirname + config.path.public));
app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(config.sessionObj);
app.use(methodOverride('X-HTTP-Method-Override'));

// set view locals
app.use(function (req, res, next) {
    app.locals.route = req.url;
    next()
});

// handle errors
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


mongoose.connect('mongodb://nodejs:nodejs@127.0.0.1:27017/nodejs');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // yay!
});

// mount routes
app.get('/', function (req, res) { res.redirect('/home') });

var pages = require(__dirname + config.path.pages);
app.get('/home', pages.home);
app.get('/about', pages.about);
app.get('/mongo', pages.mongo);

var quotes = require(__dirname + config.path.quotes);
app.post('/quote', quotes.quotePush);
app.get('/quote/:id', quotes.quote);
app.delete('/quote/:id', quotes.quoteDelete);

var account = require(__dirname + config.path.account);
app.get('/account/profile', account.profile);
app.get('/account/login', account.login);
app.get('/account/countViews', account.countViews);

var api = require(__dirname + config.path.api);
app.post('/thread', api.post);
app.get('/thread/:title.:format?', api.show);
app.get('/thread', api.list);

module.exports = app;
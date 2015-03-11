var express = require('express'),
    ejsLocals = require('ejs-locals'),
    app = express(),
    pages = require(__dirname + '/controllers/pages'),
    quotes = require(__dirname + '/controllers/quotes'),
    account = require(__dirname + '/controllers/account'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    RedisStore = require('connect-redis')(expressSession),
    cookieParser = require('cookie-parser');

// configuration settings 
app.engine('ejs', ejsLocals);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
    store: new RedisStore({
        host: '127.0.0.1',
        port: 6379,
        db: 0
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 360000 }
}));

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
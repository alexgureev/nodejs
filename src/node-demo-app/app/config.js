(function () {
    "use strict";
    var expressSession = require('express-session'),
        RedisStore = require('connect-redis')(expressSession);

    module.exports = {
        path: {
            pages: "/controllers/pages",
            quotes: "/controllers/quotes",
            account: "/controllers/account",
            api: "/controllers/api",
            views: "/views",
            public: "/../public"
        },
        listen: [
            {port: 8001, host: '0.0.0.0'}
        ],
        bodyParser: {extended: false},
        sessionObj: expressSession({
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
                maxAge: 360000
            }
        })
    };
})();


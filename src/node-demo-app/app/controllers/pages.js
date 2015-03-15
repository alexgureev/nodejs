exports.home = function (req, res) {
//    res.render('index', { title: 'Hey', message: 'Hello there!'});

    res.render('pages/content', {
        title: 'Home page',
        message: 'This is the "home" action of "pages" controller'
    })
};

exports.about = function (req, res) {
    res.render('pages/content', {
        title: 'About page',
        message: 'This is the "about" action of "pages" controller'
    })
};
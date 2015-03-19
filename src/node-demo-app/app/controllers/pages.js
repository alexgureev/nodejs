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

exports.mongo = function (req, res) {

    var kittySchema = mongoose.Schema({
        name: String
    });

    var Kitten = mongoose.model('Kitten', kittySchema);

    var silence = new Kitten({name: 'Silence'})
    console.log(silence.name);

    res.json(silence);
};




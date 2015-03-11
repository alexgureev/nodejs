exports.profile = function(req, res) {
    res.json({"userId": req.session.userId});
};

exports.login = function(req, res) {
    req.session.userId = 1;
    res.json(true);
};

exports.countViews = function(req, res, next) {
    var sess = req.session
    if (sess.views) {
        sess.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + sess.views + '</p>')
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        sess.views = 1
        res.end('welcome to the session demo. refresh!')
    }
}
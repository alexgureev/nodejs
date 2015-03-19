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

exports.forgot = function (req, res) {
    //check
    if (req.cookies.remember) {
        res.send('Remembered :). Click to <a href="/forget">forget</a>!.');
    } else {
        res.send('<form method="post"><p>Check to <label>'
        + '<input type="checkbox" name="remember"/> remember me</label> '
        + '<input type="submit" value="Submit"/>.</p></form>');
    }

    //set
    var minute = 60 * 1000;

    if (req.body.remember) {
        res.cookie('remember', 1, {maxAge: minute});
    }

    // delete
    res.clearCookie('remember');
}
exports.profile = function(req, res) {
    res.json({"userId": req.session.userId});
};

exports.login = function(req, res) {
    req.session.userId = 1;
    res.json(true);
};
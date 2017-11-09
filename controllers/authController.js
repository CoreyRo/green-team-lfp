var exports = module.exports = {}

exports.signup = function(req, res) {
    res.json('sign-up', { error: req.flash("error")[0] });

}

exports.signin = function(req, res) {
    res.json('sign-in', { error: req.flash("error")[0] });

}

exports.user = function(req, res) {
    console.log(req)
    res.json('user');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}
var mongoose = require("mongoose");
var passport = require("passport");
var db = require("../models");

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.redirect('/signup');
};

// Post registration
userController
.doRegister = function(req, res) {

  console.log("In auth controller... req body is...", req.body);
  db.User.create(req.body);
  db.User.register(new User({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, username : req.body.username }), req.body.password, function(err, user) {
    if (err) {
        console.log(err);
    }
    passport.authenticate('local-signup')(req, res, function () {
      
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local-signin')(req, res, function () {
    res.redirect('/');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;

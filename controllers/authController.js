const mongoose = require("mongoose");
const passport = require("passport");
const db = require("../models");


// Restrict access to root page
module.exports = {  
	home : function(req, res) {
		// res.render('index', { user : req.user });
	},

// Go to registration page
	register : function(req, res) {
		res.redirect('/sign-up');
	},

	findOne : function(req, res) {
		console.log("HERE");
		db.User.findOne({ _id: req.user._id})
		.then((result) => {
			console.log("FIND ONE RESULT  " , result)
			return result;
		})
		.catch((err) => {
			console.log(err);
		})
	},

// Post registration

	//constructs an new user using the mongoose model
	doRegister : function(req, res) {
		let newUser = new db.User({ 
			firstName: req.body.firstName, 
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password, 
			username : req.body.username 
		})
		//registers the user with passport
		db.User
			passport.authenticate('local-signup')(req, res, function () {
				console.log("passport.authenticate res" , res.body)
				console.log("passport.authenticate req" , req.user)
				// return(
				// 	res.redirect('/profile/' + req. )
				// )
				
				});
				
	},

// Go to login page
	login : function(req, res) {
		// res.render('login');
	},

// Post login
	doLogin : function(req, res) {
		passport.authenticate('local-signin')(req, res, function () {
			res.redirect('/');
		});
	},

// logout
	logout : function(req, res) {
		req.logout();
		res.redirect('/');
	}
}


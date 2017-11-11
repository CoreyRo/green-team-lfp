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
			.register(newUser, newUser.password, (err, user) => {
				if (err) {
					 return console.log("Register Error: ", err);
				}
				else{
					console.log("Register User:", user)
					passport.authenticate('local-signup')(req, res, function () {
						// console.log("passport.authenticate res" , res)
						  
					  });
				}
				
				
				
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


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
	doRegister : function(req, res) {
		//registers the user with passport
		db.User
			passport.authenticate('local-signup')(req, res, function () {
			return res.json(req.user)
					
			})
		// process.on('unhandledRejection', (reason, p) => {
		// 	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
		// 	// application specific logging, throwing an error, or other logic here
		// 	});
					
	},
	findOne: function(req,res) {
		console.log("FINDONE REQ:",req.user)
		console.log("REQ PARAMAS", req.params.id)
		db.User.findOne({ _id: req.params.id})
		.then(function(result) {
			console.log("FINDONE RES: " + result)
			return res.json(result)
		})
		.catch(err => console.log("FIND ONE err ", err))
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


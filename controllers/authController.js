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

		passport.authenticate('local-signup')(req, res, function (cb) {
			// console.log("passport.authenticate res" , res)
			console.log("passport.authenticate req" , req.session)
			let result = req.session.passport
			// console.log("passport session req" , req.session)
			res.json(result)
								
			// res.redirect("/profile/" + req.session.passport.user)
			});
	},
	findOne: function(req,res) {
		console.log("REQ PARAMAS", req.params.id)
		db.User.findOne({ _id: req.params.id})
		.then(function(result) {
			console.log("FINDONE RES: " + result)
			res.json(result)
		})
		.catch(err => console.log(err))
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


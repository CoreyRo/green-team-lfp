const mongoose = require("mongoose");
const passport = require("passport");
const db = require("../models");
const fs = require("fs");


// Restrict access to root page
module.exports = {  
	findOne : function(req, res) {
		db.User.findOne({ _id: req.user._id})
		.populate('projects')
		.populate('joined')
			.exec(function (err, popRes){
				if (err) console.log(err);
			})
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			console.log(err);
		})
	},

	// Post registration
	doRegister : function(req, res) {
		//registers the user with passport
			passport.authenticate('local-signup')(req, res, function () {
				return res.json(req.user)
					
			})

	},
	viewOne: function(req,res) {
		db.User.findOne({ _id: req.params.id})
		.populate('projects')
		.populate('joined')
			.exec(function (err, popRes) {
				if (err) return res.status(400).json({
					_status: 400,
					_content: {
						message: err.toString()
					}
				});
			})
		.then(function(result) {
			return res.json(result)
		})
		.catch(err => console.log("FIND ONE err ", err.body))
	},

// Post login
	doLogin : function(req, res) {
		passport.authenticate('local-signin')(req, res, function () {
			return res.json(req.user)
		});
	}
}


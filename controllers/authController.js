const mongoose = require("mongoose");
const passport = require("passport");
const db = require("../models");
var formidable = require('formidable')


// Restrict access to root page
module.exports = {  
	userAvi : function(req, res){
		 let form = new formidable.IncomingForm()
		 
		 form.parse(req, function(err, fields, files){
			 db.User.findOneAndUpdate({ _id: req.user._id }, {img: files.imageURL.name})
			 .then(function(dbModel){
				console.log(dbModel)
				res.json(dbModel)
			 })
			 .catch(function(err){

			 })
		 })
	},

	findOne : function(req, res) {
		console.log("HERE", req.user._id);
		db.User.findOne({ _id: req.user._id})
		.then((result) => {
			console.log("FIND ONE RESULT  " , result)
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
		console.log("FINDONE REQ:",req.user)
		console.log("REQ PARAMAS", req.params.id)
		db.User.findOne({ _id: req.params.id})
		.then(function(result) {
			console.log("FINDONE RES: " + result)
			return res.json(result)
		})
		.catch(err => console.log("FIND ONE err ", err.body))
	},

// Post login
	doLogin : function(req, res) {
		console.log("In do login")
		console.log("req body", req.body);
		passport.authenticate('local-signin')(req, res, function () {
			console.log("do login req", req.body)
			return res.json(req.user)
		});
	},

// logout
	logout : function(req, res) {
		req.session.destroy(function(err) {
			if(err) {
				return console.log(err);
			}
			res.redirect('/');
		});
	}
}


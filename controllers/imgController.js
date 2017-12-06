const mongoose = require("mongoose");
const passport = require("passport");
const db = require("../models");
const formidable = require('formidable')
const path = require('path')


  module.exports ={
    imgUpload: function(req, res, next){
        let form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            db.User.findOneAndUpdate({_id: req.user._id}, {imageURL: files.profileAvi.name})
            .then(function(dbUser){
                res.json(dbUser)
                console.log(dbUser)
            })
            .catch(err => console.log(err))
        });

        form.on('fileBegin', function (name, file){
        file.path = path.basename(path.dirname('../')) + '/public/uploads/users/' + file.name;
        console.log("file.path", file.path)     
        });

        form.on('end', function() {
        console.log('Thanks File Uploaded');
        });
    }      
}
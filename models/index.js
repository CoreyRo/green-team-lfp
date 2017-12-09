module.exports = {
    Post: require("./Post"),
    User: require("./User"),
    Message: require("./Message"),
    Mailer: require('./Mailer')
  };
  


  const mongoose = require("mongoose");
  var passportLocalMongoose = require("passport-local-mongoose");
  const Schema = mongoose.Schema;




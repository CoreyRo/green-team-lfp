const mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: {type: String, required: true},
  password: {type: String, required: true},
  location: {type: String},
  Skills: {type: Array}
});

//takes care of salting and hashing the passpword for us
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: {type: String, required: true},
  displayName: {type: String},
  password: {type: String, required: true},
  location: {type: String},
  skills: {type: Array},
  joined: {type: Array},
  projects: {type: Array},
  imageURL: {type: String},
  about: {type: String}
});

//takes care of salting and hashing the passpword for us
UserSchema.plugin(passportLocalMongoose);


const User = mongoose.model("User", UserSchema);

module.exports = User;


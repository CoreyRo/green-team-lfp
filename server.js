// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================--------------------------------------
const passport = require("passport");
var session = require("express-session");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
var env = require('dotenv').load();
var db = require("./models")

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)(app, passport);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project-lfg",
  {
    useMongoClient: true
  }
);

// Routes
// =============================================================
// For Passport
app.use(session({ secret: 'keyboard cat',resave: false, saveUninitialized:false})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(function(req, res, next){
  res.locals.isAuthenticated = req.isAuthenticated();
  console.log(req.isAuthenticated());
  console.log(req.user);
  next();
});

require('./config/passport/passport.js')(passport, db.User);
var authRoute = require('./routes/index.js')(app,passport);


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================--------------------------------------
const passport = require("passport");
const session = require("express-session");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const env = require('dotenv').load();
const db = require("./models")
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3001;

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect("mongodb://admin:admin@ds121686.mlab.com:21686/lfg",
  {
    useMongoClient: true
  }
);

// Sets up the Express App
// =============================================================
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// For Passport
app.use(session({ secret: 'greenteamgreenteamgreenteam',resave: false, saveUninitialized:false})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(function(req, res, next){
  res.locals.isAuthenticated = req.isAuthenticated();
  
  console.log(req.isAuthenticated());
  console.log(req.user);
  next();
});
app.use(flash()) // use connect-flash for flash messages stored in session

// Routes
// =============================================================
require('./config/passport/passport.js')(passport, db.User);
const routes = require("./routes")
app.use(routes);
// var authRoute = require('./routes/api/posts.js')(app,passport);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

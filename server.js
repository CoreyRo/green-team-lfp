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
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/project-lfg",
  {
    useMongoClient: true
  }
);


//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(cors()); //Must be before BodyParser**


// Sets up the Express App
// =============================================================
app.use('/public', express.static('public')) // Static directory
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// For Passport
app.use(session({ secret: 'greenteamgreenteamgreenteam',resave: false, saveUninitialized:false})); // session secret
 // read cookies (needed for auth)
app.use(cookieParser('greenteamgreenteamgreenteam'));
app.use(passport.initialize());
app.use(passport.session({cookie: {maxAge: 60000} })); // persistent login sessions
app.use(session(
  { secret: 'greenteamgreenteamgreenteam',
  resave: false, 
  saveUninitialized:false,
  cookie: {
    maxAge: 600000
  }
}));
// read cookies (needed for auth)
app.use(cookieParser('greenteamgreenteamgreenteam'));
app.use(passport.initialize());
 // persistent login sessions
app.use(passport.session());
app.use(function(req, res, next){
  res.locals.isAuthenticated = req.isAuthenticated();
  next()
});
app.use(flash()) // use connect-flash for flash messages stored in session


// Routes
// =============================================================
require('./config/passport/passport.js')(passport, db.User);
const routes = require("./routes")
app.use(routes);
app.get('/api/user/logout', function(req, res) {
  console.log("loggin out")
  req.session.destroy(function(err){
     if(err){
        console.log(err);
      }else{
         
      }
      req.logOut()
      res.end()
  })
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

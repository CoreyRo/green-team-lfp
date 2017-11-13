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
var flash = require("connect-flash");
const mongoose = require("mongoose");
const env = require('dotenv').load();
const db = require("./models")
var cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3001;


const routes = require("./routes")
app.use(routes);


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/project-lfg",
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

app.use(flash());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Routes
// =============================================================
require('./config/passport/passport.js')(passport, db.User);
const routes = require("./routes")
app.use(routes);
var authRoute = require('./routes/api/UserRoutes.js')(app,passport);
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


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

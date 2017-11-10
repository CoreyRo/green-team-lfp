// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================--------------------------------------

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport");
const mongoose = require("mongoose");
<<<<<<< HEAD
const routes = require("./routes")(app,passport);
const PORT = process.env.PORT || 3001;
=======
const routes = require("./routes");
var env = require('dotenv').load();

// Sets up the Express App
// =============================================================
>>>>>>> 5c9d2a24578541ce9fee4a05426c50b05f2b1592
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(flash());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


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



// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project-lfg",
  {
    useMongoClient: true
  }
);

<<<<<<< HEAD
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require('./config/passport/passport.js')(passport, db.User);
var authRoute = require('./routes/auth.js')(app,passport);
=======
>>>>>>> 5c9d2a24578541ce9fee4a05426c50b05f2b1592

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

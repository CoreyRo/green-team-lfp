const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var auth = require('../controllers/authController.js');
var db = require("../models");


module.exports = function(app, passport) {
// API Routes
router.use("/api", apiRoutes);

//Used to authenticate sign-up
router
.get('/sign-up', auth.register)
.post('/sign-up', auth.doRegister);

// //Used to authenticate sign-in
// router
// .route("/sign-in")
// .get('/sign-in', function(req, res) {
//   authController.signin
// })
// .post('/sign-in', function(req,res) {
//   passport.authenticate('local-signin', {
//     successRedirect: '/edit-profile',
//     failureRedirect: '/sign-in',
//     failureFlash:true
//   })
// });

// //Used to terminate passport session
// router
// .route("/logout")
// .get("/logout", function(req, res) {
//   authController.logout
// });


// router
// .route("/edit-profile")
// .get("/edit-profile", isLoggedIn, function(req, res) {
//   db.User.findOne({
//     where: {
//     id: req.user.id 
//   },
//   include: [
//     db.Post
//   ]
//   }).then(function(dbUser) {
//       res.render('user', { user: dbUser, layout: 'profile.handlebars' });
//   });
// });


isLoggedIn = (req, res, next)  => {
  console.log('redirect',req.isAuthenticated())
  if (req.isAuthenticated())
  
      return next();
      
  res.redirect('/sign-in');      
}

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

}

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var auth = require('../controllers/authController.js');
var db = require("../models");


module.exports = function() {
// API Routes
router.use("/api", apiRoutes);

//Used to authenticate sign-up
router
.route("/sign-up")
.get(auth.register)
.post(auth.doRegister);

// //Used to authenticate sign-in
// router
// .route("/sign-in")
// .get('/sign-in', function(req, res) {
//   authController.signin
// })

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

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

}

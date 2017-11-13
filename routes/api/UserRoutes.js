const router = require("express").Router();
var auth = require('../../controllers/authController.js');
var posts = require("../../controllers/postController.js");
var db = require("../../models");


// Matches with "/api/user"
  router
    .route("/sign-up")//path /api/user/sign-up
    .get(auth.register)
    .post(auth.doRegister);

  router
  .route("/browse")
  .get(posts.findAll)
  .post(posts.create)

  router 
  .route("/profile", isLoggedIn)
  .get(auth.findOne);

  router.isLoggedIn = function(req, res, next) {
    console.log('redirect',req.isAuthenticated())
    if (req.isAuthenticated())
    
        return next();
        
    res.redirect('/sign-in');
    
}

module.exports = router;


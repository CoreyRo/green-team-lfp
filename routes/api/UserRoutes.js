const router = require("express").Router();
var auth = require('../../controllers/authController.js');
var posts = require("../../controllers/postController.js");
var db = require("../../models");
const isLoggedIn =(req,res,next) => {
  return req.isAuthenticated() ? next() : res.send(403, "not authenticated")
}

// Prefix is with "/api/user/"

//Route for signing up
router
  .route("/sign-up")//path /api/user/sign-up
  .get(auth.register)
  .post(auth.doRegister)

  router
  .route("/browse")
  .get(posts.findPosts)
  .post(posts.create)

  router
  .route("/browse/get-all")
  .get(posts.findThreeUsers)

  router 
  .route("/profile")
  .get(auth.findOne);

//Route for signing in
router
  .route("/sign-in")
  .post(auth.doLogin)


//Passport checks for logged in
router.use(isLoggedIn)

//Routes under this are passport protected routes

//Route for your profile
router
  .route("/myProfile/")
  .get(auth.findOne)
  .post(posts.updateUser)


//Route for other users profiles
router
  .route("/profile/:id")
  .get(auth.viewOne)





module.exports = router;




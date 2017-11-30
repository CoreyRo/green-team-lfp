const router = require("express").Router();
var auth = require('../../controllers/authController.js');
var posts = require("../../controllers/postController.js");
var db = require("../../models");
const isLoggedIn =(req,res,next) => {
  return req.isAuthenticated() ? next() : res.send(403, "not authenticated")
}

// Matches with "/api/user"

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

  router
    .route("/sign-in")
    .post(auth.doLogin);

    router.use(isLoggedIn)

    router
    .route("/profile/")//path /api/user/sign-up
    .get(auth.findOne)
    .post(posts.updateUser)




module.exports = router;




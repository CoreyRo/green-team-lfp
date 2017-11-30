const router = require("express").Router();
var auth = require('../../controllers/authController.js');
var posts = require("../../controllers/postController.js");
var db = require("../../models");


// Matches with "/api/user"
  router
    .route("/sign-up")//path /api/user/sign-up
    .get(auth.register)
    .post(auth.doRegister)

  router
  .route("/profile/:id")//path /api/user/sign-up
  .get(auth.findOne)
  .post(posts.updateUser)


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

module.exports = router;


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
  .route("/profile")
  .get(auth.findOne);

module.exports = router;

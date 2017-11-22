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
    .route("/sign-in")
    .post(auth.doLogin);

    router.use(isLoggedIn)

    router
    .route("/profile/")//path /api/user/sign-up
    .get(auth.findOne)
    .post(posts.updateUser)


    router
      .route("/browse")
      .get(posts.findAll)
      .post(posts.create)




module.exports = router;




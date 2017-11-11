const router = require("express").Router();
var auth = require('../../controllers/authController.js');
var db = require("../../models");


// Matches with "/api/user"
  router
    .route("/sign-up")//path /api/user/sign-up
    .get(auth.register)
    .post(auth.doRegister)

    router
    .route("/profile/:id")//path /api/user/sign-up
    .get(auth.findOne)


module.exports = router;


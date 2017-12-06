const router = require("express").Router();
const posts = require("../../controllers/postController.js");
const auth = require("../../controllers/authController.js")


// Prefix is with "/api"

//Route for signing up
router
  .route("/sign-up")//path /api/sign-up
  .post(auth.doRegister)
  
//Route for signing in
router
  .route("/sign-in")
  .post(auth.doLogin)



module.exports = router;




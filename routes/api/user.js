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

//Route for other users profiles
router
  .route("/profile/:id")
  .get(auth.viewOne)
  .post(posts.updateOtherUser)

router
  .route("/browse")
  .get(posts.findAll)
  .post(posts.create)

router
  .route("/browse/get-all")
  .get(posts.findThreeUsers)




module.exports = router;




const router = require("express").Router();
const posts = require("../../controllers/postController.js");
const auth = require("../../controllers/authController.js")

const isLoggedIn =(req,res,next) => {
  return req.isAuthenticated() ? next() : res.status(403).send("not authenticated")
}

//Passport checks for logged in
router.use(isLoggedIn)

router
  .route("/browse")
  .get(posts.findAll)
  .post(posts.create)

router
  .route("/browse/get-all")
  .get(posts.findThreeUsers)

router 
  .route("/profile")
  .get(auth.findOne);

//Route for your profile
router
  .route("/myProfile/")
  .get(auth.findOne)
  .post(posts.updateUser)

//Route for other users profiles
router
  .route("/profile/:id")
  .get(auth.viewOne)

router
  .route("/messages")
  .post(posts.updateMessages)
  .get(posts.findMessages)


module.exports = router
const router = require("express").Router();
const posts = require("../../controllers/postController.js");
const auth = require("../../controllers/authController.js");
const msg = require("../../controllers/msgController.js");

const isLoggedIn =(req,res,next) => {
  return req.isAuthenticated() ? next() : res.status(403).send("not authenticated")
}

//Passport checks for logged in
router.use(isLoggedIn)

//Route for your profile
router
  .route("/myProfile/")
  .get(auth.findOne)
  .post(posts.updateUser)

router
  .route("/messages")
  .post(posts.updateMessages)
  .get(posts.findMessages)

router
  .route("/reply/:id")
  .get(auth.viewReply)

router
  .route("/delete/:id")
  .post(msg.delete);


module.exports = router
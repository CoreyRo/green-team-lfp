const router = require("express").Router();
const posts = require("../../controllers/postController.js");


router 
.route("/posts")
.post(posts.create);

module.exports = router
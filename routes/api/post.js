const router = require("express").Router();
const posts = require("../../controllers/postController.js");


router 
.route("/posts")
.post(posts.create, function(req, res) {
    posts.updateUser(req);
});

router
.route("/myprojects")
.get(posts.findOwnersPosts);

module.exports = router
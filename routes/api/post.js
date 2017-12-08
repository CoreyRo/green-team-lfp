const router = require("express").Router();
const posts = require("../../controllers/postController.js");


router
    .route("/browse")
    .post(posts.create)

router
    .route("/browse/page/:num")
    .get(posts.findAll)

router
    .route("/browse/get-all")
    .get(posts.findThreeUsers)

router 
    .route("/posts")
    .post(posts.create, function(req, res) {
        posts.updateUser(req);
    });

router
    .route("/myprojects")
    .get(posts.findOwnersPost);

router
    .route("/project/:id")
    .get(posts.findById);


module.exports = router
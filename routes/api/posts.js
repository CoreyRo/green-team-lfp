const router = require("express").Router();
const articleController = require("../../controllers/postController");

// Matches with "/api/articles"
router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router
  .route("/saved/:id")
  .get(articleController.findById)
  .delete(articleController.remove)
  .post(articleController.create);

router
  .route("/saved")
  .get(articleController.findAll)
  .post(articleController.create);

router
  .route("/results")
  .get(articleController.findAll)
  .post(articleController.create);


module.exports = router;
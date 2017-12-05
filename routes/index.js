const path = require("path");
const router = require("express").Router();
const img = require("../controllers/imgController.js");
const apiRoutes = require("./api");

//route for imageUpload
router
  .route("/imageUpload")
  .post(img.imgUpload)

//adds /api to apiRoutes
router.use("/api", apiRoutes);


module.exports = router;

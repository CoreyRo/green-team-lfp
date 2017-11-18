const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//adds /api to apiRoutes
router.use("/api", apiRoutes);

<<<<<<< HEAD
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
=======
>>>>>>> 71a584497374f54e4971e87a4e1b4c6e748d34ac

module.exports = router;

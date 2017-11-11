const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//adds /api to apiRoutes
router.use("/api", apiRoutes);

<<<<<<< HEAD

=======
>>>>>>> 716cb00a3aa5ea49d97a2f2dfadef67f843ad819
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;

const router = require("express").Router();
const UserRoutes = require("./UserRoutes");

//appends /user to UserRoutes
router.use("/user", UserRoutes);

module.exports = router;
const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./user");
const postRoutes = require("./post");
const recoveryRoutes = require("./recovery");

//appends /user to routes
//route looks like /api/user/
// TO DO: fix the all the axios posts to 
// more logically named routes
router.use("/user", userRoutes);

router.use("/user", authRoutes);

// router.use("/user", postRoutes);

router.use("/recovery", recoveryRoutes);

module.exports = router;
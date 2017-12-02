const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./user");
const postRoutes = require("./post");
const recoveryRoutes = require("./recovery");

//appends /user to routes
//route looks like /api/user/

router.use("/user", authRoutes);

router.use("/user", userRoutes);

router.use("/user", postRoutes);

router.use("/user", recoveryRoutes);

module.exports = router;



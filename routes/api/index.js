const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./user");
const postRoutes = require("./post");
const joinRoutes = require('./join-group')
const recoveryRoutes = require("./recovery");

//appends /user to routes
//route looks like /api/user/
// TO DO: fix the all the axios posts to 
// more logically named routes
router.use("/user", userRoutes);

router.use("/user", postRoutes);

router.use("/join", joinRoutes)

router.use("/recovery", recoveryRoutes);

router.use("/user", authRoutes);



module.exports = router
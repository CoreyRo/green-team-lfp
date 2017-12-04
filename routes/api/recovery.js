const router = require("express").Router()
const recovery = require("../../controllers/recoveryController.js")


router
    .route("/recovery")
    .post(recovery.findAccountAndSendPass)
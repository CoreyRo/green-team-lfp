const router = require("express").Router()
const recovery = require("../../controllers/recoveryController.js")


router
    .route("/send-email")
    .post(recovery.findAccountAndSendPass)

module.exports = router
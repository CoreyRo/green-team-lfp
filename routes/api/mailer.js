const router = require("express").Router()
const mailer = require('../../controllers/mailerController')

router
    .route('/join-mailer')
    .post(mailer.addToMailList)

module.exports = router


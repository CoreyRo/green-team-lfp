const router = require("express").Router();
const join = require('../../controllers/joinController.js')

router
    .route('/join-group')
    .post(join.sendMail)

module.exports = router
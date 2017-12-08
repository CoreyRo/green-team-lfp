const router = require("express").Router();
const join = require('../../controllers/joinController.js')

router
    .route('/join-group')
    .post(join.sendMail)

router
    .route('/apply-for-group/:id')
    .post(join.updateGroup)

module.exports = router
const express = require('express');
const router = express.Router();
const securityController = require('../controller/SecurityController')

router.get('/', securityController.getAll);
router.get('/doc', securityController.doc)
//router.post('/create', securityController.create)

module.exports = router

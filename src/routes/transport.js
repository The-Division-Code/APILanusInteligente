const express = require('express');
const router = express.Router();
const transportController = require('../controller/TransportController')

router.get('/', transportController.getAll);
router.get('/doc', transportController.doc)
//router.post('/create', transportController.create)

module.exports = router

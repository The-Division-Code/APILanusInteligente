const express = require('express');
const router = express.Router();
const transporteController = require('../controller/TransporteController')

router.get('/', transporteController.getAll);
router.get('/doc', transporteController.doc)
router.post('/create', transporteController.create)

module.exports = router
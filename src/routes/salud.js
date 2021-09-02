const express = require('express');
const router = express.Router();
const saludController = require('../controller/SaludController')

router.get('/', saludController.getAll);
router.post('/create', saludController.create)

module.exports = router
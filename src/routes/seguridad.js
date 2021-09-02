const express = require('express');
const router = express.Router();
const seguridadController = require('../controller/SeguridadController')

router.get('/', seguridadController.getAll);
router.post('/create', seguridadController.create)

module.exports = router
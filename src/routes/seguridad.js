const express = require('express');
const router = express.Router();
const seguridadController = require('../controller/SeguridadController')

router.get('/', seguridadController.getAll);
router.get('/doc', seguridadController.doc)
router.post('/create', seguridadController.create)

module.exports = router
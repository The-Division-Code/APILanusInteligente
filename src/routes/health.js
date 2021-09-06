const express = require('express');
const router = express.Router();
const healthController = require('../controller/HealthController')

router.get('/', healthController.getAll);
router.get('/doc', healthController.doc)
router.post('/create', healthController.create);

module.exports = router
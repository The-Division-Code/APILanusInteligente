const express = require('express');
const router = express.Router();
const bomberosController = require('../controller/BomberosController')

router.get('/', bomberosController.getAll);
router.post('/create', bomberosController.create)

module.exports = router
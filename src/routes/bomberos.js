const express = require('express');
const router = express.Router();
const bomberosController = require('../controller/BomberosController')

router.get('/', bomberosController.getAll);
router.get('/doc', bomberosController.doc)
router.post('/create', bomberosController.create)

module.exports = router
const express = require('express');
const router = express.Router();
const clubController = require('../controller/ClubController')

router.get('/', clubController.getAll);
router.get('/doc', clubController.doc)
//router.post('/create', clubController.create)

module.exports = router

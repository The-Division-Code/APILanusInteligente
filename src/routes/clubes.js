const express = require('express');
const router = express.Router();
const clubesController = require('../controller/clubesController')

router.get('/', clubesController.getAll);
router.get('/doc', clubesController.doc)
router.post('/create', clubesController.create)

module.exports = router
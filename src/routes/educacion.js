const express = require('express');
const router = express.Router();
const educacionController = require('../controller/EducacionController')

router.get('/', educacionController.getAll);
router.get('/doc', educacionController.doc)
router.post('/create', educacionController.create)

module.exports = router
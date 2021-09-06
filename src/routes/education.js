const express = require('express');
const router = express.Router();
const educationController = require('../controller/EducationController')

router.get('/', educationController.getAll);
router.get('/doc', educationController.doc)
router.post('/create', educationController.create)

module.exports = router
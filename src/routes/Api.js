const express = require('express');
const router = express.Router();
const ApiController = require('../controller/ApiController.js')

router.get('/', ApiController.index);


module.exports = router;
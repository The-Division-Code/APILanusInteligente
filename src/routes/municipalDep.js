const express = require('express');
const router = express.Router();
const municipalDep = require('../controller/MunicipalDepController')

router.get('/', municipalDep.getAll);
router.get('/doc', municipalDep.doc)
//router.post('/create', municipalDep.create);

module.exports = router

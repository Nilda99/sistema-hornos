var express = require('express');
var router = express.Router();
var empresaController = require('../controller/EmpresaController');
/* GET users listing. */
router.get('/get', empresaController.get);
router.post('/guardar', empresaController.guardar);
module.exports = router;
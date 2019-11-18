var express = require('express');
var router = express.Router();
var EmpresaController = require('../controller/EmpresaController');
/* GET users listing. */
router.get('/get', EmpresaController.get);
router.post('/guardar', EmpresaController.guardar);
router.delete('/eliminar/:id', EmpresaController.eliminar);
module.exports = router;

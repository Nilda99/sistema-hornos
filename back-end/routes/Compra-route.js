var express = require('express');
var router = express.Router();
var CompraController = require('../controller/CompraController');
/* GET users listing. */
router.get('/get', CompraController.get);
router.post('/guardar', CompraController.guardar);
router.put('/actualizar/:id', CompraController.actualizar);
router.delete('/eliminar/:id', CompraController.eliminar);

module.exports = router;
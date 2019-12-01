var express = require('express');
var router = express.Router();
var VentaController = require('../controller/VentaController');
/* GET users listing. */
router.get('/get', VentaController.get);
router.post('/guardar', VentaController.guardar);
router.put('/actualizar/:id', VentaController.actualizar);
router.delete('/eliminar/:id', VentaController.eliminar);

module.exports = router;
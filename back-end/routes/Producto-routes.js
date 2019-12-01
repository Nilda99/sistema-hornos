var express = require('express');
var router = express.Router();
var ProductoController = require('../controller/ProductoController');
/* GET users listing. */
router.get('/get', ProductoController.get);
router.post('/guardar', ProductoController.guardar);
router.put('/actualizar/:id', ProductoController.actualizar);
router.delete('/eliminar/:id', ProductoController.eliminar);

module.exports = router;
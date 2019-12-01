var express = require('express');
var router = express.Router();
var CategoriaController = require('../controller/CategoriaController');
/* GET users listing. */
router.get('/get', CategoriaController.get);
router.post('/guardar', CategoriaController.guardar);
router.put('/actualizar/:id', CategoriaController.actualizar);
router.delete('/eliminar/:id', CategoriaController.eliminar);

module.exports = router;
// var producto = require('../models/producto');
var models = require('../models');

function get(request, response) {
    models.Producto.findAll().then(producto => {
        response.json(producto);
    })
}

function guardar(request, response) {
    console.log(request.body);
    models.Producto.create({
        Foto: request.body.Foto,
        Descripcion: request.body.Descripcion,
        Precio: request.body.Precio,
        MinimoCompra: request.body.MinimoCompra,
        Cantidad: request.body.Cantidad,
        IdEmpresa: request.body.IdEmpresa

    }).then(function(data) {
        if (data) {
            response.status(200).send({ message: 'se registro' });
        } else {
            response.status(400).send({ message: 'no se registro' });
        }
    });
}

function actualizar(req, res) {
    const nuevoDato = req.body;
    models.Producto.update(nuevoDato, { where: { id: req.params.id } })
        .then(producto => {
            return res.status(404).json({ message: "actualizado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "no ha sido actualizado" });
        });
}

function eliminar(req, res) {
    console.log(req);
    models.Producto.destroy({ where: { id: req.params.id } })
        .then(producto => {
            return res.status(200).json({ message: "Eliminado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "No ha sido eliminado" });
        });
}

module.exports = {get, guardar, actualizar, eliminar }
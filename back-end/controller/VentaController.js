// var venta = require('../models/venta');
var models = require('../models');

function get(request, response) {
    models.Venta.findAll().then(venta => {
        response.json(venta);
    })
}

function guardar(request, response) {
    console.log(request.body);
    models.Venta.create({
        Nombre: request.body.Nombre

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
    models.Venta.update(nuevoDato, { where: { id: req.params.id } })
        .then(venta => {
            return res.status(404).json({ message: "actualizado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "no ha sido actualizado" });
        });
}

function eliminar(req, res) {
    console.log(req);
    models.Venta.destroy({ where: { id: req.params.id } })
        .then(venta => {
            return res.status(200).json({ message: "Eliminado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "No ha sido eliminado" });
        });
}

module.exports = {get, guardar, actualizar, eliminar }
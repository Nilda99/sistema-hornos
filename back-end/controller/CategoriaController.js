// var categoria = require('../models/categoria');
var models = require('../models');

function get(request, response) {
    models.Categoria.findAll().then(categoria => {
        response.json(categoria);
    })
}

function guardar(request, response) {
    console.log(request.body);
    models.Categoria.create({
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
    models.Categoria.update(nuevoDato, { where: { id: req.params.id } })
        .then(categoria => {
            return res.status(404).json({ message: "actualizado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "no ha sido actualizado" });
        });
}

function eliminar(req, res) {
    console.log(req);
    models.Categoria.destroy({ where: { id: req.params.id } })
        .then(categoria => {
            return res.status(200).json({ message: "Eliminado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "No ha sido eliminado" });
        });
}

module.exports = {get, guardar, actualizar, eliminar }
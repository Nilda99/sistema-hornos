// var empresa = require('../models/empresa');
var models = require('../models');

function get(request, response) {
    models.Empresa.findAll().then(empresa => {
        response.json(empresa);
    })
}

function guardar(request, response) {
    console.log(request.body);
    models.Empresa.create({
        Nombre: request.body.Nombre,
        Telefono: request.body.Telefono,
        Direccion: request.body.Direccion,
        Logo: request.body.Logo

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
    models.Empresa.update(nuevoDato, { where: { id: req.params.id } })
        .then(empresa => {
            return res.status(404).json({ message: "actualizado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "Server con problemas" });
        });
}

function eliminar(req, res) {
    models.Empresa.destroy({ where: { id: req.params.id } })
        .then(empresa => {
            return res.status(404).json({ message: "Eliminado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "No ha sido eliminado" });
        });
}

module.exports = {get, guardar, actualizar, eliminar }
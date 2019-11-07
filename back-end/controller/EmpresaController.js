var models = require('../models/empresa');

function get(request, response) {
    models.Empresa.findAll().then(empresa => {
        response.json(empresa);
    })
}

function guardar(request, response) {
    models.Empresa.create({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        imagen: request.body.imagen,
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
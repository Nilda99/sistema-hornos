'use strict';
module.exports = (sequelize, DataTypes) => {
    const Empresa = sequelize.define('Empresa', {
        Nombre: DataTypes.STRING,
        Telefono: DataTypes.STRING,
        Direccion: DataTypes.TEXT,
        Logo: DataTypes.STRING
    }, {});
    Empresa.associate = function(models) {
        // associations can be defined here
    };
    return Empresa;
};
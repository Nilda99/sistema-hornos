'use strict';
module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        Nombre: DataTypes.STRING
    }, {});
    Categoria.associate = function(models) {
        // associations can be defined here
        Categoria.hasMany(models.Producto, {
            foreingkey: 'IdCategoria',
            as: 'Producto'
        })


    };
    return Categoria;
};
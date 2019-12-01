'use strict';
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
        IdCategoria: DataTypes.INTEGER,
        Foto: DataTypes.STRING,
        Descripcion: DataTypes.STRING,
        Precio: DataTypes.INTEGER,
        MinimoCompra: DataTypes.INTEGER,
        Cantidad: DataTypes.INTEGER,
        IdEmpresa: DataTypes.INTEGER
    }, {});
    Producto.associate = function(models) {
        // associations can be defined here
        Producto.belongsTo(models.Empresa);
        Producto.belongsTo(models.Categoria);
        Producto.hasMany(models.Compra, {
            foreingkey: 'IdProducto',
            as: 'Compra'
        });
        Producto.hasMany(models.Venta, {
            foreingkey: 'IdProducto',
            as: 'Venta'
        })

    };
    return Producto;
};
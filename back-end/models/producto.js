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
  };
  return Producto;
};
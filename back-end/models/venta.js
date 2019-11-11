'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define('Venta', {
    IdProducto: DataTypes.INTEGER
  }, {});
  Venta.associate = function(models) {
    // associations can be defined here
  };
  return Venta;
};
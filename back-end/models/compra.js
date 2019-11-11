'use strict';
module.exports = (sequelize, DataTypes) => {
  const Compra = sequelize.define('Compra', {
    IdProducto: DataTypes.INTEGER
  }, {});
  Compra.associate = function(models) {
    // associations can be defined here
  };
  return Compra;
};
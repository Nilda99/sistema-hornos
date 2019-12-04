'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Productos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            IdCategoria: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Categoria",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"

            },
            Foto: {
                type: Sequelize.STRING
            },
            Descripcion: {
                type: Sequelize.STRING
            },
            Precio: {
                type: Sequelize.INTEGER
            },
            MinimoCompra: {
                type: Sequelize.INTEGER
            },
            Cantidad: {
                type: Sequelize.INTEGER
            },
            IdEmpresa: {
                type: Sequelize.INTEGER,
                references: {
                    model: "empresa",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Productos');
    }
};
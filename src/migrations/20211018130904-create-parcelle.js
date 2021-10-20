"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("parcelles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_parcelle: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      proprietaireId: {
        type: Sequelize.INTEGER,
        references: {
          model: "proprietaires",
          key: "id",
        },
      },
      avenueId: {
        type: Sequelize.INTEGER,
        references: {
          model: "avenues",
          key: "id",
        },
      },
      numero : {
        allowNull : false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("parcelles");
  },
};

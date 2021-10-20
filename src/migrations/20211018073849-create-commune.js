"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("communes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_commune: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nom_commune: {
        type: Sequelize.STRING,
      },
      historique_commune: {
        type: Sequelize.TEXT,
      },
      superficie_commune: {
        type: Sequelize.DOUBLE,
      },
      districtId: {
        type: Sequelize.INTEGER,
        references: {
          model: "districts",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("communes");
  },
};

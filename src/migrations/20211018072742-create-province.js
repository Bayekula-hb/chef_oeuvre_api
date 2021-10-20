"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("provinces", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_province: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nom_province: {
        type: Sequelize.STRING,
      },
      historique_province: {
        type: Sequelize.STRING,
      },
      superficie_province: {
        type: Sequelize.DOUBLE,
      },
      chef_lieux: {
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
    await queryInterface.dropTable("provinces");
  },
};

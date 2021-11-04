'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historic_parcels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_historic_parcel: {
        type: Sequelize.STRING
      },
      id_parcelle: {
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.INTEGER
      },
      avenueId: {
        type: Sequelize.INTEGER
      },
      number_parcel: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('historic_parcels');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('parcels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_parcel: {
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "owners",
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
      number_parcel: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('parcels');
  }
};
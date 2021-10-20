'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historique_parcelles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_historique_parcelle: {
        type: Sequelize.STRING
      },
      parcelleId :{
        type: Sequelize.INTEGER
      },
      proprietaireId: {
        type: Sequelize.INTEGER
      },
      avenueId: {
        type: Sequelize.INTEGER
      },
      numero: {
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
    await queryInterface.dropTable('historique_parcelles');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historique_proprietaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_historique: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      id_proprietaire: {
        type: Sequelize.INTEGER,
      },
      nom_proprietaire: {
        type: Sequelize.STRING
      },
      postnom_proprietaire: {
        type: Sequelize.STRING
      },
      prenom_proprietaire: {
        type: Sequelize.STRING
      },
      date_naissance: {
        type: Sequelize.DATE
      },
      nationalite: {
        type: Sequelize.STRING
      },
      personnelId: {
        type: Sequelize.INTEGER
      },
      version: {
        type: Sequelize.INTEGER
      },
      action: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('historique_proprietaires');
  }
};
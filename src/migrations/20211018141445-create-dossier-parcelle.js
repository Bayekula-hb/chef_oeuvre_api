'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dossier_parcelles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_dossier_parcelle: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      acte_de_vente: {
        type: Sequelize.STRING
      },
      livret_logeur: {
        type: Sequelize.STRING
      },
      pv_mesurage_bornage: {
        type: Sequelize.STRING
      },
      acte_de_cession: {
        type: Sequelize.STRING
      },
      parcelleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "parcelles",
          key: "id",
        },
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
    await queryInterface.dropTable('dossier_parcelles');
  }
};
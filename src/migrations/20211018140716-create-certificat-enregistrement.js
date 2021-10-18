'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('certificat_enregistrements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_certificat: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      numero_cadatre: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      altitude: {
        type: Sequelize.DOUBLE
      },
      longitude: {
        type: Sequelize.DOUBLE
      },
      nom_conservateur: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.STRING
      },
      folio: {
        type: Sequelize.STRING
      },
      situation: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      superficie: {
        type: Sequelize.DOUBLE
      },
      croquis: {
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
    await queryInterface.dropTable('certificat_enregistrements');
  }
};
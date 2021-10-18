'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quartiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_quartier: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nom_quartier: {
        type: Sequelize.STRING
      },
      historique_quartier: {
        type: Sequelize.TEXT
      },
      superficie_quartier: {
        type: Sequelize.DOUBLE
      },
      communeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "communes",
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
    await queryInterface.dropTable('quartiers');
  }
};
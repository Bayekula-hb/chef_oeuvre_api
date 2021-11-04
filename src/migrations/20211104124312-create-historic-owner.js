'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('historic_owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_historique: {
        type: Sequelize.UUID
      },
      id_owner: {
        type: Sequelize.STRING
      },
      name_owner: {
        type: Sequelize.STRING
      },
      postname_owner: {
        type: Sequelize.STRING
      },
      firstname_owner: {
        type: Sequelize.STRING
      },
      dateofbirth: {
        type: Sequelize.DATE
      },
      nationality: {
        type: Sequelize.STRING
      },
      staffId: {
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
    await queryInterface.dropTable('historic_owners');
  }
};
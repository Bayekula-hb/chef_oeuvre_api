'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('personnels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_personnel: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nom_personnel: {
        type: Sequelize.STRING
      },
      postnom_personnel: {
        type: Sequelize.STRING
      },
      prenom_personnel: {
        type: Sequelize.STRING
      },
      function_personnel: {
        type: Sequelize.STRING
      },
      matricule_personnel: {
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
    await queryInterface.dropTable('personnels');
  }
};
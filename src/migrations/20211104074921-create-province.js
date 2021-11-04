'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('provinces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_province: {
        type: Sequelize.STRING
      },
      image_province:{
        type: Sequelize.STRING
      },
      name_province: {
        type: Sequelize.STRING
      },
      history_province: {
        type: Sequelize.TEXT
      },
      surface_province: {
        type: Sequelize.FLOAT
      },
      chieftown: {
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
    await queryInterface.dropTable('provinces');
  }
};
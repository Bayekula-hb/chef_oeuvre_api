'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('townships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_township: {
        type: Sequelize.STRING
      },
      image_township:{
        type: Sequelize.STRING
      },
      name_township: {
        type: Sequelize.STRING
      },
      history_township: {
        type: Sequelize.TEXT
      },
      surface_township: {
        type: Sequelize.FLOAT
      },
      districtId: {
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
    await queryInterface.dropTable('townships');
  }
};
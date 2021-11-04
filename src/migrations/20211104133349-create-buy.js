'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_buy: {
        type: Sequelize.STRING
      },
      serviceId: {
        type: Sequelize.INTEGER
      },
      buyerId: {
        type: Sequelize.INTEGER
      },
      means_of_payement: {
        type: Sequelize.STRING
      },
      amount_pay: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('buys');
  }
};
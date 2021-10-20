"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("proprietaires", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_proprietaire: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nom_proprietaire: {
        type: Sequelize.STRING,
      },
      postnom_proprietaire: {
        type: Sequelize.STRING,
      },
      prenom_proprietaire: {
        type: Sequelize.STRING,
      },
      date_naissance: {
        type: Sequelize.DATE,
      },
      nationalite: {
        type: Sequelize.STRING,
      },
      personnelId: {
        type: Sequelize.INTEGER,
        references: {
          model: "personnels",
          key: "id",
        },
      },
      version: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("proprietaires");
  },
};

'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historique_proprietaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  historique_proprietaire.init({
    id_historique: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    id_proprietaire: DataTypes.INTEGER,
    nom_proprietaire: DataTypes.STRING,
    postnom_proprietaire: DataTypes.STRING,
    prenom_proprietaire: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    nationalite: DataTypes.STRING,
    personnelId: DataTypes.INTEGER,
    version: DataTypes.INTEGER,
    action: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    modelName: 'historique_proprietaire',
  });
  return historique_proprietaire;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proprietaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  proprietaire.init({
    id_proprietaire: DataTypes.STRING,
    nom_proprietaire: DataTypes.STRING,
    postnom_proprietaire: DataTypes.STRING,
    prenom_proprietaire: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    nationalite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'proprietaire',
  });
  return proprietaire;
};
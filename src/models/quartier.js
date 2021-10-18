'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quartier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  quartier.init({
    id_quartier: DataTypes.STRING,
    nom_quartier: DataTypes.STRING,
    historique_quartier: DataTypes.TEXT,
    superficie_quartier: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'quartier',
  });
  return quartier;
};
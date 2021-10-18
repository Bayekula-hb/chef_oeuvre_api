'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commune extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  commune.init({
    id_commune: DataTypes.STRING,
    nom_commune: DataTypes.STRING,
    historique_commune: DataTypes.TEXT,
    superficie_commune: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'commune',
  });
  return commune;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  province.init({
    id_province: DataTypes.STRING,
    nom_province: DataTypes.STRING,
    historique_province: DataTypes.STRING,
    superficie_province: DataTypes.DOUBLE,
    chef_lieux: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'province',
  });
  return province;
};
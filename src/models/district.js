'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class district extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  district.init({
    id_district: DataTypes.STRING,
    nom_district: DataTypes.STRING,
    superficie_district: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'district',
  });
  return district;
};
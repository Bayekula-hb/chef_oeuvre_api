'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avenue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  avenue.init({
    id_avenue: DataTypes.STRING,
    nom_avenue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'avenue',
  });
  return avenue;
};
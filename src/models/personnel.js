'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personnel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  personnel.init({
    id_personnel: DataTypes.STRING,
    nom_personnel: DataTypes.STRING,
    postnom_personnel: DataTypes.STRING,
    prenom_personnel: DataTypes.STRING,
    function_personnel: DataTypes.STRING,
    matricule_personnel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personnel',
  });
  return personnel;
};
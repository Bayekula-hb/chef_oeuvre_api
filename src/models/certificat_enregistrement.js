'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class certificat_enregistrement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  certificat_enregistrement.init({
    id_certificat: DataTypes.STRING,
    numero_cadatre: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    altitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    nom_conservateur: DataTypes.STRING,
    volume: DataTypes.STRING,
    folio: DataTypes.STRING,
    situation: DataTypes.TEXT,
    description: DataTypes.TEXT,
    superficie: DataTypes.DOUBLE,
    croquis: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'certificat_enregistrement',
  });
  return certificat_enregistrement;
};
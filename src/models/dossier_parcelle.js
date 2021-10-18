'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dossier_parcelle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dossier_parcelle.init({
    id_dossier_parcelle: DataTypes.STRING,
    acte_de_vente: DataTypes.STRING,
    livret_logeur: DataTypes.STRING,
    pv_mesurage_bornage: DataTypes.STRING,
    acte_de_cession: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dossier_parcelle',
  });
  return dossier_parcelle;
};
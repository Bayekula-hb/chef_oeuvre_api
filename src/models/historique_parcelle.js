'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historique_parcelle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  historique_parcelle.init({
    id_historique_parcelle: DataTypes.STRING,
    parcelleId : DataTypes.INTEGER,
    proprietaireId: DataTypes.INTEGER,
    avenueId: DataTypes.INTEGER,
    numero: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    modelName: 'historique_parcelle',
  });
  return historique_parcelle;
};
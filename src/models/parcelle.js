'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parcelle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.parcelle.belongsTo(models.proprietaire, {
        foreignKey: {
          allowNull: false,
          name:"proprietaireId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
      models.parcelle.belongsTo(models.avenue, {
        foreignKey: {
          allowNull: false,
          name:"avenueId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
      models.parcelle.belongsTo(models.certificat_enregistrement)
      models.parcelle.belongsTo(models.dossier_parcelle)
    }
  };
  parcelle.init({ 
    id_parcelle: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    proprietaireId: DataTypes.INTEGER,
    avenueId: DataTypes.INTEGER,
    numero: DataTypes.STRING,
  }, {    sequelize,
    paranoid: true,
    modelName: 'parcelle',
  });
  return parcelle;
};
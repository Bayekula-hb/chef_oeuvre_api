'use strict';
const {
  Model, UUIDV4
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
      models.quartier.belongsTo(models.commune, {
        foreignKey: {
          allowNull: false,
          name:"communeId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
      models.quartier.hasMany(models.avenue)
    }
  };
  quartier.init({
    id_quartier: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nom_quartier: DataTypes.STRING,
    historique_quartier: DataTypes.TEXT,
    superficie_quartier: DataTypes.DOUBLE,
    communeId: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'quartier',
  });
  return quartier;
};
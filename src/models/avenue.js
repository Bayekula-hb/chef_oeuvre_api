'use strict';
const {
  Model, UUIDV4
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
      models.avenue.belongsTo(models.quartier, {
        foreignKey: {
          allowNull: false,
          name:"quartierId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
      models.avenue.hasMany(models.parcelle)
    }
  };
  avenue.init({
    id_avenue: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nom_avenue: DataTypes.STRING,
    quartierId:DataTypes.INTEGER,
    avenueId : DataTypes.STRING,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'avenue',
  });
  return avenue;
};
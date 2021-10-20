'use strict';
const {
  Model,UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commune extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.commune.belongsTo(models.district, {
        foreignKey: {
          allowNull: false,
          name:"districtId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
      models.commune.hasMany(models.quartier)
    }
  };
  commune.init({
    id_commune: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nom_commune: DataTypes.STRING,
    historique_commune: DataTypes.TEXT,
    superficie_commune: DataTypes.DOUBLE,
    districtId: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'commune',
  });
  return commune;
};
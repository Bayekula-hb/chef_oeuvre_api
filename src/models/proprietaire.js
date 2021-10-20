'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proprietaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.proprietaire.belongsTo(models.province, {
        foreignKey: {
          allowNull: false,
          name:"provinceId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
      models.proprietaire.hasMany(models.parcelle)
    }
  };
  proprietaire.init({
    id_proprietaire: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    nom_proprietaire: DataTypes.STRING,
    postnom_proprietaire: DataTypes.STRING,
    prenom_proprietaire: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    nationalite: DataTypes.STRING,
    personnelId: DataTypes.INTEGER,    
    version: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'proprietaire',
  });
  return proprietaire;
};
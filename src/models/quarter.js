'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quarter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.quarter.belongsTo(models.township, {
        foreignKey: {
          allowNull: false,
          name:"townshipId",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
      models.quarter.hasMany(models.avenue)
    }
  };
  quarter.init({
    id_quarter: DataTypes.STRING,
    name_quarter: DataTypes.STRING,
    history_quarter: DataTypes.STRING,
    townshipId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid:true,
    modelName: 'quarter',
  });
  return quarter;
};
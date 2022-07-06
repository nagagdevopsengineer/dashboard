'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buses.init({
    vehicle_number: DataTypes.STRING,
    colour: DataTypes.STRING,
    seating_capacity: DataTypes.INTEGER,
    created_at: "TIMESTAMP",
    updated_at: "TIMESTAMP"

  }, {
    sequelize,
    modelName: 'buses',
    timestamps: sequelize.options.timestamps,
  });
  return buses;
};
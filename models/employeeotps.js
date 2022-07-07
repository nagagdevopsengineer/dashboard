'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employeeotps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employeeotps.init({
    // vehicle_number: DataTypes.STRING,
    // colour: DataTypes.STRING,
    // seating_capacity: DataTypes.INTEGER,
   otp_date: "TIMESTAMP",
    isboarded: "BOOLEAN"

  }, {
    sequelize,
    modelName: 'employeeotps',
    timestamps: sequelize.options.timestamps,
  });
  return employeeotps;
};
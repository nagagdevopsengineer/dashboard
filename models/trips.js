'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trips.init({
   
    is_boarded: DataTypes.BOOLEAN,
    otp: DataTypes.INTEGER,
    otp_date: "TIMESTAMP",
   

  }, {
    sequelize,
    modelName: 'trips',
    timestamps: sequelize.options.timestamps,
  });
  return trips;
};
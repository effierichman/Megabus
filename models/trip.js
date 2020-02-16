'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    departure_city: DataTypes.STRING,
    destination_city: DataTypes.STRING,
    travel_time: DataTypes.STRING,
    departure_time: DataTypes.STRING,
    arrival_time: DataTypes.STRING,
    travel_date_begin: DataTypes.STRING,
    travel_date_end: DataTypes.STRING
  }, {});
  Trip.associate = function(models) {
    // associations can be defined here
  };
  return Trip;
};
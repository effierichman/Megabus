'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departure_city: {
        type: Sequelize.STRING
      },
      destination_city: {
        type: Sequelize.STRING
      },
      travel_time: {
        type: Sequelize.STRING
      },
      departure_time: {
        type: Sequelize.STRING
      },
      arrival_time: {
        type: Sequelize.STRING
      },
      travel_date_begin: {
        type: Sequelize.STRING
      },
      travel_date_end: {
        type: Sequelize.STRING
      },
      paid: {
        type: Sequelize.BOOLEAN
      },
      departure_long: {
        type: Sequelize.FLOAT
      },
      departure_latt: {
        type: Sequelize.FLOAT

      },
      arrival_long: {
        type: Sequelize.FLOAT

      },
      arrival_latt: {
        type: Sequelize.FLOAT

      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trips');
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trips', [{
      departure_city: 'New York',
      destination_city: 'Boston',
      travel_time: '2',
      departure_time: '2:00',
      arrival_time: '4:00',
      travel_date_begin: '1/12',
      travel_date_end: '1/13',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trips', null, {});
  }
};
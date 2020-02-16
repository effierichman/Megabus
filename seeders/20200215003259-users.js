'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'Effie',
      email: 'effie@gmail.com',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Donald',
      email: 'donald@gmail.com',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Rachel',
      email: 'rachel@gmail.com',
      password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
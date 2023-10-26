'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 'toxic-beauty', // Unique ID for your admin user
      name: 'Reyna',
      /*
      * To set the password, you can use a tool like bcrypt to hash your password.
      * You should not store plain text passwords. Generate a bcrypt hash for your password.
      * Example: Use the bcrypt hash for "admin12"
      */
      password: '$2y$09$KLnCgVYWhSZ5oC2Eg6IfguPuAHSDUT/aaZP4a1Qs5EDpeSUykag9i',
      email: 'ToxicAdmin@gmail.com',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', { id: 'toxic-beauty' });
  }
};

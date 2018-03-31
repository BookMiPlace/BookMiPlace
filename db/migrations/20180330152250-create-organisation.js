'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Organisations', {
      city: {
        type: Sequelize.STRING
      },
      county: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        validate: {
          len: [2, 200],
          msg: "Must between 2 - 200 characters"
        },
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      postCode: {
        type: Sequelize.STRING
      },
      streetAddress: {
        type: Sequelize.STRING
      },
      taxNumber: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Organisations');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrganisationProviders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organisation_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
           model: 'Organisations',
           key: 'id'
         }
      },
      provider_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
           model: 'Providers',
           key: 'id'
         }
      },
      owner: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
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
    return queryInterface.dropTable('OrganisationProviders');
  }
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provider = sequelize.define('Provider', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  Provider.associate = function(models) {
    Provider.hasMany(models.OrganisationMembership, {
      foreignKey: 'membershipable_id',
      constraints: false,
      scope: {
        membershipable: 'provider'
      }
    });
  };
  return Provider;
};
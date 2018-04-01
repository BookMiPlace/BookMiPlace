'use strict';
module.exports = (sequelize, DataTypes) => {
  var Organisation = sequelize.define('Organisation', {
    city: DataTypes.STRING,
    county: DataTypes.STRING,
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    postCode: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    taxNumber: DataTypes.STRING
  }, {});
  Organisation.associate = function(models) {
    Organisation.hasMany(models.OrganisationMembership, {
      foreignKey: 'organisation_id'
    });
  };
  return Organisation;
};
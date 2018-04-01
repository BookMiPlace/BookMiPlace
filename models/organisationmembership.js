'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrganisationMembership = sequelize.define('OrganisationMembership', {
    membershipable: DataTypes.STRING,
    membershipable_id: DataTypes.INTEGER
  }, {});
  OrganisationMembership.associate = function(models) {
    OrganisationMembership.hasOne(models.Organisation, { foreignKey: 'organisation_id' });
    OrganisationMembership.belongsTo(models.Employee, {
      foreignKey: 'membershipable_id',
      constraints: false,
      as: 'Employee'
    });
    OrganisationMembership.belongsTo(models.Provider, {
      foreignKey: 'membershipable_id',
      constraints: false,
      as: 'Provider'
    });
  };
  return OrganisationMembership;
};
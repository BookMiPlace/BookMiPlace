'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrganisationProvider = sequelize.define('OrganisationProvider', {
    owner: DataTypes.BOOLEAN
  }, {});
  OrganisationProvider.associate = function(models) {
    OrganisationProvider.belongsTo(models.Organisation, { foreignKey: 'organisation_id' });
    OrganisationProvider.belongsTo(models.Provider, { foreignKey: 'provider_id' });
  };
  return OrganisationProvider;
};
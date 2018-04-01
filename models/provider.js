'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provider = sequelize.define('Provider', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {});
  Provider.associate = function(models) {
    Provider.hasMany(models.Trip, { as: 'Trips', foreignKey: 'provider_id' })
  };
  return Provider;
};
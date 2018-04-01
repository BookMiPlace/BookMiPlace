'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    Employee.hasMany(models.OrganisationMembership, {
      foreignKey: 'membershipable_id',
      constraints: false,
      scope: {
        membershipable: 'employee'
      }
    });
  };
  return Employee;
};
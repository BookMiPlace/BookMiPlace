// TODO: just for testing - delete when we have real models
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    username: DataTypes.STRING
  });
};
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    familyId: DataTypes.NUMBER,
    isParent: DataTypes.BOOLEAN
  });
  return User;
};

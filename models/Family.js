module.exports = function(sequelize, DataTypes) {
  var Family = sequelize.define("Family", {
    elfOne: DataTypes.STRING,
    elfTwo: DataTypes.STRING
  });
  return Family;
};

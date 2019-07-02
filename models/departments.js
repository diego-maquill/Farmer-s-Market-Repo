module.exports - function (sequelize, DataTypes) {
    const Department = sequelize.define("Department", {
        name: DataTypes.STRING
    });
}
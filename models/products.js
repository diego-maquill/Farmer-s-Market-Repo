module.exports = function (sequelize, DataTypes) {
    const Products = sequelize.define("Product", {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        sku: DataTypes.STRING,
    });
    return Products;
}
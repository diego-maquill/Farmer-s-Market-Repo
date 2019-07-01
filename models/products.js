module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture:{
            type:DataTypes.STRING,
            allowNull:true}
    });

    Product.associate = function(models){
        Product.belongsTo(models.Market,{
            foreingKey:{
                allowNull:false
            }
        });
    }

    Product.associate = function(models){
        Product.hasMany(models.OrderDetail,{
            onDelete:"cascade"
        });
    }
    return Products;
}
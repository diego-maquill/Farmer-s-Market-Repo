module.exports = function (sequelize, DataType) {
    const Market = sequelize.define("Market",{
        name:{
            type:DataType.STRING,
        allowNull:false},
        address:{
            type:DataType.STRING,
        allowNull:false
        },
        city:{
            type:DataType.STRING,
            allowNull:false
        },
        zip:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                len:[5],
                isIn: {
                    args: [/(^\d{5}$)|(^\d{5}-\d{4}$)/]}
            }
        }

    });

    Market.associate = function(models){
        Market.hasMany(models.Products,{
            onDelete:"cascade"
        })
    }

    return Market;
}
module.exports = function(sequelize, DataTypes){
    const OrderDetail =("Order_Detail",{
        price:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        tax:{
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        fee:{
            type:DataTypes.DECIMAL,
            allowNull:false
        }

    }); 
    return OrderDetail;
}
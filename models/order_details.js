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
    
    OrderDetail.associate = function(models){
        OrderDetail.belongsTo(models.Order,{
            foreingKey:{
                allowNull:false
            }
        });
    }

    OrderDetail.associate = function(models){
        OrderDetail.belongsTo(models.Product,{
            foreingKey:{
                allowNull:false
            }
        });
    }
    
    return OrderDetail;
}
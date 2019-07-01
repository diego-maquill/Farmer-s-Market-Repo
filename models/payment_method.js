module.exports=function(sequelize,DataTypes){
    const PaymentMethod = sequelize.define("Payment_Method",{
        credit_card:{
            type: DataTypes.STRING,
            allowNull:false
        },
        expiration_date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        scv:{
            type:DataTypes.STRING,
            allowNull:false
        },
        primary_pay:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            default:0
        },
        active:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            default:0
        }
    });
    return PaymentMethod;
}
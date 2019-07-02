module.exports=function(sequelize,DataTypes){
const Shopper = sequelize.define("Shopper",{
    email:{type:DataTypes.STRING,
    allowNull:false,
    validate:{
        isIn:[ /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/]}
    },
    password:{
    type:DataTypes.STRING,
    allowNull:false},
    first_name:{
        type:STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user_name:{
        type:DataTypes.STRING,
        default: (`${this.user_name}-${thislast_name}`)
    },
    
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
    },
    telephone:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[10],
            isIn: {
                args: [/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/]}
        }
    },
    status:{type:DataTypes.BOOLEAN,
        default:0
    }

});

Shopper.associate = function(models){
    Shopper.hasMany = (models.Orders,{
        onDelete:"cascade"
    });
}

return Shopper;
}
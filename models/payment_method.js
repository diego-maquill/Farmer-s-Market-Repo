module.exports = function (sequelize, DataTypes) {
    const PaymentMethod = sequelize.define("Payment_Method", {
        credit_card: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isCreditCard() }
        },
        expiration_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: { isDate() }
        },
        scv: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^\d{3}$/
            }
        },
        primary_pay: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 0
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 0
        }
    });

    PaymentMethod.associate = function (models) {
        PaymentMethod.belongTo(models.Customer, {
            allowNull: false
        });
    }
    return PaymentMethod;
}
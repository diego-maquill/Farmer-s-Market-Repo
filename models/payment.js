module.exports = function (sequelize, DataTypes) {
    const Payment = sequelize.define({
        payment_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            default: new Date(),
            validate: { isDate() }
        },
        total_amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: { isDecimal() }
        }
    });

    Payment.associate = function (models) {
        models.Payment.belongsTo(models.Farmer, {
            foreignKey: { allowNull: false }
        });
    }
    return Payment;
}
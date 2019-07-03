module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define("Order", {
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5],
                isIn: {
                    args: [/(^\d{5}$)|(^\d{5}-\d{4}$)/]
                }
            }
        },
        credit_card: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expiration_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        scv: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        tax: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            default: 0.0625
        },
        fee: {
            type: DataTypes,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isIn: ["order", "ready", "pick"] }
        },
        date_order: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            default: new Date(),
            validate: { isDate() }
        }

    });

    Order.associate = function (models) {
        Order.hasMany(models.OrderDetail, {
            onDelete: "cascade"
        });
    }

    Order.associate = function (models) {
        Order.belongsTo(models.customer, {
            foreingKey: {
                allowNull: false
            }
        });
    }

    Order.associate = function (models) {
        Order.belongsTo(models.shopper, {
            foreingKey: {
                allowNull: false
            }
        });
    }
    return Order;
}
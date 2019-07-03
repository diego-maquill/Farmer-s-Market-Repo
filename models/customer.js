module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail()
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            first_name: {
                type: STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_name: {
                type: DataTypes.STRING,
                default: (`${this.user_name}-${thislast_name}`)
            },

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
                    is: /(^\d{5}$)|(^\d{5}-\d{4}$)/
                }
            },
            telephone: {
                type: DataTypes,
                allowNull: false,
                validate: {
                    len: [10],
                    is: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
                }
            }
        },
        telephone_other: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [10],
                is: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
            }
        }
        ,
        account_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: 1
        }

    });

    Customer.associate = function (models) {
        Customer.hasMany(models.PaymentMethod, {
            onDelete: "cascade"
        })
    }

    Customer.associate = function (models) {
        Customer.hasMany(models.Order, {
            onDelete: "cascade"
        })
    }



    return Customer;
}
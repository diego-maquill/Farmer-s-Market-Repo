module.exports = function (sequelize, DataTypes) {
    const Farmer = sequelize.define("Farmer", {
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
                type: DataType.STRING,
                allowNull: false
            },
            city: {
                type: DataType.STRING,
                allowNull: false
            },
            zip: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    len: [5, 10],
                    is: /(^\d{5}$)|(^\d{5}-\d{4}$)/
                }
            }
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10],
                is: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
            }
        }
        ,
        account_status: {
            type: DataTypes.BOOLEAN,
            default: 1
        }

    });

    Farmer.associate = function (models) {
        Shopper.hasMany = (models.Product, {
            onDelete: "cascade"
        });
    }

    return Farmer;
}
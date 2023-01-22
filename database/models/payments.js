module.exports = function (sequelize, DataTypes) {
    let alias = "Pagos"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: "payments",
        timestamps: false
    }

    let Payments = sequelize.define(alias, cols, config);

    Payments.associate = function (models) {
        Payments.hasMany(models.Pedido, {
            as: "pedidos",
            foreignKey: "payment_id"
        })
    }

    return Payments;
}
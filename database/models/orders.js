module.exports = function (sequelize, DataTypes) {
    let alias = "Pedido"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        payment_id: {
            type: DataTypes.INTEGER
        },
        order_date: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: "orders",
        timestamps: false
    }

    let Order = sequelize.define(alias, cols, config);

    Order.associate = function (models) {
        Order.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "user_id",
        });
        Order.belongsTo(models, Pagos, {
            as: "pagos",
            foreignKey: "payment_id"
        })
    }

    return Order;
}
const model = function (sequelize, DataTypes) {
    let modelName, attributes, options;
    modelName = "Order"
    attributes = {
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
    options = {
        tableName: "orders",
        createdAt: 'created_at',
        updatedAt: 'modified_at',
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
    }

    const Order = sequelize.define(modelName, attributes, options);

    Order.associate = function (models) {
        Order.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "user_id",
        });
        Order.belongsTo(models.Payment, {
            as: "pagos",
            foreignKey: "payment_id"
        })
    }

    return Order;
}

export default model;
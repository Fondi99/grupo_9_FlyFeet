const model = function (sequelize, DataTypes) {
    let modelName, attributes, options;
    modelName = "Payment"
    attributes = {
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
    options = {
        tableName: "payments",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
    }

    const Payment = sequelize.define(modelName, attributes, options);

    Payment.associate = function (models) {
        Payment.hasMany(models.Order, {
            as: "pedidos",
            foreignKey: "payment_id"
        })
    }

    return Payment;
}

export default model;
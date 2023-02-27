const model = function (sequelize, DataTypes) {
    let modelName, attributes, options;
    modelName = "User"
    attributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.DECIMAL
        },
        phone_number: {
            type: DataTypes.DECIMAL
        },
        city: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING
        }
    }
    options = {
        tableName: "users",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
    };

    const User = sequelize.define(modelName, attributes, options);

    User.associate = function (models) {
        User.hasMany(models.Payment, {
            as: "pedidos",
            foreignKey: "user_id"
        });
    }
    return User;
}
export default model;
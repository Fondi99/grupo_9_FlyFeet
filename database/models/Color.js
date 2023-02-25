const model = function (sequelize, DataTypes) {
    let modelName, attributes, options;
    modelName = "Color"
    attributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        rgb: {
            type: DataTypes.STRING
        }
    }
    options = {
        tableName: "colors",
        createdAt: 'created_at',
        updatedAt: 'modified_at',
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
    }

    const Color = sequelize.define(modelName, attributes, options);

    Color.associate = function (models) {
        Color.belongsToMany(models.Product, {
            as: "productos",
            through: "product_color",
            foreignKey: "color_id",
            otherKey: "product_id",
            timestamps: false
        })
    }

    return Color;
}

export default model;
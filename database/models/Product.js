const model = function (sequelize, DataTypes) {
    let modelName, attributes, options;
    modelName = "Product"
    attributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.FLOAT
        },
        category_id: {
            type: DataTypes.INTEGER
        }
    }
    options = {
        tableName: "products",
        createdAt: 'created_at',
        updatedAt: 'modified_at',
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"

    }

    const Product = sequelize.define(modelName, attributes, options);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            as: "categoria",
            foreignKey: "category_id"
        });
        Product.belongsToMany(models.Color, {
            as: "colores",
            through: "product_color",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
        })
    }

    return Product;
}

export default model;
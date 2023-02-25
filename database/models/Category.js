const model = function (sequelize, DataTypes) {
    let modelName, attributes, options;
    modelName = "Category"
    attributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }
    options = {
        tableName: "categories",
        timestamps: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
    }

    const Category = sequelize.define(modelName, attributes, options);

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "productos",
            foreignKey: "category_id"
        });
    }

    return Category;
}

export default model;
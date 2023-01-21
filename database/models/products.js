module.exports = function (sequelize, DataTypes) {
    let alias = "Producto"
    let cols = {
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
    let config = {
        tableName: "products",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "category_id"
        });
        Producto.belongsToMany(models.Color, {
            as: "colores",
            through: "product_color",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
        })
    }

    return Producto;
}
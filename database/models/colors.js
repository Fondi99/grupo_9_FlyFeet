module.exports = function (sequelize, DataTypes) {
    let alias = "Color"
    let cols = {
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
    let config = {
        tableName: "colors",
        timestamps: false
    }

    let Color = sequelize.define(alias, cols, config);

    Color.associate = function (models) {
        Color.belongsToMany(models.Producto, {
            as: "productos",
            through: "product_color",
            foreignKey: "color_id",
            otherKey: "product_id",
            timestamps: false
        })
    }

    return Color;
}
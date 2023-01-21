module.exports = function (sequelize, DataTypes) {
    let alias = "Categoria"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }
    let config = {
        tableName: "categories",
        timestamps: false
    }

    let Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "category_id"
        });
    }

    return Categoria;
}
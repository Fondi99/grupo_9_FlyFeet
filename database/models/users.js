module.exports = function (sequelize, DataTypes) {
    let alias = "Usuario"
    let cols = {
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
        rol: {
            type: DataTypes.STRING
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Pedidos, {
            as: "pedidos",
            foreignKey: "user_id"
        });
    }
    return Usuario;
}
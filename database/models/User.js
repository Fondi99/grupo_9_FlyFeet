const model = function (sequelize, dataTypes) {
  let modelName, attributes, options;
  modelName = "User";
  attributes = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: dataTypes.ENUM,
      values: ["customer", "admin"],
      allowNull: false,
    },
    created_at: {
      type: dataTypes.DATE,
      defaultValue: dataTypes.NOW,
    },
    modified_at: {
      type: dataTypes.DATE,
      defaultValue: dataTypes.NOW,
    },
  };
  options = {
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
  };

  const User = sequelize.define(modelName, attributes, options);

  return User;
};

export default model;

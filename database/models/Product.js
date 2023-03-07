const model = function (sequelize, dataTypes) {
  let modelName, attributes, options;
  modelName = "Product";
  attributes = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.TEXT,
    },
    image: {
      type: dataTypes.STRING,
    },
    price: {
      type: dataTypes.FLOAT,
    },
    created_at: {
      type: dataTypes.DATE,
      defaultValue: dataTypes.NOW,
    },
    updated_at: {
      type: dataTypes.DATE,
      defaultValue: dataTypes.NOW,
    },
  };
  options = {
    tableName: "products",
    createdAt: "created_at",
    updatedAt: "updated_at",
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
  };

  const Product = sequelize.define(modelName, attributes, options);

  return Product;
};

export default model;

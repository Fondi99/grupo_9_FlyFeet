import Sequelize from "sequelize";
import process from "process";
//
import Product from "./Product.js";
import User from "./User.js";
//
import config from "../config/config.js"
// 
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const models = [Product, User];

models.forEach((model) => {
  let modelInit = model(sequelize, Sequelize.DataTypes);
  db[modelInit.name] = modelInit;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
import Sequelize from "sequelize";
import process from "process";
//
import Category from "./categories.js";
import Color from "./colors.js";
import Order from "./orders.js";
import Payment from "./payments.js";
import Product from "./products.js";
import User from "./users.js";

const config = {
  database: "flyfeet_db",
  username: "root",
  password: "1234",
  host: "127.0.0.1",
  dialect: "mysql",
};
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

const models = [Category, Color, Order, Payment, Product, User];

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
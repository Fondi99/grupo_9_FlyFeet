import Sequelize from "sequelize";
import process from "process";
//
import Category from "./Category.js";
import Color from "./Color.js";
import Order from "./Order.js";
import Payment from "./Payment.js";
import Product from "./Product.js";
import User from "./User.js";

const config = {
  database: "flyfeet_db",
  username: "root",
  password: "",
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
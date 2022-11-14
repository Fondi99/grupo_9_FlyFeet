import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controller = {
  home: (req, res) => {
    return res.render("home");
  },

  product: (req, res) => {
    return res.render("products/detail");
  },

  cart: (req, res) => {
    return res.render("products/cart");
  },

  login: (req, res) => {
    return res.render("users/login");
  },

  register: (req, res) => {
    return res.render("users/register");
  },

  err404: (req, res) => {
    return res.render("errors/err404");
  },
};

export default controller;

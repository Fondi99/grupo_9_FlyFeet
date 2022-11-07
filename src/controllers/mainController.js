import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controller = {
  home: (req, res) => {
    return res.render(path.resolve(__dirname, "../views/home"));
  },

  product: (req, res) => {
    return res.render(path.resolve(__dirname, `../views/products/detail`));
  },

  cart: (req, res) => {
    return res.render(path.resolve(__dirname, "../views/products/cart"));
  },

  login: (req, res) => {
    return res.render(path.resolve(__dirname, "../views/users/login"));
  },

  register: (req, res) => {
    return res.render(path.resolve(__dirname, "../views/users/register"));
  },

  err404: (req, res) => {
    return res.render(path.resolve(__dirname, "../views/errors/err404"));
  },
};

export default controller;

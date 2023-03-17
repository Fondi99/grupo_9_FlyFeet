import { validationResult } from "express-validator";
import productService from "../services/productService.js";
import userService from "../services/userService.js";
import authService from "../services/authService.js";
//
const controller = {
  getLogin: (req, res) => {
    res.render("./admin/login");
  },
  login: async (req, res) => {
    let { email: email, password: password } = req.body;
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let isValid;
      isValid = await authService.login(email, password);
      if (isValid) {
        let user = await userService.getUser(email);
        if (user) {
          req.session.user = user;
          if (req.body.rememberMe) {
            //si el usuario marca el checkbox creamos una cookie
            res.cookie("rememberMe", user, { maxAge: 1000 * 60 * 60 * 24 });
          }
        }
        res.redirect("/admin");
      } else {
        res.render("./admin/login", {
          errors: {
            form: { msg: "Las credenciales ingresadas son inválidas" },
          },
          form: { email: email },
        });
      }
    } else {
      res.render("./admin/login", {
        errors: errors.mapped(),
        form: { email: email },
      });
    }
  },
  getProducts: async (req, res) => {
    let { products: products } = await productService.getProducts();
    res.render("./admin/products", {
      user: req.session.user,
      products: products,
    });
  },
  getProduct: async (req, res) => {
    let { id } = req.params;
    let { product: product } = await productService.getProduct(id);
    res.render("./admin/product", { user: req.session.user, product: product });
  },
  getProductEdit: async (req, res) => {
    let { id } = req.params;
    let { product } = await productService.getProduct(id);
    res.render("./admin/productEdit", {
      user: req.session.user,
      product: product,
    });
  },
  editProduct: async (req, res) => {
    let { id } = req.params;
    let { name, description, price } = req.body;
    let { product } = await productService.getProduct(id)
    let imagePath = req.file?.filename || product.image
    await productService.editProduct(
      id,
      name,
      description,
      price,
      imagePath
    );
    res.redirect("/admin/products");
  },
  getProductCreate: (req, res) => {
    res.render("./admin/productNew", { user: req.session.user });
  },
  createProduct: async (req, res) => {
    let { name, description, price } = req.body;
    let imagePath = req.file?.filename || "default.png"
    await productService.createProduct(name, description, price, imagePath);
    res.redirect("/admin/products");
  },
  deleteProduct: async (req, res) => {
    let { id } = req.params;
    let product = await productService.deleteProduct(id);
    res.redirect("/admin/products");
  },
  getUsers: async (req, res) => {
    let users = await userService.getUsers();
    res.render("./admin/users", {
      user: req.session.user,
      users: users,
    });
  },
};

export default controller;

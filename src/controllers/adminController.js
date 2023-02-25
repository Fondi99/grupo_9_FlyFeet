import { check, validationResult } from "express-validator";
import productService from "../services/productService.js";
import userService from "../services/userService.js";
import authService from "../services/authService.js";
import bcrypt from "bcryptjs";
//
const controller = {
  getLogin: (req, res) => {
    res.render("./admin/login");
  },
  login: (req, res) => {
    let { email: email, password: password } = req.body;
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let isValid;
      isValid = authService.login(email, password);
      if (isValid) {
        let user = userService.getUser(email);
        if (user) {
          req.session.user = user;
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
  getProducts: (req, res) => {
    let products = productService.getProducts();
    res.render("./admin/products", {
      user: req.session.user,
      products: products,
    });
  },
  getProduct: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.render("./admin/product", { user: req.session.user, product: product });
  },
  getProductEdit: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.render("./admin/productEdit", {
      user: req.session.user,
      product: product,
    });
  },
  editProduct: (req, res) => {
    let { id } = req.params;
    let { name, description, brand, category, price, colors } = req.body;
    let productForm = {
      id: id,
      name: name,
      description: description,
      brand: brand,
      category: category,
      price: price,
      colors: colors,
      image: req.file?.filename || "default.png",
    };
    let { product } = productService.editProduct(productForm);
    res.redirect("/admin/products");
  },
  getProductCreate: (req, res) => {
    res.render("./admin/productNew", { user: req.session.user });
  },
  createProduct: (req, res) => {
    let { name, description, brand, category, price, colors } = req.body;
    let productForm = {
      name: name,
      description: description,
      brand: brand,
      category: category,
      price: price,
      colors: colors,
      image: req.file?.filename || "default.png",
    };
    let { product } = productService.createProduct(productForm);
    res.redirect("/admin/products");
  },
  deleteProduct: (req, res) => {
    let { id } = req.params;
    let product = productService.deleteProduct(id);
    res.redirect("/admin/products");
  },
};

export default controller;

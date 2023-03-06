import { check, validationResult } from "express-validator";
//
import authService from "../services/authService.js";
import userService from "../services/userService.js";
import productService from "../services/productService.js";
//
const controller = {
  getHome: async (req, res) => {
    let { products: products } = await productService.getProducts();
    res.render("home", { user: req.session.user, products: products });
  },
  getCart: (req, res) => {
    res.render("products/cart", { user: req.session.user });
  },
  getLogin: (req, res) => {
    res.render("users/login");
  },
  login: (req, res) => {
    let { email: email, password: password } = req.body;
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let isValid;
      isValid = authService.login(email, password);
      if (isValid) {
        let { user } = userService.getUser(email);
        if (user) {
          req.session.user = user;
        }
        res.redirect("/");
      } else {
        res.render("users/login", {
          errors: {
            form: { msg: "Las credenciales ingresadas son inválidas" },
          },
          form: { email: email },
        });
      }
    } else {
      res.render("users/login", {
        errors: errors.mapped(),
        form: { email: email },
      });
    }
  },
  getRegister: (req, res) => {
    res.render("users/register");
  },
  register: (req, res) => {
    let { name, email, password } = req.body;
    let results = validationResult(req);
    if (results.isEmpty()) {
      try {
        let user = userService.createUser(
          name,
          password,
          email
        );
        res.render("./users/registerRedirect", { user })
      } catch (err) {
        console.log(err)
      }
    } else {
      res.render("users/register", { errors: results.errors, old: req.body });
    }
  },
};

export default controller;

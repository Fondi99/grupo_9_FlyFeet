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
  login: async (req, res) => {
    let results = validationResult(req);
    if (results.isEmpty()) {
      try {
        let username = req.body;
        let user = await userService.getUser(username.email);
        let isValid = await authService.login(username.email, username.password);

        if (isValid) {
          //si el password es correcto almacenamos el nombre y la categoria del usuario en session
          req.session.user = user;
          if (req.body.rememberMe) {
            //si el usuario marca el checkbox creamos una cookie
            res.cookie('rememberMe', user, { maxAge: 1000 * 60 * 60 * 24 });
            console.log(res.cookie)
          }
          res.redirect("/");
          // res.send(user)
        } else {
          results.errors.push({
            value: '',
            msg: 'Contraseña incorrecta',
            param: 'password',
            location: 'body'
          })
          res.render('./users/login', { errors: results.errors, old: req.body })
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      res.render('./users/login', { errors: results.errors, old: req.body })
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

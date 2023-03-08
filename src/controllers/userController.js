import { check, validationResult } from "express-validator";
//
import authService from "../services/authService.js";
import userService from "../services/userService.js";
//
const controller = {
  getProfile: (req, res) => {
    res.render("users/profile", { user: req.session.user })
  },
  getLogin: (req, res) => {
    res.render("users/login");
  },
  login: async (req, res) => {
    let results = validationResult(req);
    if (results.isEmpty()) {
      try {
        let { email, password } = req.body;
        let user = await userService.getUser(email);
        let isValid = await authService.login(email, password);
        if (isValid) {
          //si el password es correcto almacenamos el nombre y la categoria del usuario en session
          req.session.user = user;
          if (req.body.rememberMe) {
            //si el usuario marca el checkbox creamos una cookie
            res.cookie("rememberMe", user, { maxAge: 1000 * 60 * 60 * 24 });
            console.log(res.cookie);
          }
          res.redirect("/");
          // res.send(user)
        } else {
          results.errors.push({
            value: "",
            msg: "Contraseña incorrecta",
            param: "password",
            location: "body",
          });
          res.render("./users/login", {
            errors: results.errors,
            old: req.body,
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      res.render("./users/login", { errors: results.errors, old: req.body });
    }
  },
  getRegister: (req, res) => {
    res.render("users/register");
  },
  register: (req, res) => {
    let { firstName, lastName, email, images, password } = req.body;
    let results = validationResult(req);
    if (results.isEmpty()) {
      try {
        let user = userService.createUser(firstName, lastName, email, password, images);
        res.render("./users/registerRedirect", { user });
      } catch (err) {
        console.log(err);
      }
    } else {
      res.render("users/register", { errors: results.errors, old: req.body });
    }
  },
  logout: async (req, res) => {
    try {
      req.session.destroy();
      res.clearCookie('rememberMe');
      res.clearCookie('rememberCategory');
      res.redirect('/');

    } catch (error) {
      console.log(error);
    }
  }
};

export default controller;

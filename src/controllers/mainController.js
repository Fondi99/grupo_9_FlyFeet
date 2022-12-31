import { check, validationResult } from "express-validator";
//
import authService from "../services/authService.js";
import userService from "../services/userService.js";
//
const controller = {
  getHome: (req, res) => {
    res.render("home");
  },
  getCart: (req, res) => {
    res.render("cart");
  },
  getLogin: (req, res) => {
    res.render("users/login");
  },
  login: (req, res) => {
    let { email: username, password: password } = req.body;
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let isValid;
      isValid = authService.login(username, password);
      if (isValid) {
        res.redirect("/");
      } else {
        res.render("users/login", {
          errors: {
            form: { msg: "Las credenciales ingresadas son inválidas" },
          },
          form: { email: username },
        });
      }
    } else {
      res.render("users/login", {
        errors: errors.mapped(),
        form: { email: username },
      });
    }
  },
  getRegister: (req, res) => {
    res.render("users/register");
  },
  register: (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    console.log(req.body)
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let { user } = userService.createUser({
        firstName,
        lastName,
        email,
        password,
      });
      if (user) {
        res.render("users/login", {
          form: { email: email },
        });
      } else {
        res.render("users/register", {
          errors: {
            form: { msg: "El email ingresado ya fue utilizado" },
          },
          form: { email: email, firstName: firstName, lastName: lastName },
        });
      }
    } else {
      res.render("users/register", {
        errors: errors.mapped(),
        form: { email: email, firstName: firstName, lastName: lastName },
      });
    }
  },
};

export default controller;

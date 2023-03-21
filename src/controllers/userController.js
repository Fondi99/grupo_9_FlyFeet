import { check, validationResult } from "express-validator";
//
import authService from "../services/authService.js";
import userService from "../services/userService.js";
import db from "../../database/models/index.js";
import bcrypt from "bcryptjs";
//
const controller = {
  getProfile: async (req, res) => {
    let user = await userService.getUser(req.session.user.email)
    res.render("users/profile", { user: user })
  },
  getProfileEdit: async (req, res) => {
    try {
      let user = await userService.getUser(req.session.user.email)
      res.render("users/profileEdit", { user })
    } catch (error) {
      console.log(error);
    }
  },
  profileEdit: async (req, res) => {
    let results = validationResult(req);
    let user
    //Si no hay errores que pruebe hacer un update y redirija al perfil
    try {
      let id = req.params.id
      user = await db.User.findByPk(id);
    } catch (error) {
      console.log(error);
    }
    if (results.isEmpty()) {
      if (user.password === req.body.password) {
        try {
          await user.update(req.body);
          res.render('./users/profile', user)
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await user.update(
            {
              ...req.body,
              password: bcrypt.hashSync(req.body.password, 8)
            });
          res.render("./users/profile", { user })
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      res.render('./users/profileEdit', { user, errors: results.errors })
    }
  },
  deleteAccount: async (req, res) => {
    let user = await userService.getUser(req.session.user.email)
    let id = user.id
    await userService.deleteUser(id)
    req.session.destroy();
    res.clearCookie('rememberMe');
    res.clearCookie('rememberCategory');
    res.redirect('/');
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
    let { firstName, lastName, email, password } = req.body;
    let imagePath = req.file?.filename || "default.png"
    let results = validationResult(req);
    if (results.isEmpty()) {
      try {
        let user = userService.createUser(firstName, lastName, email, password, imagePath);
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
  },
  contacto: (req, res) => {
    res.render("users/contacto");
}
}

export default controller;

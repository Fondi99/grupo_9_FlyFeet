import { check } from "express-validator";
import db from "../../database/models/index.js";
import bcrypt from "bcryptjs";

export const loginValidation = [
  check("email")
    .notEmpty().withMessage('Debes ingresar tu nombre de usuario.').bail()
    .custom(async value => {
      let userEmail = await db.User.findOne({
        where: { 'email': value }
      });
      if (userEmail === null) {
        return Promise.reject();
      }
    })
    .withMessage('El nombre de usuario es incorrecto.'),
  check("password")
    .notEmpty().withMessage('Debes ingresar tu contraseña.').bail()
    .custom(async function (value) {
      let userPassword = await db.User.findAll();
      let hasheo;
      for (let i = 0; i < userPassword.length; i++) {
        if (bcrypt.compareSync(value, userPassword[i].dataValues.password)) {
          hasheo = 1;
        }
      }
      if (hasheo === 1) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    })
    .withMessage('La contraseña es incorrecta.')
];

export const registerValidation = [
  check("firstName")
    .notEmpty().withMessage("Debe ingresar su nombre").bail()
    .isLength({ min: 3 }).withMessage('El nombre debe tener mas de dos letras.').bail(),
  check("lastName")
    .notEmpty().withMessage("Debe ingresar su apellido")
    .isLength({ min: 3 }).withMessage('El nombre debe tener mas de dos letras.').bail(),
  check("email")
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debes ingresar un email válido")
    .custom(async value => {
      let userEmail = await db.User.findOne({
        where: { 'email': value }
      })
      if (userEmail !== null) {
        return Promise.reject();
      }
    })
    .withMessage("El email ya se encuentra registrado."),
  check("password")
    .notEmpty().withMessage("Debes ingresar una contraseña").bail()
    .isLength({ min: 8 }).withMessage("Debes ingresar una contraseña con al menos 8 carácteres")
    .isAlphanumeric().withMessage('La contraseña debe contener letras y números.').bail(),
];

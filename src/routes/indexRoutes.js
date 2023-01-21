import { Router } from "express";
import {
  loginValidation,
  registerValidation,
} from "../middlewares/formValidators.js";
import notLoggedIn from "../middlewares/notLoggedIn.js";
import mainController from "../controllers/mainController.js";

const router = Router();

router
  .get("/", mainController.getHome)
  .get("/cart", mainController.getCart)
  .get("/login", notLoggedIn, mainController.getLogin)
  .post("/login", notLoggedIn, loginValidation, mainController.login)
  .get("/register", notLoggedIn, mainController.getRegister)
  .post("/register", notLoggedIn, registerValidation, mainController.register);

export default router;

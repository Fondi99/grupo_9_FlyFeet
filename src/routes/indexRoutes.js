import { Router } from "express";
import {
  loginValidation,
  registerValidation,
} from "../middlewares/formValidators.js";
import mainController from "../controllers/mainController.js";

const router = Router();

router
  .get("/", mainController.getHome)
  .get("/cart", mainController.getCart)
  .get("/login", mainController.getLogin)
  .post("/login", loginValidation, mainController.login)
  .get("/register", mainController.getRegister)
  .post("/register", registerValidation, mainController.register);

export default router;

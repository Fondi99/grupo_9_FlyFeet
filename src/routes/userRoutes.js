import { Router } from "express";
import {
    loginValidation,
    registerValidation,
} from "../middlewares/formValidators.js";
import userController from "../controllers/userController.js";
import notLoggedIn from "../middlewares/notLoggedIn.js";
import fileUploader from "../middlewares/fileUploader.js"

const router = Router();
router
    .get("/profile", userController.getProfile)
    .get("/register", notLoggedIn, userController.getRegister)
    .post("/register", notLoggedIn, fileUploader.user, registerValidation, userController.register)
    .get("/login", notLoggedIn, userController.getLogin)
    .post("/login", notLoggedIn, loginValidation, userController.login)
    .post("/logout", userController.logout)
export default router;

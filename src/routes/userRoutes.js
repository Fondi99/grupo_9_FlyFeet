import { Router } from "express";
import {
    loginValidation,
    registerValidation,
    editUserValidation,
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
    .get("/profileEdit/:id", userController.getProfileEdit)
    .put("/profileEdit/:id", editUserValidation, userController.profileEdit)
    .delete("/profileEdit/:id", userController.deleteAccount)
    .get("/contacto", userController.contacto)
export default router;

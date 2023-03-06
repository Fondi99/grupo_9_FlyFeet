import { Router } from "express";
import mainController from "../controllers/mainController.js";
import userController from "../controllers/userController.js"

const router = Router();
router
    .get("/profile", userController.getProfile)

export default router;

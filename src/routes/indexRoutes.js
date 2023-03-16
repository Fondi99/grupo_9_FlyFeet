import { Router } from "express";
import mainController from "../controllers/mainController.js";

const router = Router();

router
  .get("/", mainController.getHome)
  .get("/cart", mainController.getCart)
  .get("/list", mainController.getList)
export default router;

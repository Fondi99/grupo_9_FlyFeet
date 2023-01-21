import { Router } from "express";
import adminLoggedIn from "../middlewares/adminLoggedIn.js";
import productController from "../controllers/productController.js";
import fileUploader from "../middlewares/fileUploader.js"

const router = Router();

router
  .get("/", adminLoggedIn, productController.getProducts)
  .get("/create", adminLoggedIn, productController.getProductCreate)
  .post("/", adminLoggedIn, fileUploader.product ,productController.createProduct)
  .get("/:id", adminLoggedIn, productController.getProduct)
  .get("/:id/edit", adminLoggedIn, productController.getProductEdit)
  .put("/:id", adminLoggedIn, productController.editProduct)
  .delete("/:id", adminLoggedIn, productController.deleteProduct);
export default router;

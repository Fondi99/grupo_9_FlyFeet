import { Router } from "express";
import productController from "../controllers/productController.js";
import fileUploader from "../middlewares/fileUploader.js"

const router = Router();

router
  .get("/", productController.getProducts)
  .get("/create", productController.getProductCreate)
  .post("/", fileUploader.product ,productController.createProduct)
  .get("/:id", productController.getProduct)
  .get("/:id/edit", productController.getProductEdit)
  .put("/:id", productController.editProduct)
  .delete("/:id", productController.deleteProduct);
export default router;

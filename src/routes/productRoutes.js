import { Router } from "express";
import productController from "../controllers/productController.js";

const router = Router();

router
  .get("/", productController.getProducts)
  .get("/create", productController.getProductCreate)
  .post("/", productController.createProduct)
  .get("/:id", productController.getProduct)
  .get("/:id/edit", productController.getProductEdit)
  .put("/:id", productController.editProduct)
  .delete("/:id", productController.deleteProduct);
export default router;

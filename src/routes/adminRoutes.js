import { Router } from "express";
import adminController from "../controllers/adminController.js";
import fileUploader from "../middlewares/fileUploader.js";

const router = Router();

router
  .get("/", (req, res) => {
    res.redirect("/admin/products");
  })
  .get("/products", adminController.getProducts)
  .post("/products", fileUploader.product, adminController.createProduct)
  .get("/products/create", adminController.getProductCreate)
  .get("/products/:id/edit", adminController.getProductEdit)
  .get("/products/:id", adminController.getProduct)
  .put("/products/:id", fileUploader.product, adminController.editProduct)
  .delete("/products/:id", adminController.deleteProduct)
  .get("/login", adminController.getLogin);

export default router;

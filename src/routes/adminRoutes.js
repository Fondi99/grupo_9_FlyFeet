import { Router } from "express";
import adminLoggedIn from "../middlewares/adminLoggedIn.js";
import notLoggedIn from "../middlewares/notLoggedIn.js";
import adminController from "../controllers/adminController.js";
import fileUploader from "../middlewares/fileUploader.js";
import { loginValidation } from "../middlewares/formValidators.js";
const router = Router();

router
  .get("/", (req, res) => {
    res.redirect("/admin/products");
  })
  .get("/login", notLoggedIn, adminController.getLogin)
  .post("/login", notLoggedIn, loginValidation, adminController.login)
  .get("/products", adminLoggedIn, adminController.getProducts)
  .post("/products", adminLoggedIn, fileUploader.product, adminController.createProduct)
  .get("/products/create", adminLoggedIn, adminController.getProductCreate)
  .get("/products/:id/edit", adminLoggedIn, adminController.getProductEdit)
  .get("/products/:id", adminLoggedIn, adminController.getProduct)
  .put("/products/:id", adminLoggedIn, fileUploader.product, adminController.editProduct)
  .delete("/products/:id", adminLoggedIn, adminController.deleteProduct);

export default router;

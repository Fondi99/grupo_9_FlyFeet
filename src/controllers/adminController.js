import productService from "../services/productService.js";
//
const controller = {
  getLogin: (req, res) => {
    res.render("./admin/login");
  },
  getProducts: (req, res) => {
    let { products } = productService.getProducts();
    res.render("./admin/products", { products: products });
  },
  getProduct: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.render("./admin/product", { product: product });
  },
  getProductEdit: (req, res) => {
    let { id } = req.params;
    let { product } = productService.getProduct(id);
    res.render("./admin/productEdit", { product: product });
  },
  editProduct: (req, res) => {
    let { id } = req.params;
    let { name, description, brand, category, price, colors } = req.body;
    let productForm = {
      id: id,
      name: name,
      description: description,
      brand: brand,
      category: category,
      price: price,
      colors: colors,
      image: req.file?.filename || "default.png",
    };
    let { product } = productService.editProduct(productForm);
    res.redirect("/admin/products");
  },
  getProductCreate: (req, res) => {
    res.render("./admin/productNew");
  },
  createProduct: (req, res) => {
    let { name, description, brand, category, price, colors } = req.body;
    let productForm = {
      name: name,
      description: description,
      brand: brand,
      category: category,
      price: price,
      colors: colors,
      image: req.file?.filename || "default.png",
    };
    let { product } = productService.createProduct(productForm);
    res.redirect("/admin/products");
  },
  deleteProduct: (req, res) => {
    let { id } = req.params;
    let product = productService.deleteProduct(id);
    res.redirect("/admin/products");
  },
};

export default controller;

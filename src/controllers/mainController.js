import productService from "../services/productService.js";
//
const controller = {
  getHome: async (req, res) => {
    let { products: products } = await productService.getProducts();
    res.render("home", { user: req.session.user, products: products });
  },
  getCart: (req, res) => {
    res.render("products/cart", { user: req.session.user });
  },
  getList: async (req, res) => {
    let { products: products } = await productService.getProducts();
    res.render("products/list", { user: req.session.user, products: products });
  }
};

export default controller;

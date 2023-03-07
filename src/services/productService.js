import db from "../../database/models/index.js";

const productService = {
  getProducts: async () => {
    try {
      let products = await db.Product.findAll({
        raw: true,
      });
      return {
        products: products.map((product) => ({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
        })),
      };
    } catch (err) {
      throw err;
    }
  },
  getProduct: async (id) => {
    try {
      let product = await db.Product.findByPk(id, {
        raw: true,
      });
      return {
        product: {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description
        },
      };
    } catch (err) {
      throw err;
    }
  },
  createProduct: async (name, image, price, description) => {
    let productForm = {
      name: name || undefined,
      image: image || undefined,
      price: price || undefined,
      description: description || undefined
    };
    try {
      let product = await db.Product.create(productForm);
      return product;
    } catch (err) {
      throw err;
    }
  },
  editProduct: async (id, name, image, price, description) => {
    let productForm = {
      name: name || undefined,
      image: image || undefined,
      price: price || undefined,
      description: description || undefined
    };
    try {
      let product = await db.Product.update(productForm, {
        where: {
          id: id,
        },
      }).then((code) => db.Product.findByPk(id));
      return product;
    } catch (err) {
      throw err;
    }
  },
  deleteProduct: async (id) => {
    try {
      let code = await db.Product.destroy({
        where: {
          id: id,
        },
      });
      return code;
    } catch (err) {
      throw err;
    }
  },
};

export default productService;

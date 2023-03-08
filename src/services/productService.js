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
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        description: product.description
      };
    } catch (err) {
      throw err;
    }
  },
  createProduct: async (name, description, price, imagePath) => {
    let productForm = {
      name: name || undefined,
      description: description || undefined,
      price: price || undefined,
      image: imagePath || undefined,
    };
    try {
      let product = await db.Product.create(productForm);
      return product;
    } catch (err) {
      throw err;
    }
  },
  editProduct: async (id, name, description, price, imagePath) => {
    let productForm = {
      name: name || undefined,
      description: description || undefined,
      price: price || undefined,
      image: imagePath || undefined,
    };
    try {
      let resultCode = await db.Product.update(productForm, {
        where: {
          id: id,
        },
      });
      let product = await db.Product.findByPk(id, {
        raw: true,
      });
      return { product: product };
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

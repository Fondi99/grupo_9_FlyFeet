import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controller = {
    home: (req, res) => {
        return res.render(path.resolve(__dirname, '../app/views/home'));
    },

    register: (req, res) => {
        return res.render(path.resolve(__dirname, '../app/views/register'));
    },

    cart: (req, res) => {
        return res.render(path.resolve(__dirname, '../app/views/cart'));
    },

    login: (req, res) => {
        return res.render(path.resolve(__dirname, '../app/views/login'));
    },

    product: (req, res) => {
        return res.render(path.resolve(__dirname, `../app/views/product`));
    },
}

export default controller;
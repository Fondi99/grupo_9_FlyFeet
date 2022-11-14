import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controller = {
  create: (req, res) => {
    return res.render("products/create");
  },
}

export default controller;
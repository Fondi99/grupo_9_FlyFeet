import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controller = {
  login: (req, res) => {
    return res.render(path.resolve(__dirname, "../views/admin/login"));
  },
};

export default controller;

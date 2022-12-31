import fs from "fs";
import url from "url";
import path from "path";
import bcrypt from "bcryptjs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const service = {
  login: (username, password) => {
    let isValid = false;
    let { users } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/users.json"))
    );
    let user = users.find((user) => user.email == username);
    if (user) {
      isValid = bcrypt.compareSync(password, user.password);
    }
    return isValid;
  },
};

export default service;

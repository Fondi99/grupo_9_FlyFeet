import fs from "fs";
import url from "url";
import path from "path";
import bcrypt from "bcryptjs";
import userService from "./userService.js"

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const service = {
  login: async (username, password) => {
    let isValid = false;
    let user = await userService.getUser(username);
    if (user) {
      isValid = bcrypt.compareSync(password, user.password);
    }
    return isValid;
  },
};

export default service;

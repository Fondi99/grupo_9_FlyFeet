import bcrypt from "bcryptjs";
import userService from "./userService.js"

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

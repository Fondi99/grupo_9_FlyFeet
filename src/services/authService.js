import bcrypt from "bcryptjs";
import userService from "./userService.js"

const service = {
  login: async (email, password) => {
    console.log(`Validating credentials from ${email} and ${password}`)
    let isValid = false;
    let user = await userService.getUser(email);
    if (user) {
      isValid = bcrypt.compareSync(password, user.password);
    }
    return isValid;
  },
};

export default service;

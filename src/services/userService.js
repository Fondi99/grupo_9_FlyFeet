import fs from "fs";
import url from "url";
import path from "path";
import bcrypt from "bcryptjs";
// Local variables
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Service
const service = {
  createUser: (userForm) => {
    let { firstName, lastName, email, password } = userForm;
    let { lastId, users } = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../../data/users.json"))
    );
    let newUser;
    let user = users.find((user) => user.email == email);
    if (!user) {
      let hashedPassword = bcrypt.hashSync(password, 10);
      newUser = {
        id: lastId + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      };
      users.push(newUser);
      fs.writeFileSync(
        path.join(__dirname, "../../data/users.json"),
        JSON.stringify({ lastId: lastId + 1, users: users })
      );
    }
    return { user: newUser };
  },
};

export default service;

import url from "url";
import path from "path";
import bcrypt from "bcryptjs";
import db from "../../database/models/index.js";
// Local variables
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Service
const userService = {
  getUsers: async () => {
    try {
      let users;
      users = await db.User.findAll({ raw: true });
      return users;
    } catch (err) {
      throw err;
    }
  },
  getUser: async (email) => {
    try {
      let user = await db.User.findOne({ raw: true, where: { email: email } });
      return user;
    } catch (err) {
      throw err;
    }
  },
  createUser: async (
    name,
    password,
    email,
    address,
    zip,
    phone_number,
    city
  ) => {
    let userForm = {
      name: name || undefined,
      password: (password && bcrypt.hashSync(password, 8)) || undefined,
      email: email || undefined,
      address: address || undefined,
      zip: zip || undefined,
      phone_number: phone_number || undefined,
      city: city || undefined
    };
    try {
      let user = await db.User.create(userForm);
      return user;
    } catch (err) {
      throw err;
    }
  },
  updateUser: async (
    id,
    name,
    password,
    email,
    address,
    zip,
    phone_number,
    city
  ) => {
    let userForm = {
      name: name || undefined,
      password: (password && bcrypt.hashSync(password, 8)) || undefined,
      email: email || undefined,
      address: address || undefined,
      zip: zip || undefined,
      phone_number: phone_number || undefined,
      city: city || undefined
    };
    try {
      let user = await db.User.update(userForm, {
        where: {
          id: id,
        },
      }).then((code) => db.User.findByPk(id));
      return user;
    } catch (err) {
      throw err;
    }
  },
  deleteUser: async (id) => {
    try {
      let code = await db.User.destroy({
        where: {
          id: id,
        },
      });
      return code;
    } catch (err) {
      throw err;
    }
  },
  updatePassword: async (id, password) => {
    let hashedPassword = bcrypt.hashSync(password, 8);
    try {
      let code = await db.User.update(
        { password: hashedPassword },
        {
          where: {
            id: id,
          },
        }
      );
      let user = await db.User.findByPk(id);
      return user;
    } catch (err) {
      throw err;
    }
  }
};

export default userService;

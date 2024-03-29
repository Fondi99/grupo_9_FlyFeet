import bcrypt from "bcryptjs";
import db from "../../database/models/index.js";

// Service
const userService = {
  getUsers: async () => {
    try {
      let users;
      users = await db.User.findAll({ raw: true });
      return users
      //.map((user) => parseUser(user));
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
  createUser: async (firstName, lastName, email, password, images) => {
    let userForm = {
      first_name: normalize(firstName) || undefined,
      last_name: normalize(lastName) || undefined,
      email: normalize(email) || undefined,
      password: (password && bcrypt.hashSync(password, 8)) || undefined,
      role: 2,
      images: images || undefined
    };
    try {
      let user = await db.User.create(userForm);
      return user;
    } catch (err) {
      throw err;
    }
  },
  updateUser: async (id, firstName, lastName, email, password, images) => {
    let userForm = {
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      email: email || undefined,
      images: images || undefined,
      password: (password && bcrypt.hashSync(password, 8)) || undefined,
    };
    try {
      await db.User.update(userForm, {
        where: {
          id: id,
        },
      })
      let user = await db.Product.findByPk(id, {
        raw: true,
      });
      return { user: user };
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
  },
};

function parseUser(user) {
  return {
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    password: user.password,
    role: user.role,
    images: user.images
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function normalize(string) {
  return string.toLowerCase().trim();
}

export default userService;

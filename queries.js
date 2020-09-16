const TodoItem = require("./models").todoItem;
const User = require("./models").user;

const getUserById = async (id) => {
  try {
    const userById = await User.findByPk(id);
    console.log(userById);
  } catch (e) {
    console.error(e);
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll();
    console.log(allUsers);
  } catch (e) {
    console.error(e);
  }
};

const createUser = async () => {
  try {
    const newUser = await User.create({
      name: "Jack",
      email: "Jack@hotmail.com",
      phone: 193123492,
      password: "1234",
    });
    return [newUser].map((singleUser) => singleUser.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
};

const getImportantItems = async () => {
  try {
    const items = await TodoItem.findAll({
      where: {
        important: true,
      },
    });
    console.log(items.map((i) => i.get({ plain: true })));
  } catch (e) {
    console.log(e.message);
  }
};

getImportantItems();

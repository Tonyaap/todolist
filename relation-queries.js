const { user, todoItem, todoList, tag } = require("./models");

async function listTags() {
  const items = await todoItem.findAll({
    include: [tag],
  });
  const cleanItems = items.map((tag) => tag.get({ plain: true }));
  console.log(cleanItems);
}

listTags();

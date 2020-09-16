"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "Throw away garbage",
        deadline: "Today",
        todoListId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "cook dinner",
        deadline: "Tonight",
        todoListId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Eat play sleep",
        deadline: "never",
        todoListId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "do nothing",
        deadline: "always",
        todoListId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Exercise",
        deadline: "before the weekend",
        todoListId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};

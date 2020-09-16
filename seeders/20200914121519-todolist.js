"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("todoLists", [
      {
        name: "Stefan's List",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thari's List",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nicole's List",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Timmy's List",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marloes's List",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};

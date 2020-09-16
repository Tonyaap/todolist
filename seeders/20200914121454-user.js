"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Stefan Kniest",
        email: "stefan_kniest_@hotmail.com",
        phone: 19382892,
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nicole Sibie",
        email: "nic_sib@hotmail.com",
        phone: 19382812,
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marloes Kniest",
        email: "marloes@hotmail.com",
        phone: 1233241234,
        password: "1123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Timmy Cat",
        email: "miauw@hotmail.com",
        phone: 12431234,
        password: "4321",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thari Schroder",
        email: "thari@hotmail.com",
        phone: 34123412,
        password: "2432",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
